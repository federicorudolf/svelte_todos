<script>
  import TodoItem from '../components/TodoItem.svelte';
  import fb from '../utils/firebase_config';
  import { BehaviorSubject } from 'rxjs';
  import { onDestroy } from 'svelte';

  export let uid;

  let { firestore } = fb;
  let text = 'Add new task';

  const todosRef = firestore.collection(firestore.firestore, 'todos');
  const q = firestore.query(todosRef, firestore.where('uid', '==', uid), firestore.orderBy('created'));
  // const todos = collectionData(q, 'id').pipe(startWith([]));
  const td$ = new BehaviorSubject([]);
  const todos = td$;
  const uns = firestore.onSnapshot(q,
  (querySnapshot) => {
      let tds = [];
      querySnapshot.forEach((doc) => {
        tds.push({ ...doc.data(), id: doc.id });
      });
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          console.log('modified');
          tds.map(item => item.id === change.doc.id ? ( {...change.doc.data(), id: change.doc.id } ) : item);
        }
        if (change.type === "removed") {
          console.log('removed');
          tds.map(item => item.id !== change.doc.id);
        }
      });
      td$.next(tds);
    },
    (error) => {
      console.log(error);
    }
  );

  function add() {
    firestore.addDoc(todosRef, { uid, text, complete: false, created: Date.now() })
    text = '';
  }

  function updateStatus(event) {
    console.log(event);
    const { id, newStatus } = event.detail;
    const docRef = firestore.doc(firestore.firestore, 'todos', id);
    firestore.updateDoc(docRef, { id, complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    const docRef = firestore.doc(firestore.firestore, 'todos', id);
    firestore.deleteDoc(docRef);
  }

  onDestroy(() => {
    uns();
  });

</script>

<ul>
  {#each $todos as todo}
    <TodoItem
      { ...todo }
      on:remove="{removeItem}"
      on:toggle="{updateStatus}" />
  {/each}
</ul>

<hr>

<footer class="d-flex flex-row justify-content-center align-items-center">
  <input class="mr-4" type="text" bind:value="{text}"> <button class="btn btn-outline-primary" on:click="{add}" on:keypress.enter={add}> Agregar: <strong> { text } </strong> </button>
</footer>


<hr>
