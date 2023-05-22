// input box;
// add an oninput event listner
// oninput key
let actual_data;
async function main(){
    let search =document.getElementById("text").value;
  
   try{
    let res = await fetch(`http://www.omdbapi.com/?apikey=496190e&s=${search}`);
    let data=await res.json();

     actual_data=data.Search;
    // // console.log(actual_data)
    
    if( actual_data != undefined){
        appendMovies(actual_data)
    }
}catch(err){
    console.log(err)
    }
    }
let moviesAppend=document.getElementById("movies");
   
   function appendMovies(actual_data){
    moviesAppend.innerHTML="";
       actual_data.forEach(function(ele){
            let p=document.createElement("p");
            p.innerText=ele.Title;

            let div=document.createElement("div");
            let image=document.createElement("img");
            image.src=ele.Poster;
            let name=document.createElement("h1");
            name.innerText=ele.Title;
            let date=document.createElement("h2");
            date.innerText=ele.Year;
            let imd=document.createElement("h3");
            imd.innerText=ele.imdbID;
    
            div.append(image,name,date,imd)
            //  console.log(div)
            document.getElementById("movies1").append(div)
            moviesAppend.append(p)
        })
       
    }
    let id;
    function debounce(main,delay){
        // a ->debounce main-settimeout("a")-id=1;
        // a->debounce->main-settimeout("av")-id-2

        if(id){
           clearTimeout(id);
        }
        id=setTimeout(function (){
          main();
        },delay)
    }