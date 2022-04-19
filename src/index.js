import $ from "jquery";
import "./css/styles.css";
import { Marvel } from "./../src/js/objects.js";

$(document).ready(function() {

  // let audio_iframe = document.querySelector('iframe');
  // let widget = Soundcloud.Widget(audio_iframe);
  // widget.setVolume(0.3);

  $("#button").click(()=> {
    console.log("clicked");
    let out = $(".output");
    let input = $("#input").val();

    Marvel.getChar(input)
      .then(function(response){
        console.log(response);
        let array = response.data.results;
        console.log(response.data.results);

        array.forEach(function(e){
          let name = e.name;
          console.log(name);
          let div = document.createElement("div");
          let p = document.createElement("p");
          let h4 = document.createElement("h4");
          out.append(div);
          div.append(p);
          div.append(h4);
          h4.textContent = name;
          p.textContent = e.description;
          out.append(`<img src="${e.thumbnail.path}.jpg" alt="${name}">` + "<br>");
          $("img").css("animation", "slidein 500ms;");
        });//          
      });

  });
});