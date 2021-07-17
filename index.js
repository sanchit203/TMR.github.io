function myfunction(){
    document.querySelector(".nav-list").classList.toggle("listhide");
}

var imgNo= 1;

setInterval(function sldeshow(){
    document.getElementById(imgNo).classList.add("hide");
    if(imgNo<4){
        imgNo=imgNo+1;
    }
    else{
        imgNo=1;
    }
    document.getElementById(imgNo).classList.remove("hide");
}, 5000);