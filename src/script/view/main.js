fetch(`https://covid19.mathdro.id/api`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        document.getElementById('positif').innerHTML = responseJson.confirmed.value;
        document.getElementById('sembuh').innerHTML = responseJson.recovered.value;
        document.getElementById('meninggal').innerHTML = responseJson.deaths.value;
        document.getElementById('update').innerHTML = responseJson.lastUpdate;
    })