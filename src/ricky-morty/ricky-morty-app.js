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
    const character = await fetchCharacter();
    element.innerHTML = 'Tenemos data!';

}