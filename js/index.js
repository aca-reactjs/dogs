const list = document.getElementById("list");
const imageContainer = document.getElementById("imageContainer");

// fetch("https://dog.ceo/api/breeds/list/all", )
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//     const breeds = Object.keys(json.message);

//     breeds.forEach((breed) => {
//       const item = document.createElement("li");

//       item.textContent = breed;

//       item.addEventListener("click", async () => {
//         const response = await fetch(
//           `https://dog.ceo/api/breed/${breed}/images/random`
//         );

//         const json = await response.json();

//         const img = document.createElement("img");
//         img.src = json.message;

//         imageContainer.append(img);

//         console.log(json);
//       });

//       list.append(item);
//     });
//   });
