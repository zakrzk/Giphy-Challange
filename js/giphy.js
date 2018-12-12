function searchGifs(){

    let query = document.querySelector("#query").value;
    let xhr = new XMLHttpRequest();


    xhr.open("GET", `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=gljIIEoPTaGCm8tG76Aca6fDnZD0trnZ&limit=5`, true);


    xhr.onreadystatechange = function(event){


        if(this.readyState === 4 && this.status === 200){

            let resultJSON = JSON.parse(this.response);

            for(let gif in resultJSON.data){
                console.log(gif, "test", resultJSON.data)
            }
        }
    };



    // function logType(event){
    //     console.log(event.type);
    // }

    xhr.send(null);

}

