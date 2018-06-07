let d = new Date(),
	year=d.getFullYear(),
	month=d.getMonth() + 1,
	day=d.getDate(),
	hours = d.getHours(),
	minutes = d.getMinutes(),
	seconds = d.getSeconds(),
	result = document.getElementById('result');


	if(hours < 10){
		hours = '0' + hours;
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	if(day < 10){
		day = '0' + day;
	}
	if(month < 10){
		month = '0' + month;
	}
	document.write(hours + ":" +minutes + ":" +seconds + " " +day + ":" + month + ":" + year + '<br>')

function todayDay(date) {
    dateToday = date || new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = dateToday.getDay();
    return days[day];
} document.write(todayDay());




reg = /\d{4}-\d{2}-\d{2}/;
k = 1/(1000*60*60) ;

function do_it(el){
	if ( !reg.test(el.value) ) {
		alert('err');return
	}
// let	firstDate = Date.parse(document.getElementById('date1').value);
var secondDate = Date.parse(document.getElementById('date2').value);
var now = new Date(); 
// var fut = Date.parse( el.value );

var subtraction = secondDate - now;
var back = subtraction < 0; 
var d = (Math.abs(subtraction)*k).toFixed(2);

// тут формирование строки.  в d у нас количество часов
var str  = '';

if( back) str = " было " + d + " часов назад";
else str = " будет через " + d + " часов.";
el.parentNode.children[4].innerHTML = str;
}