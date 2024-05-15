import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    
    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async ( id ) => {
    const hero = heroes.find( hero => hero.id === id );

    // Manejo de errores en funciones async
    if(!hero)
        throw`Hero with id ${ id } is not found`

    return hero.name;
}

