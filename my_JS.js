document.addEventListener("DOMContentLoaded", function () {
    function say_hello(event){
        let name = document.getElementById("text_box").value;
        document.getElementById("msg").innerHTML = "<h2>Hi " + name + "</h2>";
        this.textContent = "Said it!";
        console.log(event)
    }


    document.getElementById("say_it_button").addEventListener("click", say_hello)

});
