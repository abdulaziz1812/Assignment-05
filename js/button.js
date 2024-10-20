// home ==> blog page
if (document.getElementById("blog-button")) {
    document.getElementById("blog-button").addEventListener("click", function() {
        window.location.href = "blog.html";
    });
}

// blog ==> home page
if (document.getElementById("home-button")) {
    document.getElementById("home-button").addEventListener("click", function() {
        window.location.href = "index.html";
    });

}