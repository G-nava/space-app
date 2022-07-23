import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("viewing Posts");
    }

    
    async getHtml() {
        console.log(this.params.id);
        /*
        con este parametro puedo hacer llamadas al server site 
        para obtener la informacion para el id que se indique
        */

        return `
            <h1>Posts view</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
        `;
    }
}