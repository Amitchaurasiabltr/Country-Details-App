async function getApiData() {
    try {
        var response = await fetch("https://restcountries.com/v3.1/name/bharat")
        var [data] = await response.json()
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("startOfWeek").innerHTML = data.startsOfWeek
        document.getElementById("maps").href = data.maps
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
    }
    catch (error) {
        alert("Invalid Country Name")
    }
}
getApiData()

async function searchCountry() {
    try {
        var name = document.getElementById("search").value
        var response = await fetch("https://restcountries.com/v3.1/name/" + name)
        var [data] = await response.json()
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("startOfWeek").innerHTML = data.startsOfWeek
        document.getElementById("maps").href = data.maps
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
    }
    catch (error) {
        alert("Invalid Country Name")
    }
}