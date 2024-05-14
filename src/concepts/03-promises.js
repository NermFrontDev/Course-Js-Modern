import {heroes} from '../data/heroes';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const hero1 = '5d86371fd55e2e2a30fe1cc3';
    const hero2 = '5d86371fd55e2e2a30fe1ccb';

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }
    
    findHero( hero1 )
    .then( superHero => renderHero( superHero ) )
    .catch( error => renderError(error) );
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise(( resolve, reject ) => {
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });
}