const radioInput = document.getElementById('radioInput');
const stationList = document.getElementById('stationList');
const audioPlayer = document.getElementById('audioPlayer');
const stationTitle = document.getElementById('stationTitle');



const BASE_URL = 'http://relay.ln21.xyz/json/stations/byname/';

async function fetchStations() {
    const searchWord = radioInput.value.trim();
    // console.log(searchWord)
    if (!searchWord) return;


    stationList.innerHTML = '<li>Searching Music...</li>'

    try {
        const response = await fetch(BASE_URL + searchWord);
        console.log(response);

        if (!response.ok) throw new Error('Error fetching data!');

        const stations = await response.json();
        // console.log(stations);
        displayStations(stations);

    } catch (error) {
        console.error(error)
    }

}


function displayStations(stations) {
    stationList.innerHTML = '';

    if (!stations || stations.length === 0) {
        stationList.innerHTML = '<li>Cant find stations...</li>';
    }


    stations.slice(0,50).forEach(station => {
        const stationItem = document.createElement('li');
        
        const logo = document.createElement('img');
        logo.src = station.favicon;
        logo.alt = station.name;

        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = station.name;

        stationItem.appendChild(logo);
        stationItem.appendChild(nameSpan);
        // console.log(stationItem)


        stationItem.addEventListener('click', () => {
            playstation(station.url_resolved, station.name)
        })


        stationList.appendChild(stationItem);
    });



}



function playstation(src,name) {
    audioPlayer.src = src;
    audioPlayer.value = 0.3;
    audioPlayer.play();
    stationTitle.innerHTML = 'Playing: ' + name;
}


radioInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') fetchStations();
    
})


