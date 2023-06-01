//Ya
/*
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    console.log("Search clicked")
  const inputValue = searchInput.value;
  window.open("https://alltogethernow.findhelp.com/search_results/" + inputValue, '_blank');
});
*/
const p2 = document.getElementById("p2");

button.onclick = function (){p2.innerText = "Hello! This text changed"};

function changeText(){p2.innerText = "Hello! This text changed"};

function h6Change(){
  document.getElementById("h6").innerText = "This h6 has been clicked";
}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}