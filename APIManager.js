// This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {};
    }

    getData = (url, id, func) => {
        $.ajax({
            method: 'GET',
            url: url,
            dataType: 'json',
            success: data => {
                this.data[id] = data;
                func();
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
    }

}

const manager = new APIManager;