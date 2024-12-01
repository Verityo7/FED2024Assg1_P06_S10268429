//initialize the variables
const home = document.querySelector("#home");
const history = document.querySelector("#history");
const members = document.querySelector("#members");
const music = document.querySelector("#music");

//indicates to the user that the button has been clicked
function onPage(page) {
    if(page === home){
        home.style.backgroundColor = "#fa0f80";
    } else if(page === history){
        history.style.backgroundColor = "#0668e9";
    } else if(page === members){
        members.style.backgroundColor = "#ff7200";
    } else if(page === music){
        music.style.backgroundColor = "#18afae";
    }
}

//Changes the image when user clicks on the image
function toggleImage(imageElement) {
    // Get the current and alternate image sources from data attributes
    const defaultSrc = imageElement.getAttribute("data-default");
    const toggleSrc = imageElement.getAttribute("data-toggle");

    // Toggle between the default and alternate image
    imageElement.src = imageElement.src.endsWith(defaultSrc) ? toggleSrc : defaultSrc;
}

//Filtering the items according to the selected category
function filterResults() {
    const selectedCategory = document.getElementById("filter-select").value;
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        // If "all" is selected or the item's class matches the selected category, show it
        if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
}