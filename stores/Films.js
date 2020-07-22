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
  },
  {
    title: "Alice In Wonderland",
    star: "W W Young",
    URL: "https://archive.org/embed/AliceInWonderland1915_503"
  },
  {
    title: "The Night Before Christmas",
    star: "Santa Claus",
    URL: "https://archive.org/embed/TheNightBeforeChristmas_235"
  },
  {
    title: "A Christmas Carol",
    star: "Marc McDermott",
    URL: "https://archive.org/embed/AChristmasCarol1910"
  },
  {
    title: "The Count",
    star: "Charlie Chaplin",
    URL: "https://archive.org/embed/CC_1916_09_04_TheCount"
  },
  {
    title: "The Haunted Castle",
    star: "Georges Méliès",
    URL: "https://archive.org/embed/The_Haunted_Castle_1896"
  },
  {
    title: "The General",
    star: "Buster Keaton, Clyde Bruckman",
    URL: "https://archive.org/embed/TheGeneral"
  }
]);

export default FilmStore;
