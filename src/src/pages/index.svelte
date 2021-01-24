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

<div class="container-fluid">
{#each sites as site}

<details class="collapse-panel w-400 mw-full"> <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
  <summary class="collapse-header">
{site.name}  </summary>
  <div class="collapse-content">
            {site.description}
  </div>
</details>
{/each}
</div>