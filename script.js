$(document).ready(function() {
var myPoke = [039, 081, 105]; //#039//Jigglypuff //#081//Magnemite //#105//Marowak

for (let i = 0; i<myPoke.length; i++) {
  var link = 'http://pokeapi.co/api/v2/pokemon/' + myPoke[i] + "/";
  $.get(link, function(data) {  //this might error with parenthesis
    let cardDiv = $('.card')[i];
    let header = document.createElement('h2');
    $(header).text(data.name);
    $(cardDiv).append(header);
    let pokeType = document.createElement('h4');
    $(pokeType).text(data.types[0].type.name);
    $(cardDiv).append(pokeType);
    let img = document.createElement('img');
    img.src = data.sprites.front_default;
    cardDiv.appendChild(img);
});
};
})

//
//
//
//
//
//
//
//
//
//   var favChar = [148, 583, 1303]; //148(Arya), 583(Jon), 1303(Danerys)
//   for (var i = 0; i<favChar.length; i++) {
//       $.get(`https://www.anapioficeandfire.com/api/characters/${favChar[i]}`, function(data) {
//           let characterDiv = document.createElement("div");
//
//           let charName = document.createElement('h3');
//           $(charName).text(data.name);
//           $(characterDiv).append(charName);
//
//           let titles = document.createElement('p')
//           $(titles).text(data.titles);
//           $(characterDiv).append(titles);
