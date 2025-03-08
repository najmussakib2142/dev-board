function changeBgColor(){
    const randomColor = Math.floor(Math.random() * 16777215);
    const randomColorHex = '#' + randomColor.toString(16);

    document.body.style.backgroundColor = randomColorHex;
}

function showDateAndTime(){
    const now = new Date();

    const dayNumber = now.getDay();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];             const dayName = dayNames[dayNumber];

    const monthNumber = now.getMonth();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[monthNumber];

    const year = now.getFullYear();
    const day = now.getDate();

    const dateString = `
    <span class = 'font-normal'>${dayName}</span> , <br> ${monthName} ${day} ${year}
    `;
    document.getElementById('date').innerHTML = dateString;
}
showDateAndTime();