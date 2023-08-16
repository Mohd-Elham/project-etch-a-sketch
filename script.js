var main_container = document.getElementById("main_container");
function createDivs(){
    var num = 16*16;
    numsize=600/16;
    for(let i=0; i<num;i++){
        divs = document.createElement("div");
        // div.style.height='${numsize}px';
        // div.style.width='${numsize}px';
        divs.classList.add("miniDiv");

        main_container.append(divs);
    }
}
main_container.addEventListener("mouseover",function (e) {
   if (e.target && e.target.className == 'miniDiv') {

    e.target.style.backgroundColor = `black`;
   } 
});