<script>
  export let film;
</script>

<div class="film">
    <h2>{film.title}</h2>
    <iframe title="{film.title}" src='{film.URL}' width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
</div>
  
<style>
  .film {
    border: 1px solid;
  }
</style>