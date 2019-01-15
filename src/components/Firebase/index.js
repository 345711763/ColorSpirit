import firebase from "firebase";

const config={
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.app = firebase.app();
        this.database = firebase.database();
        firebase.auth().signInWithEmailAndPassword("dtx345711763@gmail.com","dengtianxiao123").catch((error)=>{
            console.log(error.message);
        })
    }
    writeUserData(userId,name,email){
        this.database.ref('users/'+userId).set({
            username: name,
            email: email,
        }).then(function(){
            console.log("Saved");
        }).catch(function(error){
            console.log("Got an error:",error);
        })
    }
}
// console.log(config);
// const fb = new Firebase();
// fb.writeUserData("1107122156","dengtianxiao","dtx345711763@gmail.com");

export default Firebase;