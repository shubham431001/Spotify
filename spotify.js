function showMenu(){
    // if((display="none")==(display="none")){
    //     document.getElementById("hider").style.display="block";
    // }else{
    //     document.getElementById("hiding").style.display="none";   
    // }

    document.getElementById("cs").style.border="2px solid white";

    document.getElementById("hider").style.display="none";
    document.getElementById("hider").style.color="white";

    
}

function show(){
    document.getElementById("hiding").style.display="block";
}

// function clickSearch(){
    
// }

    // function hi2(){
    //     document.getElementById("cs").style.border="none";
    // }

    function hideMenu1(){
        document.getElementById("hider").style.display="block";
    }


// document.getElementById("takeOutclick").;


// code for fecth data of music from API
const APIMUSICURL = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const IMAGEPATH = "arijit.jpg";
const APISEARCH = "";

const musicBox = document.querySelector("#musicBox");
const getMusic = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    showMusic(data.results)
}

const showMusic = (data) => {
    musicBox.innerHTML="";
    data.forEach(
        (item) => {
            const box = document.createElement("div")
            box.classList.add("acd")
            box.innerHTML = `
            <div id="musicBox" class="poster-containers acd">
               <div class="music-poster">
                    <img src="${IMAGEPATH+item.APIMUSICURL}">
                  <div class="sharp">
                    <i class="fa-sharp fa-solid fa-play"></i>
                  </div>
              </div>
             <div class="artist-name">
                Sanam Re (Arijit Singh...)
                <span>Arijit Singh</span>
             </div>
           </div>
            `;

            musicBox.appendChild(box);

        }
    )
}

document.querySelector("#searchings").addEventListener(
    "keyup",
    function(event) {
        if(event.target.value != ""){
            getMusic(APISEARCH + event.target.value)
        }else{
            getMusic(APIMUSICURL)
        }
    }
)

getMusic(APIMUSICURL)

//end code api
 
// let term = '';
// const updateTerm = () => {
//     term = document.getElementById('searchTerm').value;
//     // check term exist
//     if (!term || term === '') {
//         alert('Please enter a seach term');
//     } else {
//         const url = `https://itunes.apple.com/search?term=${term}`;
//         const songContainer = document.getElementById('songs');
//         while (songContainer.firstChild) {
//             songContainer.removeChild(songContainer.firstChild);
//         }
//         fetch(url)
//             .then((Response) => Response.json())
//             .then((data) => {
//                 // console.log(data.results);
//                 const artists = data.results;
//                 return artists.map(result => {
//                     // Now create Html Element 

//                     const article = document.createElement('article'),
//                         artists = document.createElement('p'),
//                         song = document.createElement('h4'),
//                         img = document.createElement('img'),
//                         audio = document.createElement('audio'),
//                         audioSource = document.createElement('source')

//                     // Now put content 

//                     artists.innerHTML = result.artistName;
//                     song.innerHTML = result.trackName;
//                     img.src = result.artworkUrl100;
//                     audioSource.src = result.previewUrl;
//                     audio.controls = true;

//                     article.appendChild(img);
//                     article.appendChild(artists);
//                     article.appendChild(song);
//                     article.appendChild(audio);
//                     audio.appendChild(audioSource);

//                     songContainer.appendChild(article);
//                 })
//             })
//             .catch(error => console.log('Request failed:', error))
//     }
// }

// const searchBtn = document.getElementById('searchTermBtn');
// searchBtn.addEventListener('click', updateTerm)

// document.addEventListener('play', event => {
//     const audio = document.getElementsByTagName('audio');
//     for (let i = 0; i < audio.length; i++) {
//         if (audio[i] != event.target) {
//             audio[i].pause();
//         }
//     }
// }, true)