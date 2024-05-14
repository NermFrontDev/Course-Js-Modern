import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    const id = '5d86371f2343e37870b91ef1';
    findHeroe(id, (hero) => {
        element.innerHTML = hero.name;
    });
    
}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object) => void } callback 
 */
const findHeroe = ( id, callback ) => {

    const hero = heroes.find( heroe => heroe.id === id );

    callback(hero);

}