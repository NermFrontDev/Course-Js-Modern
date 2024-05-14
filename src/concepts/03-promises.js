import {heroes} from '../data/heroes';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const hero1 = '5d86371fd55e2e2a30fe1cc3';
    const hero2 = '5d86371f25a058e5b1c8a65e';

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }

    
    //! Promise.all([])
    Promise.all([
        findHero(hero1),
        findHero(hero2)
    ])
    .then(([id1, id2]) => renderTwoHeroes( id1, id2 ))
    .catch( renderError )

    //! Forma 2
    // let id1;
    // findHero(hero1)
    //     .then( hero => {
    //         id1 = hero;
    //         return findHero(hero2);
    //     }).then( id2 => {
    //         renderTwoHeroes( id1, id2 );
    //     })
    //     .catch( renderError );
    
    //! Forma 1
    // Promise Hell
    // findHero( hero1 )
    // .then( (id1) => {
    //         findHero( hero2 )
    //             .then (id2 => {
    //                 renderTwoHeroes(id1, id2);
    //             })
    //             .catch( renderError);
    // } )
    // .catch( renderError);
    
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