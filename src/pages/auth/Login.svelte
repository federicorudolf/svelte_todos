<script>
   import Profile from '../Profile.svelte';
   import Todos from '../Todos.svelte';
   import fb from '../../utils/firebase_config';
   import { authState } from 'rxfire/auth';

   const { auth, signInWithPopup, GoogleAuthProvider, signOut } = fb.auth;
   let user = authState(auth);

   function login() {
     const google = new GoogleAuthProvider()
     console.log(google);
     signInWithPopup(auth, google)
      .then(res => console.log(res))
      .catch(err => console.log(err));
   }

   function logout() {
    signOut(auth).then(() => {
      user = authState(auth);
    }).catch(err => console.log(err));
   }

</script>

<section>
  {#if $user}
    <Profile { ...$user } />
    <button class="btn btn-primary" on:click="{ () => logout() }"> Logout </button>
    <hr>
    <Todos uid="{$user.uid}" />
    {:else}
      <button class="btn btn-danger" on:click="{login}"> Signin With Google </button>
  {/if}
</section>
