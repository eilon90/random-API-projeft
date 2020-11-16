
$('#load').on('click', function() {
    apiManager.getUser(changeButton);
    apiManager.getQuote(changeButton);
    apiManager.getPokemon(changeButton);
    apiManager.getMeat(changeButton);
});


$('#display').on('click', function() {
    console.log(apiManager.data);
    if ($(this).css('cursor') === 'pointer') {
        userRender.render(apiManager.data.user);
        quoRender.render(apiManager.data.quote);
        pokeRender.render(apiManager.data.pokemon);
        meatRender.render(apiManager.data);
        friRender.render(apiManager.data);

        $(this).css('background-color', 'red');
        $(this).css('cursor', 'auto');
    }
});


function changeButton() {
    $('#display').css('background-color', '#27ae60');
    $('#display').css('cursor', 'pointer');
}
