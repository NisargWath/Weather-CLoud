const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_Name = document.getElementById('city_Name');
const getInfo = () => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        city_Name.innerText = `Plz Enter the name of the city before search`
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6aa9766f279043e9c60e6cec742ab4f8`
            const responce = await fetch(url);
            console.log(responce)
            temp.innerText = arrData[0].main.temp;
        } catch (error) {
            city_Name.innerText = `Plz Enter the city Name properly`

        }


    }

}


if (tempMood == "Clear") {
    temp_status.innerHTML =
        "<i class="
    fas fa - sun " style='color:#eccc68;' ></i>";
} else if (tempMood == "Clouds") {
    temp_status.innerHTML =
        "<i class="
    fas fa - cloud " style='color:#eccc68;' ></i>";
} else if (tempMood == "Rain") {
    temp_status.innerHTML =
        "<i class="
    fas fa - cloud - rain " style='color:#eccc68;' ></i>";
} else {
    temp_status.innerHTML =
        "<i class="
    fas fa - cloud " style='color:#eccc68;' ></i>";
} <