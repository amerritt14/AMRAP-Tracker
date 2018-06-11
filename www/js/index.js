// This file must contain vanilla JS, as it does not have jquery yet loaded.

document.addEventListener("DOMContentLoaded", function() {
  var scripts = [
    "vendor/bootstrap/bootstrap.min.js",
    "vendor/angular/angular.min.js",
    "js/db_access.js",
  ]
  scripts.forEach(function(el){
    dynamicallyLoadScript(el);
  })
  // Include the HTML partials immediately after loading scripts
  includeHTML();
})

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
