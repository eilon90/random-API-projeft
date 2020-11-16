$('#load').on('click', function() {

    $('#display').css('background-color', 'red')
    $('#display').css('cursor', 'auto')
    
    manager.getData('https://randomuser.me/api?results=7', 'user', () => {
        manager.getData('https://api.kanye.rest', 'quote', () => {
            manager.getData(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 149)}`, 'pokemon', () => {
                manager.getData('https://baconipsum.com/api/?type=meat-and-filler&paras=1', 'meet', () => {
                    console.log(manager.data);
                    $('#display').css('background-color', '#27ae60')
                    $('#display').css('cursor', 'pointer')
                });
            });
        });
    });
});


$('#display').on('click', function() {
    const userRender = new Renderer('user-template', manager.data.user.results[0], 'user-container');
    const quoRender = new Renderer('quote-template', manager.data.quote, 'quote-container');
    const pokeRender = new Renderer('pokemon-template', manager.data.pokemon, 'pokemon-container');
    const meetRender = new Renderer('meat-template', manager.data, 'meat-container');
    userRender.render();
    quoRender.render();
    pokeRender.render();
    meetRender.render();
    const friends = manager.data.user.results.slice(1);
    $(`.friends-container`).empty();
    friends.forEach(f => {
        const fRender = new Renderer('friends-template', f, 'friends-container');
        fRender.renderFriends();
    });
});