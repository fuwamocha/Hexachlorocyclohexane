function SignUp(email,password,callback,ERR_callback){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
          console.log(user)
          callback(user_data)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.warn(error)
        if(ERR_callback){
            ERR_callback(error)
        }
    });
}

function SignIn(email,password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.warn(error)
        });
}