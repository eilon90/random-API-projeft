class Renderer {
    constructor(id, htmlClass) {
        this.id = id;
        this.htmlClass = htmlClass;
    }

    render(data) {
        $(`.${this.htmlClass}`).empty();
        const source = $(`#${this.id}`).html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $(`.${this.htmlClass}`).append(newHTML);
    }
}

const userRender = new Renderer('user-template', 'user-container');
const quoRender = new Renderer('quote-template', 'quote-container');
const pokeRender = new Renderer('pokemon-template', 'pokemon-container');
const meatRender = new Renderer('meat-template', 'meat-container');
const friRender = new Renderer('friends-template', 'friends-container');

