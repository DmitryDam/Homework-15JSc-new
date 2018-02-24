const startTimer = document.querySelector('#start');
const stopTimer = document.querySelector('#stop');
const newYear = document.querySelector('#newYear');

class Timer {
	// Назначение конструктора - создавать собственные
	// свойства экземпляра класса (т.е. объекта).
	constructor (startTime, stopTime) {
		this.startTime = startTime;
		this.stopTime = stopTime;
		this.interval = stopTime - startTime;
	}
    //Далее методы конструктора
	start () {
		let dateStart = new Date();
		let getDateStart = dateStart.getTime();
		stopwatch.startTime = getDateStart;
		let startTime = dateStart.getHours()+':'+dateStart.getMinutes()+':'+dateStart.getSeconds()+':'+dateStart.getMilliseconds();
		console.log(`Старт таймера в - ${startTime}`);
	}

	stop () {
		let dateStop = new Date();
		let getDateStop = dateStop.getTime();
		stopwatch.stopTime = getDateStop;
		let stopTime = dateStop.getHours()+':'+dateStop.getMinutes()+':'+dateStop.getSeconds()+':'+dateStop.getMilliseconds();
		console.log(`Стоп таймера в - ${stopTime}`);
	}

	getTime () {
		stopwatch.interval = Math.abs(Math.round((stopwatch.startTime - stopwatch.stopTime))/1000);
		console.log(`Время работы таймера - ${stopwatch.interval} секунд`);
	}
// Можно создавать собственные свойства класса и собственные методы класса 
// для вызова по имени класса, без создания объекта. Такие свойства и методы
// называют статическими. Для их создания в классе перед свойством или методом 
// нужно добавить служебное слово static
// Статическими могут быть только методы. Нельзя делать статическим конструктор
// класса, это вызывает ошибку.
	static timeToNY () {
		let DueDate = new Date();
		let getDueDate = DueDate.getTime();
		let NYDate = new Date(2019, 0, 1);
		console.log(`Текущая дата: ${DueDate.toLocaleString("ru")}`);
		console.log(`Дата следующего Нового Года: ${NYDate.toLocaleString("ru")}`);
		let NYTime = Math.round((NYDate - DueDate)/1000/60/60/24);
		console.log(`До Нового Года осталось дней - ${NYTime}`);
	}
}

let stopwatch = new Timer();
startTimer.addEventListener("click", stopwatch.start);
stopTimer.addEventListener("click", stopwatch.stop);
stopTimer.addEventListener("click", stopwatch.getTime);
newYear.addEventListener("click", Timer.timeToNY);

let timer1 = new Timer(5,10);
// console.log(sampleOne.startTime);
// console.log(sampleOne.stopTime);
// console.log(sampleOne.interval);

let timer2 = new Timer(200,500);
// console.log(sampleTwo.startTime);
// console.log(sampleTwo.stopTime);
// console.log(sampleTwo.interval);

