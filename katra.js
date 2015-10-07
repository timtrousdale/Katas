$( document ).ready(function() {
    var katraSlapJack = function (entry) {

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

    $('.katraNumber').keydown(function(e) {
        var e = (event.keyCode ? event.keyCode : event.which);
        if(e == '13') {
            var n = $('.katraNumber').val();
            event.preventDefault();
            katraSlapJack(n);
            $('.katraNumber').val('')
        }
    });

    $('#katra').click(function () {
        var n = $('.katraNumber').val();
        katraSlapJack(n);

    });

});