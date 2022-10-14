$('#boton').click(() => { // === document.querySelector('#boton').addeventlistener('click', function()) ...
    let lista = $('#lista')
    $.get("http://localhost:5000/amigos", function(data) {
        for (let i = 0; i < data.length; i++){
            lista.append(`<li>${data[i].name}</li>`);
        }
    });
    lista.empty()
});

$('#search').click(() => {
    let index = $('#input').val(); // .val() === .value en Jquery; 
    $.get(`http://localhost:5000/amigos/${index}`, data => {
        $('#amigo').text(data.name);
    });
});


$('#delete').click(() => {
    let index = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${index}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`amigo numero ${index} borrado con éxito`);
        }
    });
})


