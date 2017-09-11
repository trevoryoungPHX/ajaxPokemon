window.onload = function(){
  let pkmnToGet = [1, 5, 12];
  let cards = document.getElementsByClassName('card')
  for(let i = 0; i<pkmnToGet.length; i++){
    makePokemonRequest(pkmnToGet[i], cards[i]);
  }
};


function makePokemonRequest(id, element){
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', ()=> {
  	if (xhr.status !== 200) {
  		return;
  	}

  	var data = JSON.parse(xhr.responseText);

  	let h3 = document.createElement('h3');
    h3.innerHTML = data.name;
    element.appendChild(h3);
    for(let i = 0; i<data.types.length; i++){
      let p = document.createElement('p');
      p.innerHTML = data.types[i].type.name;
      element.appendChild(p);
    }
    let img = document.createElement('img');
    img.src = data.sprites.front_default;
    element.appendChild(img);
    console.log(data);

  });

  console.log(`http://pokeapi.co/api/v2/pokemon/${id}`);

  xhr.open('GET', `http://pokeapi.co/api/v2/pokemon/${id}`);

  xhr.send();
}
