import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    const id = '5d86371f2343e37870b91ef1';
    findHeroe(id, (error, hero) => {

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        // element.innerHTML = hero?.name || 'No hay heroe' ;
        element.innerHTML = hero.name;
    });
    
}

/**
 * 
 * @param {String} id 
 * @param { (error: String|null, hero: Object) => void } callback 
 */
const findHeroe = ( id, callback ) => {

    const hero = heroes.find( heroe => heroe.id === id );

    if ( !hero ) {
        callback('Hero with id ' + id + ' not found.');
        return // undefined
    }

    callback( null, hero );

}