GE('resister_btn').addEventListener('click',()=>{
    db.collection("event").doc(event_id).set({
        name: GE('name_inp').value,
        description:GE('description_inp').value,
        ///TODO 
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        window.alert(error)
    })
})
