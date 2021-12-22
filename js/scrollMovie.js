/* 
Intenté implementar la lógica de que si el usuario llega a X punto de la página, que el trailer comience
automáticamente, pero no funciona debido a que lo bloquea la página ya que lo toma como spam
let movie = document.querySelector("#iframe_movie")
window.addEventListener("scroll", () =>{
    let scrollY = window.scrollY;

    if(window.innerWidth <= 320){
        if(scrollY == 4800){
            movie.src = "https://www.youtube.com/embed/mP0VHJYFOAU?autoplay=1&amp;loop=1&amp;mute=1&amp;controls=0"
        }
    }
    
    console.log(scrollY);
})
console.log(window.innerWidth); */