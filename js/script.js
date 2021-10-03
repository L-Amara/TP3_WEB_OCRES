// Fonction appelée lors du click du bouton
function start() {

    var ville = document.getElementById('city-input').value;

    // Initialisation ville si pas de choix : Paris
    if (ville == "")
        ville = "Paris";
    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(ville);

    // Appel de la fonction fetchTodayForecast
    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principale
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })



    .catch(function(error) {
        // Affiche une erreur
        console.error(error);
    });

    // Appel de la fonction fetchTodayForecast
    apiWeather
        .getThreeDayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data; // const
            // Afficher la donnée
            console.log(data);

            // ==================== Version dédoublée :

            /* // Jour 1
            // On récupère l'information principale
            const main0 = data.list[0].weather[0].main;
            const description0 = data.list[0].weather[0].description;
            const temp0 = data.list[0].temp.day;
            const icon0 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
            // Modifier le DOM
            document.getElementById('today-forecast-main0').innerHTML = main0;
            document.getElementById('today-forecast-more-info0').innerHTML = description0;
            document.getElementById('icon-weather-container0').innerHTML = icon0;
            document.getElementById('today-forecast-temp0').innerHTML = `${temp0}°C`;

            // Jour 2
            // On récupère l'information principale
            const main1 = data.list[1].weather[0].main;
            const description1 = data.list[1].weather[0].description;
            const temp1 = data.list[1].temp.day;
            const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
            // Modifier le DOM
            document.getElementById('today-forecast-main1').innerHTML = main1;
            document.getElementById('today-forecast-more-info1').innerHTML = description1;
            document.getElementById('icon-weather-container1').innerHTML = icon1;
            document.getElementById('today-forecast-temp1').innerHTML = `${temp1}°C`;

            // Jour 3
            // On récupère l'information principale
            const main2 = data.list[2].weather[0].main;
            const description2 = data.list[2].weather[0].description;
            const temp2 = data.list[2].temp.day;
            const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
            // Modifier le DOM
            document.getElementById('today-forecast-main2').innerHTML = main2;
            document.getElementById('today-forecast-more-info2').innerHTML = description2;
            document.getElementById('icon-weather-container2').innerHTML = icon2;
            document.getElementById('today-forecast-temp2').innerHTML = `${temp2}°C`; */


            // ==================== Version avec boucle du jour 1 à jour 3

            for (let i = 0; i < 3; i++) {
                const main = data.list[i].weather[0].main;
                const description = data.list[i].weather[0].description;
                const temp = data.list[i].temp.day;
                const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

                // Modifier le DOM
                document.getElementById(`today-forecast-main${i}`).innerHTML = main;
                document.getElementById(`today-forecast-more-info${i}`).innerHTML = description;
                document.getElementById(`icon-weather-container${i}`).innerHTML = icon;
                document.getElementById(`today-forecast-temp${i}`).innerHTML = `${temp}°C`;
            }


        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });

}