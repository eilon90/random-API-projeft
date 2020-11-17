class APIManager {
    constructor() {
        this.data = {
            user: {},
           quote: '',
           pokemon: {},
           meat: '',
           friends: [{}, {}, {}, {}, {}, {}]
        },
        
        this.finishIn4 = 0;
    };

    getUser = func => {
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api?results=7',
            dataType: 'json',
            success: data => {
                this.data.user.firstName = data.results[0].name.first;
                this.data.user.lastName = data.results[0].name.last;
                this.data.user.picture = data.results[0].picture.medium;
                this.data.user.city = data.results[0].location.city;
                this.data.user.state = data.results[0].location.state;

                for (let i = 1; i < data.results.length; i++) {
                    this.data.friends[i - 1].firstName = data.results[i].name.first;
                    this.data.friends[i - 1].lastName = data.results[i].name.last;
                }
                
                this.finishIn4++;
                if (this.finishIn4 === 4) {
                    func();
                    this.finishIn4 = 0;
                }
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
    }

    getQuote = func => {
        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: data => {
                this.data.quote = data;
                this.finishIn4++;
                if (this.finishIn4 === 4) {
                    func();
                    this.finishIn4 = 0;
                }
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
    }

    getPokemon = func => {
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 149)}`,
            dataType: 'json',
            success: data => {
                this.data.pokemon.image = data.sprites.front_default;
                this.data.pokemon.name = data.name;
                this.finishIn4++;
                if (this.finishIn4 === 4) {
                    func();
                    this.finishIn4 = 0;
                }
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
    }

    getMeat = func => {
        $.ajax({
            method: 'GET',
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1',
            dataType: 'json',
            success: data => {
                this.data.meat = data;
                this.finishIn4++;
                if (this.finishIn4 === 4) {
                    func();
                    this.finishIn4 = 0;
                }
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
    }
}

const apiManager = new APIManager;