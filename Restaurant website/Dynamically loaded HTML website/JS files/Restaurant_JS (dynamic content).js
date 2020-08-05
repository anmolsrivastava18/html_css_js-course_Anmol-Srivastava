document.addEventListener("DOMContentLoaded", function (event) {
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

    (function (global) {
        let restaurant = {};
        let homeContent_link = "http://localhost:3000/Restaurant%20website/Dynamically%20loaded%20HTML%20website/HTML%20files/Main%20page_HTML%20content%20snippet.html";

        // The following function object will make handle the process of inserting the html content
        let insert_html = function (selector, html){
            let target_element = document.querySelector(selector);
            target_element.innerHTML = html;
        };

        // The following function object will insert the loading gif
        let show_loading = function (selector){
            let html = "<div class='text-center'>" +
                "<img src='../Images/Loading_GIF.gif' alt='Content_Loading'></div>";
            insert_html(selector, html);
        };

        show_loading("#main_content");
        $ajax_utils.send_GET_request(homeContent_link, function (response) {
            document.querySelector("#main_content").innerHTML = response.responseText;
        }, false);

        global.$restaurant = restaurant;
    })(window);
});
