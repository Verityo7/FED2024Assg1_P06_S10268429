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