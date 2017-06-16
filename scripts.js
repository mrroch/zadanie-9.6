//zapamietanie w zmiennej
var list = document.getElementById('list')
var add = document.getElementById('addElem')

//listener button
add.addEventListener('click', function() {
    
    //teksty wewnatrz listy
    list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length; + '</li>';


});