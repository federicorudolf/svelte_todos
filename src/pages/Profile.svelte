<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<section class="profileContainer d-flex flex-column justify-content-center align-items-center">
  <h3 class="profileContainer__title mt-3 mb-3"> Hi { displayName } ! </h3>
  <img class="profileContainer__image mt-3 mb-3 rounded-circle" src="{photoURL}" width="150">
  <span class="mt-3 mb-3"> Your id is { uid } </span>
</section>

