// // Create Empty Student Roster Array
// // This has been done for you!
//
// var roster = [];
//
// // Create a function called addNew that takes in a name
// // and uses .push to add a new student to the array
// function addNew() {
//     var student = prompt("Enter the name you want to add to the roster:");
//     roster.push(student)
// }
//
//
// // REMOVE STUDENT
// // Create a function called remove that takes in a name
// // Finds its index location, then removes that name from the roster
// // HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// function remove_student() {
//     var student = prompt("Enter the name that you want to remove from the roster:");
//     roster.splice(roster.indexOf(student), 1)
// }
//
//
// // DISPLAY ROSTER
// // Create a function called display that prints out the roster to the console.
// function display_roster() {
//     console.log(roster);
// }
//
//
// // Start by asking if they want to use the web app
// // Now create a while loop that keeps asking for an action (add,remove, display or quit)
// // Use if and else if statements to execute the correct function for each command.
//
//
// var choice = prompt("Do you want to use this web app? (Y/N):").toLowerCase();
// var option = "";
//
// if (choice === 'y'){
//     while (option !== 'quit'){
//         option = prompt("What do you want to do? Add/ Remove/ Display/ Quit?").toLowerCase();
//         if (option === 'add'){
//             addNew();
//         }
//         else if (option === 'remove'){
//             remove_student();
//         }
//         else {
//             display_roster();
//         }
//     }
//     if (option === 'quit'){
//         alert("Thanks for your input. The web app is now terminating! :)")
//     }
// }
// else {
//     alert("Thanks for your input. The web app is now terminating! :)");
// }


(function (window) {
    let obj = 20;
    // obj.dreamOn = function () {
    //     console.log("I want to see the global scope! Let me out!");
    // };
    window.anm = obj;
})(globalThis);


console.log(anm);
