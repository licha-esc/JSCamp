// const botones = document.querySelectorAll('.button-apply-job');
// devuelve  un NodeList (array-like) con todos los botones que encuentre
// o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//     boton.addEventListener('click', () => {
//         boton.textContent = '¡Aplicado!'
//         boton.classList.add('is-applied');
//         boton.disabled = true;
//     })
// })

const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', (event) => {
    const boton = event.target;

    if (boton.classList.contains('button-apply-job')) {
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied');
        boton.disabled = true;
    }
})

const filter = document.querySelector('#filter-technology');

filter.addEventListener('change', function () {
    console.log(filter.value);
})