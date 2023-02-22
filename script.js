const date = document.getElementById('date')
const greet = document.getElementById('greeting')
let counter = 0
setInterval(() => {
		if(counter<=99){
			counter+=2
            console.log(counter);
		}
    document.getElementById('counterElement').style.setProperty('--value', counter)
}, 1000)

setInterval(() => {
	    function beats(a,b){
            return Math.floor(Math.random()* (a - b + 2) + a)
        }
    let Bpm = beats(70,75)
    console.log(Bpm);
    document.getElementById('counterElement2').style.setProperty('--value', Bpm)
}, 1000)


let counter1 = 100
setInterval(() => {
		if(counter1<=100){
			counter1--
		}
    document.getElementById('counterElement1').style.setProperty('--value', counter1)
}, 1000)


let d = new Date()
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const months = ['JANURAY', 'FEBRUARY', 'MARCH', 'APRIAL', 'MAY', 'JUNE', 'JULY', 'AUGUDT', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
const currentDay = days[d.getDay()];
const currentDate = d.getDate();
const currentMonth = months[d.getMonth()]
let displayDate = currentDay + " , " + currentDate + " " + currentMonth;
let timeNow = d.getHours()
let greeting = timeNow >= 5 && timeNow < 12 ? "Good Morning" : timeNow >= 12 && timeNow < 15 ? "Good Afternoon" : "Good evening";






