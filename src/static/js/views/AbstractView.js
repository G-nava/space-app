export default class {
    constructor(params){
        this.params = params; 
    }

    setTitle(title){// cambia el titulo de la pestaña
        document.title = title;
    }

    async getHtml(){
        return '';
    }
}