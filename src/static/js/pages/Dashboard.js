import AbstactView from "./AbstactView";

export default class extends AbstactView{
    constructor(){
        super();
        this.setTitle('Dashboard');
    }

    async getHtml(){
        return `
            <h1>Welcome back, Dom</h1>
            <p>This is the main contentfor the web page</p>
            <p>
            Another interestingtest
            <a href="posts" data-link> View recent posts</a>
            </p>
        `;
    }
};