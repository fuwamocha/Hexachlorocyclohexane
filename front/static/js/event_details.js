url = new URL(location.href)
event_id = url.searchParams.get('eid')
if(!event_id){
    window.alert('イベントが見つかりません')
}
db.collection("event_to_user").where("event_id", "==", event_id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data=doc.data()
            card=CE('a')
            card.href=data.userid
            div=CE('div')
            img=CE('img')
            img.src=data.iconpath
            span=CE('span')
            span.innerText=data.username
            div.appendChild(img)
            div.appendChild(span)
            a.appendChild(div)
            GE('users_container').appendChild(a)
        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
});

db.collection("event").doc(event_id).get()
.then((doc) => {
    if (doc.exists) {
        data=doc.data()
        GE('title').innerText=data.name
        GE('date').innerText=data.date
        GE('place').innerText=data.place
        GE('description').innerText=data.description
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        window.alert('event not found')
    }
}).catch((error) => {
    console.log("Error getting document:", error);
    window.alert(error)
});