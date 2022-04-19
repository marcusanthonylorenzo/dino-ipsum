import $ from "jquery";
import "./css/styles.css";
import Marvel from "./../src/js/objects.js";

$(document).ready(function() {

  $("#button").click(()=> {
    console.log("clicked");
    let out = $(".output");

    Marvel.getChar()
      .then(function(response){
        console.log(response);
        let array = response.data.results;
        console.log(response.data.results);

        array.forEach(function(e){
          let name = e.name;
          console.log(name);
          out.append(name);
          out.append(`<img src="${e.thumbnail.path}.jpg" alt="${name}">` + "<br>");
          $("img").css("animation", "slidein 500ms;");
        });
        out.append(response.data.results + "<br>");
         
      });

    Marvel.getChar2()
      .then(function(response){
        console.log(response);
        let array = response.data.results;
        console.log(response.data.results);

        array.forEach(function(e){
          let name = e.name;
          console.log(name);
          out.append(name);
          out.append(`<img src="${e.thumbnail.path}.jpg" alt="${name}">` + "<br>");
        });
        out.append(response.data.results + "<br>");
      });
  });
});