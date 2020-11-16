
class Renderer {
    constructor(id, properties, htmlClass) {
        this.id = id;
        this.properties = properties;
        this.htmlClass = htmlClass;
    }

    render() {
        $(`.${this.htmlClass}`).empty();
        const source = $(`#${this.id}`).html();
        const template = Handlebars.compile(source);
        const newHTML = template(this.properties);
        $(`.${this.htmlClass}`).append(newHTML);
    }

    renderFriends() {
        const source = $(`#${this.id}`).html();
        const template = Handlebars.compile(source);
        const newHTML = template(this.properties);
        $(`.${this.htmlClass}`).append(newHTML);
    }
}