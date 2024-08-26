$(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {  // Adjust the scroll threshold as needed
        $("#mainNavbar").addClass("shrink");
    } else {
        $("#mainNavbar").removeClass("shrink");
    }
});