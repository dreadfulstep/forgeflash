const gamesContainer = document.querySelector('.games');
const gameContainer = document.querySelector('.gamecontainer');
const thing = document.querySelector('.thing');
const thing2 = document.querySelector('.pagegms');
const pagegmsiframe = document.getElementById('pagegmsiframe');
const fullscreen = document.getElementById('pagegmsclose');

fetch('../assets/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if (game.name === "Request A Game") {
        const gameEl = document.createElement('div');
          gameEl.className = 'game';
          gameEl.innerHTML = `<a href="/contact"><img src="${game.img}" onerror="this.src='./assets/globe.svg'"/><span>${game.name}</span></a>`;
          gamesContainer.appendChild(gameEl);
          return;
      }
      const gameEl = document.createElement('div');
      gameEl.className = 'game';
      gameEl.innerHTML = `<a href="./games/${game.root}/${game.file}"><img src="${game.img}" onerror="this.src='./assets/globe.svg'"/><span>${game.name}</span></a>`;
      gamesContainer.appendChild(gameEl);
})});

var button = document.querySelector(".browsegms");
button.addEventListener("click", function(event) {
  event.preventDefault();
  var games = document.getElementById("games");
  games.scrollIntoView({behavior: "smooth"});
})

function filterGames() {
  let input = document.getElementById("search").value.toLowerCase();
  let games = document.getElementsByClassName("game");
  let nogames = document.getElementsByClassName("nogames")[0];
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    let title = games[i].getElementsByTagName("span")[0].innerHTML.toLowerCase();
    if (title.includes(input)) {
      games[i].style.display = "block";
      count++;
    } else {
      games[i].style.display = "none";
    }
  }
  if (count == 0) {
    nogames.style.display = "initial";
  } else {
    nogames.style.display = "none";
  }
}