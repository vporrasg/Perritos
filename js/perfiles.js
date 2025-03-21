const main = document.querySelector('.main');

function cargarUsuarios() {
    fetch('../data/mascotas.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            count = document.getElementById("petcount");
            count.innerHTML ="Mascotas (" + usuarios.length + ")"

            usuarios.forEach(usuario => {

                const card = document.createElement('div');
                card.classList = 'card-main';

                const imgBorder = document.createElement('div');
                imgBorder.classList = 'img-border';
                imgBorder.setAttribute("onclick", "localStorage.setItem('pet' , '" + usuario.id + "')");

                imgBorder.setAttribute("onclick", "openModal('../images/"+ usuario.imagen+"')");


                const img = document.createElement('img');
                img.classList = 'img-main';
                img.src = "../images/" + usuario.imagen

                const infoBorder = document.createElement('div');
                infoBorder.classList = 'info-border';

              
                if(usuario.contacto2 != ""){
                    infoBorder.innerHTML += `
                    <p><i class="fa-solid fa-paw"></i> Nombre: ${usuario.nombre}</p>
                    <p> <i class="fa-solid fa-house"></i> Casa: ${usuario.casa} </p>
                    <p><i class="fa-regular fa-address-card"></i> Dueño: ${usuario.duenno}</p>
                    <p><i class="fa-solid fa-phone"></i> Telefono:${usuario.contacto1[0]}${usuario.contacto1[1]}${usuario.contacto1[2]}${usuario.contacto1[3]}-${usuario.contacto1[4]}${usuario.contacto1[5]}${usuario.contacto1[6]}${usuario.contacto1[7]}/${usuario.contacto2[0]}${usuario.contacto2[1]}${usuario.contacto2[2]}${usuario.contacto2[3]}-${usuario.contacto2[4]}${usuario.contacto2[5]}${usuario.contacto2[6]}${usuario.contacto2[7]}</p>    
                `;

                }else {
                    infoBorder.innerHTML += `
                    <p><i class="fa-solid fa-paw"></i> Nombre: ${usuario.nombre}</p>
                    <p> <i class="fa-solid fa-house"></i> Casa: ${usuario.casa} </p>
                    <p><i class="fa-regular fa-address-card"></i> Dueño: ${usuario.duenno}</p>
                    <p><i class="fa-solid fa-phone"></i> Telefono:${usuario.contacto1[0]}${usuario.contacto1[1]}${usuario.contacto1[2]}${usuario.contacto1[3]}-${usuario.contacto1[4]}${usuario.contacto1[5]}${usuario.contacto1[6]}${usuario.contacto1[7]}</p>    
                `;

                }
                

                const imgw = document.createElement('img');
                imgw.src = "../images/w.png"


                //<i class="fa fa-arrow-left"></i>
             
                const btn1 = document.createElement('a');
                btn1.classList = 'btn-contact';
                btn1.innerHTML+=`<i class="fa-brands fa-whatsapp"></i> Contactar`;
                btn1.setAttribute('href', "https://wa.me/506"+usuario.contacto1)
                btn1.href = "https://api.whatsapp.com/send/?phone="+usuario.contacto1;
             
                



                main.appendChild(card);
                card.appendChild(imgBorder) 
                imgBorder.appendChild(img)
                card.appendChild(infoBorder)
                infoBorder.appendChild(btn1)
         
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();


function test(id) {
    localStorage.setItem('user', id)
}



