$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown();
    });

    $('#botao-cancel').click(() => {
        $('form').slideUp();
    });

    $('form').on('submit', (e) => {
        e.preventDefault();

        const itemInput = $('#tarefa-input').val();
        const novoItem = $('<li></li>');

        const checkbox = $('<input type="checkbox"/>')
            .attr('id', `item${$('ul li').length + 1}`) 
            .attr('name', `item${$('ul li').length + 1}`)
            .attr('value', itemInput);

        const label = $('<label></label>')
            .attr('for', `item${$('ul li').length + 1}`)
            .text(itemInput);

        $(novoItem).append(checkbox);
        $(novoItem).append(label);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-input').val('');
    });
});
