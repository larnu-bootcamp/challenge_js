const dateTime = document.querySelector(".container--profile--info--time--date")

const date = new Date();

console.log(date.toLocaleDateString() + ' ' + date.toLocaleTimeString())

dateTime.innerHTML = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()