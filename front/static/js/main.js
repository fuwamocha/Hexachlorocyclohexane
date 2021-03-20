var name,email,photoUrl,emailVerified,uid
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid=user.uid;
    }else{
        location.href='login/'
    }
});

