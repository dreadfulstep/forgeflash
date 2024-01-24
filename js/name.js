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