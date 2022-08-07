const changePokemon = (img, name, id) => {
  const pokemonIMG = document.getElementById('card_pokemon__img__photo');
  pokemonIMG.src = img;

  const pokemonName = document.getElementById('card_pokemon__name');
  pokemonName.innerText = ''
  pokemonName.innerText += `${id} - ${name}`
}

const findPokemon = (pesquisa) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}/`)
}
const getPokemon = async (pesquisa) => {
  try {
    const request = await findPokemon(pesquisa);
    const json = await request.json();
    console.log(json);
    const {sprites, forms, id} = json;
    const img = sprites.front_default;
    const name = forms[0].name;
    changePokemon(img, name, id);
  } catch(error) {
    alert(`O pokemon ${pesquisa} não existe\n${error}`);
  }
}

window.onload = getPokemon(1);

const btnBuscar = document.getElementById('card_pokemon__busca__btn');
btnBuscar.addEventListener('click', () => {
  const inputPokemon = document.getElementById('card_pokemon__busca__input')
  getPokemon(inputPokemon.value.toLowerCase());
  inputPokemon.value = ''
})