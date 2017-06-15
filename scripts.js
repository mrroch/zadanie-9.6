//zapamietanie w zmiennej
var list = document.getElementById('list')
var add = document.getElementById('addElem')

//listener button
add.addEventListener('click', function() {
    var element = document.createElement('li');
    
    //teksty wewnatrz listy
    list.innerHTML += 'item ' + document.getElementsByTagName('li').length;

    //dodanie elementu do listy
    list.appendChild(element);
});