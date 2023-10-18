const select = document.querySelector('#cars')
const selectedCar = select.querySelectorAll('option')
const output = document.querySelector('#output');

select.addEventListener('change', () => {
    fetch('cars.json')
        .then((res) => res.json())
        .then((res) => {
            selectedCar.forEach((car) => {
                if (car.selected) {
                    const {brand, model, price} = res.cars[car.index - 1] 
                    console.log(brand)
                    output.innerHTML = (`Тачка ${brand} ${model} <br> Цена: ${price}$`)
                }
            })
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
})


