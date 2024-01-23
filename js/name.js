const itemsContainer = document.querySelector('.items');
const thing = document.querySelector('.thing');
const thing2 = document.querySelector('.pagegms');
const pagegmsiframe = document.getElementById('pagegmsiframe');
const fullscreen = document.getElementById('pagegmsclose');

fetch('../assets/name.json')
  .then((res) => res.json())
  .then((items) => {
    items.forEach((item) => {
      if (item.name === "Request") {
        const itemEl = document.createElement('div');
          itemEl.className = 'item';
          itemEl.innerHTML = `<a href="/contact"><img src="${item.img}" onerror="this.src='./assets/globe.svg'"/><span>${item.name}</span></a>`;
          itemsContainer.appendChild(itemEl);
          return;
      }
      const itemEl = document.createElement('div');
      itemEl.className = 'item';
      itemEl.innerHTML = `<a href="./math/${item.root}/${item.file}"><img src="${item.img}" onerror="this.src='./assets/globe.svg'"/><span>${item.name}</span></a>`;
      itemsContainer.appendChild(itemEl);
})});

var button = document.querySelector(".browsegms");
button.addEventListener("click", function(event) {
  event.preventDefault();
  var items = document.getElementById("items");
  items.scrollIntoView({behavior: "smooth"});
})

function filterItems() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.getElementsByClassName("item");
  let noitems = document.getElementsByClassName("noitem")[0];
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    let title = items[i].getElementsByTagName("span")[0].innerHTML.toLowerCase();
    if (title.includes(input)) {
      items[i].style.display = "block";
      count++;
    } else {
      items[i].style.display = "none";
    }
  }
  if (count == 0) {
    noitems.style.display = "initial";
  } else {
    noitems.style.display = "none";
  }
}