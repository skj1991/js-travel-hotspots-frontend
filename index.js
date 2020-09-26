const endPoint = "http://localhost:3000/api/v1/trips";

document.addEventListener('DOMContentLoaded',() => {
    fetch(endPoint)
    .then(response => response.json())
    .then(trips => {
        console.log(trips);
    })
})
