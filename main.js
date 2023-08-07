//click header
let bars = document.querySelector(".c1");
let ul =document.querySelector(".ul1");
bars.addEventListener("click",function(){
    ul.classList.toggle("click1");
})
///////////////////////////////////

//header move
let header = document.querySelector(".header");
let headerli = document.querySelectorAll(".header .container li");
window.addEventListener("scroll",function(){
    if(this.window.scrollY>0){
        document.styleSheets[0].cssRules[10].style.setProperty("transform","translateY(0%)");
        header.classList.add("headmove");

        for(i=0 ;i<5 ;i++){
        headerli[i].style.color="#363636";
        }
    }
    else{
        document.styleSheets[0].cssRules[10].style.setProperty("transform","translateY(-100%)");
        header.classList.remove("headmove");
        for(i=0 ;i<5 ;i++){
            headerli[i].style.removeProperty('color');
            }
    } 
})
////////////////////////////////////////

///scroll animation
window.onload =function(){
    AOS.init({
        once: true
    })
}

ScrollReveal().reveal('.widget', { interval: 200 });


