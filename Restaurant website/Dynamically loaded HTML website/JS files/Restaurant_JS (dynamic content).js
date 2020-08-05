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
        let homeContent_link = "https://anmolsrivastava18.github.io/html_css_js-course_Anmol-Srivastava/Restaurant%20website/Dynamically%20loaded%20HTML%20website/" +
            "HTML%20files/Main%20page_HTML%20content%20snippet.html";
        let allCategories_url = "http://davids-restaurant.herokuapp.com/categories.json";
        let menuHeading_snippetURL = "https://anmolsrivastava18.github.io/html_css_js-course_Anmol-Srivastava//Restaurant%20website/Dynamically%20loaded%20" +
            "HTML%20website/HTML%20files/Menu%20categories_heading.html";
        let menuContent_URL = "https://anmolsrivastava18.github.io/html_css_js-course_Anmol-Srivastava//Restaurant%20website/Dynamically%20loaded%20HTML%20website/" +
            "HTML%20files/Menu%20categories_HTML%20content%20snippet.html";

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

        let insert_property = function (string, property_name, property_value){
            let prop_to_replace = "{{" + property_name + "}}";
            string = string.replace(new RegExp(prop_to_replace, 'g'), property_value);
            return string;
        };

        show_loading("#main_content");

        $ajax_utils.send_GET_request(homeContent_link, function (response) {
            document.querySelector("#main_content").innerHTML = response.responseText;
        }, false);

        restaurant.loadMenuCategories = function (){
            show_loading("#main_content");
            $ajax_utils.send_GET_request(allCategories_url, buildAndShowCategories)
        };

        function buildAndShowCategories(categories){
            $ajax_utils.send_GET_request(menuHeading_snippetURL, function (Menu_page_heading) {
                $ajax_utils.send_GET_request(menuContent_URL, function (Menu_page_content) {
                    let categories_html = buildCategoriesView(categories, Menu_page_heading, Menu_page_content);
                    insert_html("#main_content", categories_html);
                }, false);
            }, false);
        }

        function buildCategoriesView (categories, Menu_page_heading, Menu_page_content){
            let final_HTML_content = Menu_page_heading + "<div id=\"tiles\" class=\"container-fluid\">\n" +
                "<div class=\"row\">";

            for (let i = 0; i < 8; i++){
                let html_string = Menu_page_content;
                let name = categories[i]["name"];
                html_string = insert_property(html_string, 'name', name);
                let short_name = categories[i]["short_name"];
                html_string = insert_property(html_string, 'short_name', short_name);
                final_HTML_content += html_string;
            }
            final_HTML_content += "</div></div>";
            return final_HTML_content
        }
        global.$restaurant = restaurant;
    })(window);
});
