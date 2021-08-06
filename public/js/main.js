const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status")
const Datahide = document.querySelector(".middle_layer")

const getInfo = async(event) => {
    event.preventDefault();
    // alert("kanhaiya")
    let cityVal = cityName.value;


    if (cityVal === "") {
        city_name.innerText = "Plg Write The City Name Before Search";
        Datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=46ab24b7e7f02d56a34ec869fabf443f`;
            const response = await fetch(url);
            const Data = await response.json();
            const arrData = [Data]
                //console.log(arrData)
            temp.innerText = arrData[0].main.temp;

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            //condition to check sunny or cloudly
            const temp_mod = arrData[0].weather[0].main;
            if (temp_mod == "Clear") {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;' aria-hidden='true'></i>"
            } else if (temp_mod == "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;' aria-hidden='true'></i>"
            } else if (temp_mod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;' aria-hidden='true'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;' aria-hidden='true'></i>"
            }
            Datahide.classList.remove("data_hide");
        } catch {
            city_name.innerText = "Plg Write The City Name Properly";
            Datahide.classList.add("data_hide");
        }

    }
}

submitBtn.addEventListener("click", getInfo);