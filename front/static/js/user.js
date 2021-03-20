url = new URL(location.href)
uid = url.searchParams.get('uid')
db.collection("user").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if(doc.id==uid){
            console.log(doc.data());
            //doc.data()の中身をフロントに移す
        }
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (uid==user.uid){
        //TODO ユーザーIDが自分だった場合
    }
})

