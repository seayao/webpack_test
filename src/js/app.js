require('../css/style.css');
//alert(require('./people.js'));

//console.log(require('./people.js'));
//
let people = require('./people.js');
//
//console.log(people[1].name);

let $ = require('jquery');
//$('body').append('<h1>' + people[1].name + '</h1>');

$.each(people, function (key, val) {
    "use strict";
    $('body').append('<h1>' + people[key].name + '</h1>');
    console.log(1)
});