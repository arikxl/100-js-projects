const profile = document.getElementById('profile');
const nameSpan = document.getElementById('nameSpan');
const ageSpan = document.getElementById('ageSpan');
const cityH3 = document.getElementById('cityH3');
const msg = document.getElementById('msg');



let profileName = '';
let gender = 'female';
function chooseGender() {
    gender = document.getElementById('genderSelect').value;
    fetchImage();
}



const MY_API_KEY = 'YOUR API KEY';
const BASE_URL = 'https://api.pexels.com/v1/';



async function fetchImage() {
    nameSpan.innerHTML = 'Loading...'
    ageSpan.innerHTML = ''
    cityH3.innerHTML = ''

    const randomPage = ~~(Math.random() * 100);
    const query = `adult ${gender} profile`;
    const pages = 'per_page=1&page='

    try {

        const response = await fetch(`${BASE_URL}search?query=${query}&${pages}${randomPage}`, {
            headers: {
                Authorization: MY_API_KEY
            }
        });

        if (!response.ok) throw new Error('Error Fetching Image');

        // console.log(response);
        const data = await response.json();
        // console.log(data);

        if (data.photos.length > 0) {
            const photo = data.photos[0];
            // console.log(photo)
            const photoSrc = photo.src.large2x;
            // console.log(photoSrc);

            const imgLoader = new Image();
            imgLoader.onload = () => {

                profile.style.backgroundImage = `url(${photoSrc})`;
                changeData();
            }

            imgLoader.src = photoSrc;

        }

    } catch (error) {
        console.error(error)
    }

}

fetchImage()


function changeData() {

    ageSpan.innerHTML = ~~(Math.random() * 30 + 20);

    let randomCityIndex = ~~(Math.random() * israeliLocations.length);
    cityH3.innerHTML = israeliLocations[randomCityIndex];

    let array = israeliFemaleNames;
    if (gender === 'male') array = israeliMaleNames;
    let randomNameIndex = ~~(Math.random() * array.length);
    profileName = array[randomNameIndex]
    nameSpan.innerHTML = profileName;
    profile.classList.remove('hidden');

}

function swipeLeft() {
    profile.classList.add('move-left');

    setTimeout(() => {

        profile.classList.add('hidden');
        profile.classList.remove('move-left');
        fetchImage();
    }, 800)

}



function swipeRight() {

    let randomNumber = Math.random();
    // console.log(randomNumber);

    if (randomNumber < 0.2) {
       msg.style.display = 'flex';
      msg.innerHTML= 'You Have a Match!  <br/>'+ `${profileName} likes you too!`
    } else {


        profile.classList.add('move-right');

        setTimeout(() => {

            profile.classList.add('hidden');
            profile.classList.remove('move-right');
            fetchImage();
        }, 800)
    }

}


function closeMsg() {
    fetchImage();
    setTimeout(() => {
        msg.style.display = 'none';
    },300)
}