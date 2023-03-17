const hoursEl=document.querySelector('.hours');
const minutesEl=document.querySelector('.minutes');
const secondsEl=document.querySelector('.seconds');

function updateClock()
{
    const currentDate=new Date();

    setTimeout(updateClock,1000)

    let hour=currentDate.getHours();
    let minute=currentDate.getMinutes();
    let second=currentDate.getSeconds();

    let hourDeg=(hour/12)*360;
    let minuteDeg=(minute/60)*360;
    let secondDeg=(second/60)*360;

    hoursEl.style.transform=`rotate(${hourDeg}deg)`;
    minutesEl.style.transform=`rotate(${minuteDeg}deg)`;
    secondsEl.style.transform=`rotate(${secondDeg}deg)`;
}

updateClock()