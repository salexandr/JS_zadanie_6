var h = 0, m = 0, s = 0, ms = 0, nadpis;    
var interval = null;
var x=0;

function start(){
	if(document.getElementsByClassName('start_pause')[0].value == 'Start'){
	var p = document.getElementsByClassName('start_pause')[0];
	p.value = 'Stop';
	interval = setInterval(function(){tm();},16);
	tm ();
	} else {
	clearInterval(interval);
	var b = document.getElementsByClassName('start_pause')[0]; 
	b.value = 'Start';
	   x++;
	document.getElementsByClassName('split_rez')[0].innerHTML+=x+' Stop: '+document.getElementsByClassName('tablo')[0].innerHTML+'<br>';
	}
}
			
function rez(){
    x++;
	document.getElementsByClassName('split_rez')[0].innerHTML+=x+' Split: '+document.getElementsByClassName('tablo')[0].innerHTML+'<br>';
}	
			
function chist() {
	clearInterval(interval);
	var k = document.getElementsByClassName('start_pause')[0]; 
	k.value = 'Start';
	h = 0, m = 0, s = 0, ms = 0;
	var i = document.getElementsByClassName('tablo')[0]; 
	i.innerHTML = "00 : 00 : 00.000";
	var o = document.getElementsByClassName('split_rez')[0]; 
	o.innerHTML = "";
	x=0;
}
			
function checkTime(i){
	if (i<10){i="0" + i;}return i;}
	
function checkTimeMsec(i){
	if (i<100 && i>10){i="0" + i;}
	else if (i<10){i="00" + i;}return i;}
	
function tm() {
	ms++;
	if(ms > 59){s++; ms=0;}
	if(s > 59){m++; s=0;}
	if(m > 59){h++; m=0;}
	nadpis = checkTime(h)+ " : " + checkTime(m) + " : " +checkTime(s)+ " . " +checkTimeMsec(ms);
	var proiz = document.getElementsByClassName('tablo')[0]; 
	proiz.innerHTML = nadpis;
}

var start_pause = document.getElementsByClassName('start_pause')[0];
start_pause.addEventListener('click', start);

var split = document.getElementsByClassName('split')[0];
split.addEventListener('click', rez);

var cliarElement = document.getElementsByClassName('clear')[0];
cliarElement.addEventListener('click', chist);