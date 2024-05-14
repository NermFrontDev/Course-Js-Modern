
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentComponent = ( element ) => {

    console.log( import.meta.env );

    const html = `
        <p>Dev: 
        ${ import.meta.env.DEV }
        </p>
        <p>Prod: 
        ${ import.meta.env.PROD }
        </p>
        <p>KEY: 
        ${ import.meta.env.VITE_API_KEY }
        </p>
        <p>URL: 
        ${ import.meta.env.VITE_BASE_URL }
        </p>
    `;

    element.innerHTML = html;

}

