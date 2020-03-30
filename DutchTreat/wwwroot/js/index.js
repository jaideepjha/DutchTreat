$(document).ready(function () {

    console.log("Hello World!");

    //var theForm = document.getElementById("theForm");
    //theForm.hidden = true;

    var theForm = $("#theForm");
    theForm.hide();


    //var button = document.getElementById("theButton");
    //button.addEventListener("click", function () {
    //    console.log("Buying item.");
    //});

    var button = $("#theButton");
    button.on("click", function () {
        console.log("Buying item.");
    });

    var prodInfo = $(".product-props li");
    prodInfo.on("click", function () {
        console.log("you clicked: " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");
    $popupForm.hide();

    $loginToggle.on("click", function () {
        $popupForm.toggle();
    })
});