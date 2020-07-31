document.addEventListener("DOMContentLoaded", function () {

    function insert_mark(event){
        if (this.textContent === ""){
            this.textContent = "X";
        }
        else if (this.textContent === "X"){
            this.textContent = "O";
        }
        else {
            this.textContent = "";
        }
        console.log(this);
    }

    function clear_board(event) {
        for (let elementID of list_elementIDs){
            document.getElementById(elementID).textContent = null;
        }
    }

    const list_elementIDs = ["first_cell", "second_cell", "third_cell", "fourth_cell", "fifth_cell", "sixth_cell",
        "seventh_cell", "eighth_cell", "ninth_cell"];
    for (let elementID of list_elementIDs){
        document.getElementById(elementID).addEventListener("click", insert_mark);
    }

    document.getElementById("Restart").addEventListener("click", clear_board);
});
