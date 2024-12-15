// console.log("Hello World!");

const user = document.querySelector("#userValue")
const div = document.querySelector("#container")

function checkWeather(){

    if (user.value == ""){
        alert("Write the City name to Check Weather")
    }
console.log(user.value);
    
fetch(`https://api.weatherapi.com/v1/current.json?key=d780aac51f654ca6a4795517241512&q=${user.value}&aqi=no`)
.then((res) => {
    return res.json()
})
.then((res) => {
    console.log(res);
    div.innerHTML = `
    <img class="icon" src="https:${res.current.condition.icon}" alt="Weather Icon">
    <h1>Country : ${res.location.country}</h1>
    <h2 class="m-1" >City : ${res.location.name}</h2>
    <h2>Region : ${res.location.region}</h2>
    <h2 class="m-1">Weather : ${res.current.condition.text}</h2>
    <h2>Temperature : ${res.current.temp_c} C</h2>
    <h2 class="m-1">Feels like : ${res.current.feelslike_c} C</h2>
    <h2>Wind Speed : ${res.current.wind_kph}</h2>`
})

user.value = ""
}