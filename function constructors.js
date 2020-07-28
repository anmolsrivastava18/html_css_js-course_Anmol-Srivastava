function Rectangle(length, breadth) {
    this.length_rectangle = length;
    this.width_rectangle = breadth;
}

Rectangle.prototype.area_rectangle =
    function calculate_area(){
        return this.length_rectangle * this.width_rectangle
    };


const anm = Rectangle(10, 10);
const anm_1 = new Rectangle(20, 25);
console.log(anm);
console.log(anm_1);


// var anm = {
//     length_rectangle: 20,
//     width_rectangle: 30,
//     area_rectangle: function () {
//         var self = this;
//         var updated_length = function () {
//             self.length_rectangle = 50;
//         };
//         updated_length();
//         console.log("Updated length = " + this.length_rectangle);
//         return this.length_rectangle * this.width_rectangle
//     }
// };
//
//
// console.log(anm.area_rectangle());

// let anm = ["Anmol", "Sunny", "Srivastava"];
// anm[1] = "Anmol";
// anm = 20;
// console.log(anm);
