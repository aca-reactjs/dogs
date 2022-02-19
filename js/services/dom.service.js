import { getDogImageByBreed } from "./dog.service.js";

const createImage = (src) => {
  const img = document.createElement("img");
  img.src = src;

  return img;
};

const appendImageToContainer = (src) => {
  const imageContainer = document.getElementById("image-Container");
  const img = createImage(src);
  imageContainer.append(img);
};

const createListItem = (breed) => {
  const item = document.createElement("li");

  item.textContent = breed;

  item.addEventListener("click", async () => {
    const src = await getDogImageByBreed(breed);
    appendImageToContainer(src);
  });

  return item;
};

const appendBreedsList = (breeds) => {
  const list = document.getElementById("list");
  return breeds.forEach((breed) => {
    const li = createListItem(breed);
    list.append(li);
  });
};

export { createImage, createListItem, appendBreedsList };
