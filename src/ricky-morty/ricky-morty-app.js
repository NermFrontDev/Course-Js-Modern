const base_url = 'https://rickandmortyapi.com/api/'


/**
 * @returns {Promise<Object>} character information
 */
const fetchCharacter = async () => {
    const resp = await fetch(`${base_url}character/1`);
    const data = await resp.json();

    console.log( data );
    
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickyMortyApp = async ( element ) => {

    document.querySelector('#app-title').innerHTML = 'Ricky N Morty API';
    element.innerHTML = 'Loading...';

    // const character = await fetchCharacter();

    const characterLabel = document.createElement('h3');
    const specieLabel = document.createElement('p');
    const nextCharacterBtn = document.createElement('button');
    nextCharacterBtn.innerText = ('Next Character');

    const renderCharacter = ( data ) => {
        characterLabel.innerHTML = data.name;
        specieLabel.innerHTML = `I'm a ${data.species}`;
        element.replaceChildren( characterLabel, specieLabel, nextCharacterBtn )
    }

    fetchCharacter()
        .then( renderCharacter );

}