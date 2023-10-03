document.addEventListener("DOMContentLoaded", () => {
  const scrollLeftButton = document.getElementById("scrollLeft");
  const scrollRightButton = document.getElementById("scrollRight");
  const categoryContainer = document.querySelector(".category-container");

  let scrollLeft = 0;
  const scrollAmount = 100; // Adjust the scroll amount as needed

  scrollLeftButton.addEventListener("click", () => {
    scrollLeft += scrollAmount;
    const maxScrollLeft = -100 * categoryContainer.children.length; // Adjust to show the number of categories you want
    scrollLeft = Math.max(scrollLeft, maxScrollLeft);
    console.log("max " + 100 * (categoryContainer.children.length - 10));
    console.log("scrollLeft button " + scrollLeft);
    if (scrollLeft < 100 * categoryContainer.children.length - 10) {
      categoryContainer.style.transform = `translateX(${scrollLeft}px)`;
    }
  });

  scrollRightButton.addEventListener("click", () => {
    scrollLeft -= scrollAmount;
    const maxScrollLeft = -100 * (categoryContainer.children.length - 3); // Adjust to show the number of categories you want
    console.log("maxScrollright" + maxScrollLeft);
    scrollLeft = Math.max(scrollLeft, maxScrollLeft);
    console.log("scrollRightButton " + scrollLeft);
    categoryContainer.style.transform = `translateX(${scrollLeft}px)`;
  });
});
