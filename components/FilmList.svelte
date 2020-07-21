<script>
    import FilmStore from "../stores/Films.js";
    import Card from "./Card.svelte";
</script>

<div class="films">
 {#each $FilmStore as film}
	  <Card {film}/>
  {/each}
</div>

<style>
  .films {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--background-color);
  }
</style>