//digital clock function
function displayDigiClock(){
    const d = new Date();
    const clock = document.querySelector('.clock');
    
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day ='AM';
    
    
    if (hour >12) {
        hour = hour - 12;
        day = 'PM';
    }

   if(hour == 0){
        hour = 12;
   }

    if (hour < 10) {
        hour = '0'+hour;
        
    }

    if (min < 10) {
        min = '0'+min;
        
    }
    if (sec < 10) {
        sec = '0'+sec;
        
    }
    
    clock.textContent = hour+" : "+min+" : "+sec+ " "+day;
}
setInterval(displayDigiClock);


//analog clock function

const sec = document.querySelector(".second_hand");
const min = document.querySelector(".minute_hand");
const hour = document.querySelector(".hour_hand");

setInterval(function(){
    let time  = new Date();
    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hrs = time.getHours() * 30;
    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hour.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
});