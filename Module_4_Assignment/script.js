/*The final output on the console should look like this:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
 */

(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (let item of names){
        if (item.toLowerCase().charAt(0) === 'j'){
            byeSpeaker.speak(item)
        }
        else {
            helloSpeaker.speak(item)
        }
    }
    alert("Thank you so much for reviewing my assignment :) Press OK");
})();
