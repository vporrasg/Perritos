const main = document.querySelector('.main');

function cargarUsuarios() {
    fetch('../data/mascotas.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {

                const card = document.createElement('div');
                card.classList = 'card-main';

                const imgBorder = document.createElement('div');
                imgBorder.classList = 'img-border';

                const img = document.createElement('img');
                img.classList = 'img-main';
                img.src = "../images/" + usuario.imagen

                const infoBorder = document.createElement('div');
                infoBorder.classList = 'info-border';

                infoBorder.innerHTML += `
                    <p>Nombre: ${usuario.nombre}</p>
                    <p>Casa: ${usuario.casa} </p>
                    <p>Dueño: ${usuario.duenno}</p>
                    <p>Contacto: ${usuario.contacto1[0]}${usuario.contacto1[1]}${usuario.contacto1[2]}${usuario.contacto1[3]}-${usuario.contacto1[4]}${usuario.contacto1[5]}${usuario.contacto1[6]}${usuario.contacto1[7]}</p>    
                `;

             
                main.appendChild(card);
                card.appendChild(imgBorder)
                imgBorder.appendChild(img)
                card.appendChild(infoBorder)
         
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();


function test(id) {
    localStorage.setItem('user', id)
}



