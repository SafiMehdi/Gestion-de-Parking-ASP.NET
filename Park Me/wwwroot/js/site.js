// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(".card-button").click(function () {
    $(".modalcontainer,.modal").fadeIn("slow");
});

$(".close,.buttons").click(function () {
    $(".modalcontainer,.modal").fadeOut("slow");
});

$(document).ready(function () {
    $('.select2').select2({
        closeOnSelect: false
    });
});