//$('sector').acción

$(function () {
    $('p').css({'background-color': 'red'});
    $('#segundo').css({'background-color': 'blue'});
    $('.primero').css({'background-color': 'green'});

    $('<button id="btn_hide">Hide</button>').appendTo('#body');
    $('<button id="btn_show">Show</button>').appendTo('#body');

    $('#btn_hide').dblclick(function () {
        $('#segundo').hide();
    });

    $('#btn_show').click(function () {
        $('#segundo').show();
    });

    $('.primero').mouseenter(function () {
        $('#segundo').fadeOut();
    });

    $('.primero').mouseleave(function () {
        $('#segundo').fadeIn();
    });
});