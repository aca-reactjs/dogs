import { getAll } from "./services/dog.service.js";
import { appendBreedsList } from "./services/dom.service.js";
import { getBreeds } from "./utils/index.js";

const main = async () => {
  const dogs = await getAll();
  const breeds = getBreeds(dogs);

  appendBreedsList(breeds);
};

main();
