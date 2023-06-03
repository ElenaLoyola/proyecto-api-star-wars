var counter1 = 0
mostrarProtagonista = () => {
    counter1++
    if (counter1 < 6) {
        crearCajaProtagonista (counter1)
    }
}
crearCajaProtagonista = (num) => {
    let urlApi = 'https://swapi.dev/api/people/' + num;
    fetch(urlApi)
    .then(response => response.json() )
    .then(data => {
        let nombrePersonaje = data.name;
        let alturaPersonaje = data.height;
        let pesoPersonaje = data.mass;
        setTimeout( () => {
            let contenedor = document.getElementById('contenedor1');

            let crearCaja = document.createElement('div');
            crearCaja.setAttribute('class', 'caja');
            contenedor.appendChild(crearCaja);

            let crearDivCirculo = document.createElement('div');
            let crearCirculo = document.createElement('span')
            crearCirculo.setAttribute('class', 'dot1')
            crearDivCirculo.appendChild(crearCirculo)
            crearCaja.appendChild(crearDivCirculo)

            let crearDivInfo = document.createElement('div');
            crearDivInfo.setAttribute('class', 'info')
            let crearTitulo = document.createElement('h4');
            let crearParrafo = document.createElement('p');
            crearDivInfo.appendChild(crearTitulo)
            crearDivInfo.appendChild(crearParrafo)
            crearCaja.appendChild(crearDivInfo)

            crearTitulo.innerText = `${nombrePersonaje}`;
            crearParrafo.innerText = `Estatura: ${alturaPersonaje} cm. Peso: ${pesoPersonaje} kg.`
        }, '300');
    })
    .catch(error => console.log('No se pudieron obtener los datos.', error));
}


var counter2 = 0
mostrarSecundario = () => {
    counter2++
    if (counter2 < 6) {
        crearCajaSecundario(counter2)
    }
}
crearCajaSecundario = (num) => {
    let secundario = num + 5
    let urlApi = 'https://swapi.dev/api/people/' + secundario;
    fetch(urlApi)
    .then(response => response.json() )
    .then(data => {
        let nombrePersonaje = data.name;
        let alturaPersonaje = data.height;
        let pesoPersonaje = data.mass;
        setTimeout( () => {
            let contenedor = document.getElementById('contenedor2');

            let crearCaja = document.createElement('div');
            crearCaja.setAttribute('class', 'caja');
            contenedor.appendChild(crearCaja);

            let crearDivCirculo = document.createElement('div');
            let crearCirculo = document.createElement('span')
            crearCirculo.setAttribute('class', 'dot2')
            crearDivCirculo.appendChild(crearCirculo)
            crearCaja.appendChild(crearDivCirculo)

            let crearDivInfo = document.createElement('div');
            crearDivInfo.setAttribute('class', 'info')
            let crearTitulo = document.createElement('h4');
            let crearParrafo = document.createElement('p');
            crearDivInfo.appendChild(crearTitulo)
            crearDivInfo.appendChild(crearParrafo)
            crearCaja.appendChild(crearDivInfo)

            crearTitulo.innerText = `${nombrePersonaje}`;
            crearParrafo.innerText = `Estatura: ${alturaPersonaje} cm. Peso: ${pesoPersonaje} kg.`
        }, '300');
    })
    .catch(error => console.log('No se pudieron obtener los datos.', error));
}

var counter3 = 0
mostrarOtros = () => {
    counter3++
    if (counter3 < 6) {
        crearCajaOtros(counter3)
    }
}
crearCajaOtros = (num) => {
    let otros = num + 11
    let urlApi = 'https://swapi.dev/api/people/' + otros;
    fetch(urlApi)
    .then(response => response.json() )
    .then(data => {
        let nombrePersonaje = data.name;
        let alturaPersonaje = data.height;
        let pesoPersonaje = data.mass;
        setTimeout( () => {
            let contenedor = document.getElementById('contenedor3');

            let crearCaja = document.createElement('div');
            crearCaja.setAttribute('class', 'caja');
            contenedor.appendChild(crearCaja);

            let crearDivCirculo = document.createElement('div');
            let crearCirculo = document.createElement('span')
            crearCirculo.setAttribute('class', 'dot3')
            crearDivCirculo.appendChild(crearCirculo)
            crearCaja.appendChild(crearDivCirculo)

            let crearDivInfo = document.createElement('div');
            crearDivInfo.setAttribute('class', 'info')
            let crearTitulo = document.createElement('h4');
            let crearParrafo = document.createElement('p');
            crearDivInfo.appendChild(crearTitulo)
            crearDivInfo.appendChild(crearParrafo)
            crearCaja.appendChild(crearDivInfo)

            crearTitulo.innerText = `${nombrePersonaje}`;
            crearParrafo.innerText = `Estatura: ${alturaPersonaje} cm. Peso: ${pesoPersonaje} kg.`
        }, '300');
    })
    .catch(error => console.log('No se pudieron obtener los datos.', error));
}

asignarEventos = () => {
    let seccionNums = document.getElementById('unoACinco');
    seccionNums.addEventListener('mouseenter', mostrarProtagonista)

    let seccionNums2 = document.getElementById('seisAOnce');
    seccionNums2.addEventListener('mouseenter', mostrarSecundario)

    let seccionNums3 = document.getElementById('doceAdiecisiete');
    seccionNums3.addEventListener('mouseenter', mostrarOtros)
}

window.onload = asignarEventos();