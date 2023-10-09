const categoryInpute = document.getElementById("categoryInpute1");
const autocomplete = document.querySelector(".autocomplete");
let categoryContainer = document.querySelector(".category-container");
let categories = [];
let choosedCategories = [];

$.ajax({
  url: "http://localhost:5000/category/fetchCategorysAPI",
  method: "GET",
  dataType: "json",
  success: function (data) {
    // Handle the successful response here
    categories = data;
  },
  error: function (xhr, status, error) {
    // Handle any errors that occur during the request
    throw error;
  },
});

categoryInpute.addEventListener("input", (e) => {
  let value = categoryInpute.value.toLowerCase();
  autocomplete.innerHTML = "";
  let filteredCategories = [];

  if (value.trim() !== "") {
    filteredCategories = categories.filter((element) => {
      return element.title.toLowerCase().includes(value);
    });
  }

  filteredCategories.forEach((element) => {
    let html = `
    <div
    class=" CategoryOption bg-slate-300 text-black mb-1 py-2 pl-4 rounded-md cursor-pointer "
    >
    <p class = 'title'> ${element.title} </p>
    <input class="id" type="text" value=${element.id} hidden />
    </div>`;

    autocomplete.innerHTML = html;

    let CategoryOptions;
    if (filteredCategories.length > 1) {
      CategoryOptions = document.querySelectorAll(".CategoryOption");
    } else {
      CategoryOptions = document.querySelector(".CategoryOption");
    }
    CategoryOptions.addEventListener("click", () => {
      let title = CategoryOptions.querySelector(".title").innerHTML;
      let id = CategoryOptions.querySelector(".id").value;

      categoryContainer.insertAdjacentHTML(
        "beforeend",
        `
      <span
      class="shipCategory inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >${title}  <input type="text" value=${id} hidden /> </span>
     
    `
      );
      let category = { id: id, title: title };
      choosedCategories.push(category);
      console.log(choosedCategories);
      // clean up

      categories = categories.filter((element) => {
        return element.id != id;
      });
      categoryInpute.value = "";
      autocomplete.innerHTML = "";
    });
  });
});
