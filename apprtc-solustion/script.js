function random() {
    var rnd = Math.floor(Math.random() * (9999999-1000000) + 1000000);
    document.getElementById('input').value = rnd;
}

$(document).ready(function(){

    $('#button').click(function(e) {  
        var inputvalue = $("#input").val();
        window.open(" https://appr.tc/r/"+inputvalue);

    });
});