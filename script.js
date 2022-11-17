let search=document.getElementsByClassName("search")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let start= document.getElementsByClassName("start")[0]
let searchimg=document.getElementsByClassName("searchimg")[0]
start.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
        if(searchimg.style.bottom=="50px"){
            searchimg.style.bottom="-675px"
        }
    }
})
search.addEventListener('click',()=>{
    console.log("clicked");
    if(searchimg.style.bottom=="50px"){
        searchimg.style.bottom="-675px"
    }
    else{
        if(startmenu.style.bottom == "50px"){
            startmenu.style.bottom = "-655px"
        }
        searchimg.style.bottom="50px"
    }
})

