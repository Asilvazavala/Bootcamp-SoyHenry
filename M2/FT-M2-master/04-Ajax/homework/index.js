//Botón Ver amigos
$('#boton').click(()=>{
    //tomo el elemento que contiene la lista
    let list = $('#lista')

    //Vacia la lista
    list.empty();

    //obtener la lista de nuestro servidor
    $.get('http://localhost:5000/amigos',(data)=>{

    //recorrer el array de objetos
        for (let i = 0; i < data.length; i++) {
   
            //agregar(append) al elemento de la lista
            list.append(`<li> ${data[i].name} </li>`)
        }
    })
});


//Botón Buscar
$('#search').click(()=>{

    //Guardamos el valor del input
    let searchID = $('#input').val();

    //Hacer request con ese valor
    $.get(`http://localhost:5000/amigos/${searchID}`, (data)=>{
        $('#amigo').text(data.name);
    });
});


//Botón Borrar Amigos
$('#delete').click(()=>{
let deleteID = $('#input').val();

$.ajax({
    url: `http://localhost:5000/amigos/${deleteID}`,
    type: 'DELETE',
    success: ()=>{
         //renderizar mensaje de éxito
         let msgcont = $('#success').text('Tu amigo ha sido eliminado');

         $('#boton').click();

    }
});
});