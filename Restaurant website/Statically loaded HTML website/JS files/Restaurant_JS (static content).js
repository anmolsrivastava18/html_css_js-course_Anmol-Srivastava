document.addEventListener("DOMContentLoaded", function () {
   let width_browser = window.innerWidth;
   document.querySelector(".container-fluid").addEventListener("click", function () {
       if (width_browser < 992){
           $(".navbar-collapse").collapse('hide');
       }
   });
    document.querySelector("footer").addEventListener("click", function () {
        if (width_browser < 992){
            $(".navbar-collapse").collapse('hide');
        }
    });
});
