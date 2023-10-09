const dropzone = document.querySelector(".dropZone");
const inpute_file = document.querySelector(".inpute_file");
const containerDrop = document.querySelector(".containerDrop");
const containerDropChilds = document.querySelector(".containerDropChilds");

inpute_file.addEventListener("change", uploadImage);

function uploadImage() {
  console.log("ddtydd");
  if (containerDropChilds) {
    containerDropChilds.remove();
  }
  const existingImg = containerDrop.querySelector("img");
  if (existingImg) {
    containerDrop.removeChild(existingImg);
  }

  let imgLink = URL.createObjectURL(inpute_file.files[0]);
  console.log(imgLink);

  const imgElement = document.createElement("img");
  imgElement.src = imgLink;
  imgElement.className = "w-full h-full object-cover rounded-md"; // You may need to adjust the class for styling
  imgElement.alt = "Uploaded Image";
  containerDrop.classList.remove("p-6");
  containerDrop.append(imgElement);
}

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("dragover");
  dropzone.classList.add("bg-indigo-200");
});

dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  console.log("dragleave ");
  dropzone.classList.remove("bg-indigo-200");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("drop");
  dropzone.classList.remove("border-2");
  inpute_file.files = e.dataTransfer.files;
  console.log(inpute_file.files);
  uploadImage();
});
