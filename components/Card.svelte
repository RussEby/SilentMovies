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
    <h4>{film.star}</h4>
</div>
  
<style>
  .film {
    text-align: center;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    background-color: var(--secondary-color);
    box-shadow: 9px 9px 13px 0px rgba(0, 0, 0, 0.75);
    color: var(--secondary-text-color);
    margin: 20px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .film:hover {
    transform: translate(1px, 1px);
    box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.75);
  }
  .film:active {
    transform: translate(1px, 4px);
    box-shadow: 5px 5px 6px 0px rgba(0, 0, 0, 0.75);
  }
  h2 {
    border-bottom: 1px solid var(--highlight);
    padding-bottom: 5px;
  }
</style>