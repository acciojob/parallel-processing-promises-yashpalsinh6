
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    console.dir(img);
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${url}`);
  });
}

function downloadImages(imageArray) {
  return Promise.all(imageArray.map((imageObj) => loadImage(imageObj.url)));
}

function displayImages(images) {
  images.forEach((img) => output.appendChild(img));
}

document
  btn.addEventListener("click", () => {
    downloadImages(images)
      .then(displayImages)
      .catch((error) => console.error(error));
  });