const base_url = 'https://rickandmortyapi.com/api/'

let currentCharacterId = 1; // ID del personaje actual

/**
 * @returns {Promise<Object>} character information
 */
const fetchCharacter = async () => {
    const resp = await fetch(`${base_url}character/${currentCharacterId}`);
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

    const loadingImage = document.createElement('img');
    loadingImage.src = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'; // Ruta de la imagen de carga
    loadingImage.classList.add('img-character-loading');

    const characterLabel = document.createElement('h3');
    const specieLabel = document.createElement('p');
    const imgCharacter = document.createElement('img');
    imgCharacter.classList.add('img-character');

    const nextCharacterBtn = document.createElement('button');
    nextCharacterBtn.innerText = ('Next Character');
    nextCharacterBtn.classList.add('mx-2');

    const prevCharacterBtn = document.createElement('button');
    prevCharacterBtn.innerText = ('Previous Character');
    prevCharacterBtn.classList.add('mx-2');

    const renderCharacter = ( data ) => {
        if (currentCharacterId === 1) {
            prevCharacterBtn.disabled = true;
        } else {
            prevCharacterBtn.disabled = false;
        }
        element.replaceChildren( prevCharacterBtn, nextCharacterBtn, characterLabel, specieLabel, imgCharacter );
        characterLabel.innerHTML = data.name;
        specieLabel.innerHTML = `I'm a ${data.species}`;

        // Ocultar imagen de carga cuando la imagen real esté cargada
        imgCharacter.onload = () => {
            element.removeChild(loadingImage);
        };

        // Agregar imagen de carga antes de cargar la imagen real
        element.insertBefore(loadingImage, imgCharacter);

        imgCharacter.src = data.image;
    };

    nextCharacterBtn.addEventListener('click', async () => {
        currentCharacterId++;
        const character = await fetchCharacter();
        renderCharacter( character );
    });

    prevCharacterBtn.addEventListener('click', async () => {
            currentCharacterId--;
            const character = await fetchCharacter();
            renderCharacter( character );

    });

    fetchCharacter()
        .then( renderCharacter );

}