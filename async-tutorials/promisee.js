

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data');
            resolve({ userEmail: email });
        }, 1500);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 1000);
    });
}


async function displayUser() {
    try {
        const loggedInUser = await loginUser("bryan@gmail.com", "54321");
        const videos = await getUserVideos(loggedInUser.userEmail);
        console.log(loggedInUser);
        console.log(videos);
    } catch(err){
        console.error("something fudged up");
    }
    
}

displayUser();