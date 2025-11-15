const jokeH2 = document.getElementById('jokeH2');
const translateH2 = document.getElementById('translateH2');



async function fetchJoke() {
    

    const JOKE_URL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

    try {

        const response = await fetch(JOKE_URL);
        // console.log(response)

        if (!response.ok) throw new Error('Failed to fetch joke.');

        const responseJason = await response.json();
        // console.log(responseJason);
        // console.log(responseJason.joke);
        jokeH2.innerHTML = responseJason.joke;
        translateJoke(responseJason.joke);
        
    } catch (error) {
        console.error(error);
        // jokeH2.innerHTML = error;
    }

}


fetchJoke()



async function translateJoke(joke) {

    const TRANSLATE_URL = `https://api.mymemory.translated.net/get?q=${joke}&langpair=en|he`;

    try {
        const response = await fetch(TRANSLATE_URL);
        console.log(response);

        if (!response.ok) throw new Error('Failed to translate joke.');

        const translateJson = await response.json();
        console.log(translateJson)
        console.log(translateJson.responseData);
        console.log(translateJson.responseData.translatedText);
        translateH2.innerHTML = translateJson.responseData.translatedText
        
    } catch (error) {
        console.error(error);

    }
    
}