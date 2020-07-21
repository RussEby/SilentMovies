<script>
  export let showModal = false;
  export let film;
</script>

{#if showModal}
  <div class="backdrop" on:click|self>
    <div class="modal">
          <iframe 
            title="{film.title}" 
            src='{film.URL}' 
            frameborder="0" 
            webkitallowfullscreen="true" 
            mozallowfullscreen="true" 
            allowfullscreen></iframe>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99;
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
  iframe {
    width: 100%;
    height: 400px;
  }
</style>