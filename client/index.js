
const api = axios.create({
    baseURL: 'http://127.0.0.1:3000'
})

const serverResponse = document.getElementById("serverResponse")
function getHello() {
    api.get('/')
        .then(function (response) {
            console.log(response)
            serverResponse.innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
}
function getGoodbye() {
    api.get('/bye')
        .then(function (response) {
            console.log(response)
            serverResponse.innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error);
        })

}
function getHtml() {
    api.get('/html')
        .then(function (response) {
            serverResponse.innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
}

function sendData() {
    let name = prompt('Как тебя зовут?')

    api.get('/name', {
        params: { youName: name },
    })
        .then(function (response) {
            console.log(response)
            serverResponse.innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
}







