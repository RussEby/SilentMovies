<script>
  import Card from "./components/Card.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import FilmStore from "./stores/Films.js";
  let title = "Movie";
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  <Header />
  {#each $FilmStore as film}
	  <Card {film}/>
  {/each}
  <Footer />
</main>