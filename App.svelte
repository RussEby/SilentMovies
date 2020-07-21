<script>
  import Card from "./components/Card.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  let title = "Movie";

  const films = [
    {
      title: "Making A Living",
      star: "Charlie Chaplin",
      URL: "https://archive.org/embed/CC_1914_02_02_MakingALiving"
    },
    {
      title: "The Rink",
      star: "Charlie Chaplin",
      URL: "https://archive.org/embed/CC_1916_12_04_TheRink"
    }
  ];
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  <Header />
  {#each films as film}
	  <Card {film}/>
  {/each}
  <Footer />
</main>