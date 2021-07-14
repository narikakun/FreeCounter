$(function () {
    _c(_getid());
    setInterval(() => {
        _c(_getid());
    }, 2000);
});

function _c (id) {
    $.getJSON("https://mc3.nakn.jp/api/counter", { get: "true", id: id}).done(function(data) {
        $('#name').text(data.id);
        $('#count').text(data.count);
    }).fail(function(err) {
        $('#name').text(id);
    });
}

$('#up').on('click', function() {
    $.get("https://mc3.nakn.jp/api/counter", { up: "true", id: _getid()});
    $('#count').text(Number($('#count').text()) + 1);
});

function _getid () {
    var arg  = new Object;
    url = location.search.substring(1).split('&');
    for(i=0; url[i]; i++) { var k = url[i].split('='); arg[k[0]] = k[1];}
    return arg.id;
}