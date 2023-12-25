setInterval(myTime,1000);

function myTime(){
    let time = new Date();
    let HourElement = document.getElementById("Hour");
    let MinuteElement = document.getElementById("Minute");
    let SecondsElement = document.getElementById("Seconds");

    let Hour = time.getHours();
    HourElement.innerText = Hour < 10 ? "0" + Hour : Hour;
    let Minute = time.getMinutes();
    MinuteElement.innerText = Minute < 10 ? "0" + Minute: Minute;
    let Seconds = time.getSeconds();
    SecondsElement.innerText = Seconds < 10 ? "0" + Seconds: Seconds;
}
