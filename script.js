var createHues = function(){
    var ratio = ((1+Math.sqrt(5))/2);
    var hues = [];
    for(var j = 0; j < 360; j++){
        var shades = [];
        var hsl = [j, '74%', 60];
        for (var i = 0; i <= 9; i++) {
            var color = hsl;
            color[2] = Math.round( color[2] * (100-Math.pow(i,ratio))/100);
            shades.push( 'hsl(' + color.join(',') + '%)' );
        };
        hues.push(shades);
    }
    return hues;
}

var setColour = function( hue ){

    // Set background color.
    var backgroundColor = hues[hue][9];
    document.getElementById('hero').style.backgroundColor = backgroundColor;

    // Set polygon colors.
    var elements = document.querySelectorAll('[data-shade]');
    for (var i = elements.length - 1; i >= 0; i--) {
        var shadeIndex = elements[i].getAttribute('data-shade');
        elements[i].setAttribute('fill', hues[hue][shadeIndex]);
    }

};

var hues = createHues();

// Set starting hue.
var hue = Math.floor(Math.random()*360);
setColour(hue);

// Change hue every 300ms.
var interval = setInterval(function(){
    document.getElementById('hero').style.height = parent.document.body.clientHeight + 'px';
    if( ++hue >= 360 ) hue = 0;
    setColour(hue);
},300);

var score = 0;
$('polygon', 'svg').on('click', function(event){
    score++;
    $('#score').append('&bull;');

    var $target = $(event.target);
        neighbors = $target.data().neighbors.toString().split(',');

    $.each(neighbors, function(index, value){
        var opacity = $('#polygon-' + value).css('opacity');
        if(opacity == 1){
            $('#polygon-' + value).css('opacity', 0.2);
        } else {
            $('#polygon-' + value).css('opacity', 1);
        }
    });

    var win = true;
    $('polygon', 'svg').each(function(index, element){
        if( $(element).css('opacity') == 1) win = false;
    });

    if(win){
    clearInterval(interval);
        $('#score').html(score);
        $('#score').animate({'opacity':'1'},2000, function() {});
    $('svg').animate({'opacity':'0'},2000, function(){

            location.reload();
    });
    }

});