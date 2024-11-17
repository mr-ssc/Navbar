$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#nav-mainListDiv").toggleClass("nav-show_list");
    $("#nav-mainListDiv").fadeIn();

});
