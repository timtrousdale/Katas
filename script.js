/*global $, document, event*/

$(document).ready(function () {
    var kataSlapJack = function (entry) {

        for (var i = 1; i <= entry; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('Slap-Jack');
            } else if (i % 3 === 0) {
                console.log('Slap');
            } else if (i % 5 === 0) {
                console.log('Jack');
            } else {
                console.log(i);
            }
        }
    };

    $('.kataNumber').keydown(function (e) {
        e = (event.keyCode ? event.keyCode : event.which);
        if (e == '13') {
            var n = $('.kataNumber').val();
            event.preventDefault();
            kataSlapJack(n);
            $('.kataNumber').val('');
        }
    });

    $('#kata').click(function () {
        var n = $('.kataNumber').val();
        kataSlapJack(n);

    });

    var dArray = function (x, y, h, w) {
        var z = 0;
        if (x >= w || y >= h) {
            console.log("Height/Width must be big enough to contain array index");
            return;
        } else {
            var answer = (x + y + (y * (w - 1)));
            console.log(answer);
        }
    };

    $('#arrayFinder').click(function () {
        var x = parseFloat($('.arrayX').val());
        var y = parseFloat($('.arrayY').val());
        var w = parseFloat($('.arrayW').val());
        var h = parseFloat($('.arrayH').val());
        dArray(x, y, h, w);

    });


});