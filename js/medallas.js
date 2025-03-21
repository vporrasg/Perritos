const main = document.querySelector('.portada');

function cargarUsuarios() {
    fetch('../data/atletas.json')
        .then(respuesta => respuesta.json())
        .then(usuarios => {


            const id = localStorage.getItem("user") - 1;



            const img = document.querySelector('.circular-square')
            img.src = "../images/" + usuarios[id].imagen


            const name = document.querySelector('.nameProfile')
            name.innerText = usuarios[id].nombre


            const container = document.querySelector('#container')
            container.classList = 'medalla';

            for (let i = 0; i < usuarios[id].medallas.length; i++) {
                if (usuarios[id].medallas[i].posicion == 0) {
                    container.innerHTML += `
                <div class="medalla" onclick="onClick('../images/${usuarios[id].medallas[i].url}')">
                    <img class="imgMedalla" src="../images/medalla.png" />
                        <p class="torneoNombre">${usuarios[id].medallas[i].torneo}<br>
                        
                        </p>
                </div>  
                `;
                    

                }else if (usuarios[id].medallas[i].posicion == 4) {
                    container.innerHTML += `
                <div class="medalla" onclick="onClick('../images/${usuarios[id].medallas[i].url}')">
                    <img class="imgMedalla" src="../images/medalla.png" />
                        <p class="torneoNombre">${usuarios[id].medallas[i].torneo}<br>
                        Ganador
                        </p>
                </div>  
                `;

                } else {
                    container.innerHTML += `
                <div class="medalla" onclick="onClick('../images/${usuarios[id].medallas[i].url}')">
                    <img class="imgMedalla" src="../images/medalla.png" />
                        <p class="torneoNombre">${usuarios[id].medallas[i].torneo}<br>
                        ${usuarios[id].medallas[i].posicion}º lugar
                        </p>
                </div>  
                `;

                }

            }
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();


