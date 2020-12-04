const text = document.querySelector('.title');
const addPerson = document.querySelector('.addPerson');
const userList = document.querySelector('.nameList');
const inputBox = document.querySelector('.inputBox');

/**
 * This section can change the style
 */

//text.style.backgroundColor = "red";
//text.classList.add('change');


/**
 * This sections is for event listeners on the buttons
 */
addPerson.addEventListener('click', function(){
    // change the background color of the text
    //text.style.backgroundColor = "red";
    // toggle the css class
    // text.classList.toggle("change");

    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(inputBox.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});

// for(user of userList){
//     user.addEventListener('click', function(){
//         console.log(this);
//     });
// }
