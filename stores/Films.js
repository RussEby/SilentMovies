import { writable } from "svelte/store";

const FilmStore = writable([
  {
    title: "Making A Living",
    star: "Charlie Chaplin",
    URL: "https://archive.org/embed/CC_1914_02_02_MakingALiving"
  },
  {
    title: "The Rink",
    star: "Charlie Chaplin",
    URL: "https://archive.org/embed/CC_1916_12_04_TheRink"
  },
  {
    title: "Frankenstein",
    star: "Charles Ogle, Augustus Philips, Mary Fuller",
    URL: "https://archive.org/embed/FrankensteinfullMovie"
  },
  {
    title: "Cinderella",
    star: "Mary Pickford",
    URL: "https://archive.org/embed/MaryPickfordCinderella"
  }
]);

export default FilmStore;
