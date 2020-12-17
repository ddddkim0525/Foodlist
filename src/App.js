import { db } from "./services/firebase";
import {useEffect} from 'react'
/*
READ
on reads data continuously, running the callback when there is a change.
db.ref("REFERENCE").on("value", snapshot = > {snapshot.val()})
use once for one time reading. 
db.ref("REFERENCE").once('value').then((snapshot) =>{snapshot.val()})
WRITE
for set, you need to supply a unique key.
for push, an unique key is added automatically to the db.

db.ref("REFERNCE/unique_key").set({})
db.ref(`REFERENCE`).push({})

UPDATE
db.ref('Reference').update({})

REMOVE
db.ref("REFERNCE").remove()
*/
function App() {

  useEffect(() => {
    db.ref("Foods").once('value').then((snapshot) =>{console.log(snapshot.val())}) 
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
