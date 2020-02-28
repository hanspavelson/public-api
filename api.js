
function getJoke() {
    

    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
        return res.json()
    })

    .then(data => {
        const container = document.getElementById('container')
        console.log(data.setup)
        console.log(data.punchline)
        container.innerHTML ='<div class="algus">' + data.setup + '</div> <div class="lopp">' + data.punchline + '</div>'
    })


}
document.getElementById('aamen').addEventListener("click", getJoke)

getJoke()

