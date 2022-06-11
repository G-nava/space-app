import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Dashboard');
    }

    async getHtml(){
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                This is the main contentfor the web page
            </p>
            <p>
                <a href="/posts" data-link>View recent postsposts</a>
            </p>
        `;
    }
};