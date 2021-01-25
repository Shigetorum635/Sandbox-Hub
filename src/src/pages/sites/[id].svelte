<script>
let loading = true;
import { db } from "./../../_components/firebase"
export let id;
let site;

let docRef = db.collection("websites").doc(id);
docRef.get().then(function(doc) {
    if (doc.exists) {
        site = doc.data();
        console.log("Document data:", doc.data());
        loading = false;

    } else {
        
        // doc.data() will be undefined in this case
        site = "Not found!"
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
</script>
{#if loading}
	<h1>Loading...</h1>
    {:else}
    <h1>{site}</h1>

{id}

{/if}

