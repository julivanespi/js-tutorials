// async code

// simple
// console.log('START');

// setTimeout(() => {
//     console.log("We are in a timeout");
// }, 2000);

// console.log('END');

// callbacks
console.log('START');

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log('Now we have the data');
        callback( {userEmail : email});
    }, 1500);
}

function getUserVideos (email, callback){
    setTimeout(() => {
        callback(["video1", "video2", "video3"]) ;
    }, 1000);
}


const user = loginUser('julio.i.espinosa@gmail.com', '12345asdf', user =>{
    console.log(user);
    // from the first callback we can call the next function
    getUserVideos(user.userEmail, videos =>{
        console.log(videos);
    })
});


console.log('END');