<script>
  import Modal from "./Modal.svelte";
  export let film;
  export let showModal = false;

  let toggleModal = () => {
    showModal = !showModal;
  };
</script>

<Modal {showModal} {film} on:click={toggleModal} />

<div class="film" on:click={toggleModal}>
    <h2>{film.title}</h2>
</div>
  
<style>
  .film {
    border: 1px solid;
    margin: 10px;
  }
</style>