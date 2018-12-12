document.domain = document.domain;

const rightDiv = document.getElementById("right");
let gifsUrlArr =[];
let gifsDisplayed = false;

function searchGifs(){
    let query = document.querySelector("#query").value;
    let xhr = new XMLHttpRequest();


    xhr.open("GET", `//api.giphy.com/v1/gifs/search?q=${query}&api_key=gljIIEoPTaGCm8tG76Aca6fDnZD0trnZ&limit=5`, true);


    xhr.onreadystatechange = function(event){

        if(this.readyState === 4 && this.status === 200){
            console.log(this.readyState);

            let resultJSON = JSON.parse(this.response);
            let gifsArr = [];

            for(let gif in resultJSON.data){
                //add all URLs to the array
                gifsArr.push(resultJSON.data[gif].images.downsized.url);
            }
            createGifsUrlsArray(gifsArr)
            displayGifs();
        }
    };



    // function logType(event){
    //     console.log(event.type);
    // }

    xhr.send(null);

}

function createGifsUrlsArray(gifsArr){
    
    for(let gif in gifsArr){
        gifsUrlArr[gif] = gifsArr[gif];

    }
}
function displayGifs() {



    let gifsContainer = document.getElementById("gifs-container");
    let docFrag = document.createDocumentFragment();



    gifsUrlArr.forEach(function (url, index, array) {

        let img = document.createElement("img");
        img.src = url;
        docFrag.appendChild(img);

    });

    // //remove gifs from previous search
    // if (gifsDisplayed){
    //     gifsContainer.removeChild(docFrag);
    //
    // }

    gifsContainer.appendChild(docFrag);
    gifsDisplayed = true;

}

console.log(gifsUrlArr);