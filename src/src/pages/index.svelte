<script>
import firebase from 'firebase';

    import { metatags } from '@roxi/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
 var firebaseConfig = {
    apiKey: "AIzaSyCAiYtTfVKecmPFboaDwB65vT-sYhGkaog",
    authDomain: "websitedb-970fc.firebaseapp.com",
    databaseURL: "https://websitedb-970fc.firebaseio.com",
    projectId: "websitedb-970fc",
    storageBucket: "websitedb-970fc.appspot.com",
    messagingSenderId: "722645547423",
    appId: "1:722645547423:web:017f0821b7ffe1b87565aa",
    measurementId: "G-FYN2YZB5TM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
let db = firebase.firestore();


let sites = []
db.collection("websites").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        sites = [...sites,doc.data()]
         console.log(doc.id, " => ", doc.data());
    });
});
</script>

<div class="container wrapper">
{#each sites as site}
<!-- Card with no padding with a content container nested inside of it -->
<div class="w-400 mw-full"> <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
  <div class="card p-0"> <!-- p-0 = padding: 0 -->
    <img src="{site.image}" class="img-fluid rounded-top" alt="..."> <!-- rounded-top = rounded corners on the top -->
    <!-- Nested content container inside card -->
    <div class="content">
      <h2 class="content-title">
      {site.name}
      </h2>
      <p class="text-muted">
      {site.description}
      </p>
      <div class="text-right"> <!-- text-right = text-align: right -->
        <a href="{site.discord}" class="btn">Discord</a>
        <a href="{site.url}" class="btn">Website</a>
      </div>
    </div>
  </div>
</div>

{/each}
</div>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>