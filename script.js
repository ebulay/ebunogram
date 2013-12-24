var hue = Math.round(Math.random()*360);
var hsl = [hue, '74%', 60];
var backgroundColor = 'hsl(' + [hue, '74%', 80].join(',') + '%)';

var shades = [];
for (var i = 0; i < 10; i++) {
    var ratio = ((1+Math.sqrt(5))/2);
    var darken = Math.pow(i,ratio);
    var color = hsl;
        color[2] = Math.round( color[2] * (100-darken)/100);
    shades.push( 'hsl(' + color.join(',') + '%)' );
};

var elements = document.querySelectorAll('[data-shade]');

for (var i = elements.length - 1; i >= 0; i--) {
    var shadeIndex = elements[i].getAttribute('data-shade');
    elements[i].setAttribute('fill', shades[shadeIndex]);
};

document.getElementById('hero').style.backgroundColor = backgroundColor;
setTimeout(function(){
    document.getElementById('hero').style.height = document.documentElement.clientHeight + 'px';
    console.log(document.documentElement.clientHeight);
},1);