const getAll = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const json = await res.json();

  return json.message;
};

const getDogImageByBreed = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );

  const json = await response.json();

  return json.message;
};

export { getAll, getDogImageByBreed };
