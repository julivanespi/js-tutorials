// promise example


// simple example
// console.log('START');

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('got the user');
//         reject(new Error("User not logged in"));
//         //resolve({user: 'julio'});
//     }, 2000);
// });


// promise.then(user =>{
//     console.log(user);
// }).
// catch(err => console.log(err.message));


// console.log('END');


console.log('START');

function loginUser(email, password){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Now we have the data');
            resolve( {userEmail : email});
        }, 1500);
    });
}

function getUserVideos (email){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]) ;
        }, 1000);
    });
}

// loginUser("julio@gmail.com", "12345").then(user => {
//     console.log(user);
//     getUserVideos(user.email).then(videos =>{
//         console.log(videos);
//     });
// });

loginUser("julio@outlook.com", "1234")
.then(user => getUserVideos(user.userEmail))
.then(videos => console.log(videos));

console.log('END');