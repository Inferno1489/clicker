let a = document.getElementsByTagName("button");
let score = document.getElementsByTagName('h1');
let dogoscontainer = document.getElementsByClassName("dogos");

let money = 0;
if(localStorage.money != NaN && localStorage.money != undefined){
	money = parseInt(localStorage.money);
	score[0].innerHTML = "DOGES: " + money;
}


let deg = 0;

let dogoscount = 0;
let dogos = [];

let upgcontainer = document.getElementsByClassName("upgrades")[0];
let upgbars = document.getElementsByClassName("upg");
let upgbarstitle = document.getElementsByClassName("upg-title");
let upgprice = document.getElementsByClassName("upg-price-price");
let upgcount = document.getElementsByClassName("upg-count");
let upgpics = document.getElementsByClassName("upgspics");

let totalupgs = 1;

let upgrade1vis = false;
let upgrade2vis = false;
let upgrade3vis = false;
let upgrade4vis = false;
let upgrade5vis = false;
let upgrade6vis = false;
let upgrade7vis = false;
let upgrade8vis = false;
let upgrade9vis = false;
let upgrade10vis = false;
let upgrade11vis = false;

let upgrade1cost = 25;
let upgrade1count = 0;
let upgrade2cost = 50;
let upgrade2count = 0;
let upgrade3cost = 100;
let upgrade3count = 0;
let upgrade4cost = 250;
let upgrade4count = 0;
let upgrade5cost = 1000;
let upgrade5count = 0;
let upgrade6cost = 10000;
let upgrade6count = 0;
let upgrade7cost = 250000;
let upgrade7count = 0;
let upgrade8cost = 1350000;
let upgrade8count = 0;
let upgrade9cost = 25000000;
let upgrade9count = 0;
let upgrade10cost = 1000000000;
let upgrade10count = 0;
let upgrade11cost = 25000000000;
let upgrade11count = 0;

if(localStorage.upgrade1count != NaN && localStorage.upgrade1count != undefined){
	upgrade1count = parseInt(localStorage.upgrade1count);
	upgrade1cost = parseInt(25 * (1.35)**upgrade1count);
	upgprice[0].innerHTML = upgrade1cost;
	upgcount[0].innerHTML = upgrade1count;
	upgrade1vis = true;
	upgbars[0].style.filter = "none";
	upgbarstitle[0].innerHTML = "Cursor";
	upgbars[1].style.display = "block";
	for(let i = 0; i < upgrade1count; i++){
		upgpics[0].innerHTML += "<img class='pic pic1' src='https://image.flaticon.com/icons/png/512/1612/1612818.png'>"
		let newcursor = document.getElementsByClassName("pic1")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
	}
}
if(localStorage.upgrade2count != NaN && localStorage.upgrade2count != undefined){
	upgrade2count = parseInt(localStorage.upgrade2count);
	upgrade2cost = parseInt(50 * (1.35)**upgrade2count);
	upgprice[1].innerHTML = upgrade2cost;
	upgcount[1].innerHTML = upgrade2count;
	upgrade2vis = true;
	upgbars[1].style.filter = "none";
	upgbarstitle[1].innerHTML = "AutoCliker";
	upgbars[2].style.display = "block";
	for(let i = 0; i < upgrade2count; i++){
		upgpics[1].innerHTML += "<img class='pic pic2' src='https://image.flaticon.com/icons/svg/889/889844.svg'>"
		let newcursor = document.getElementsByClassName("pic2")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += upgrade1count;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade3count != NaN && localStorage.upgrade3count != undefined){
	upgrade3count = parseInt(localStorage.upgrade3count);
	upgrade3cost = parseInt(100 * (1.35)**upgrade3count);
	upgprice[2].innerHTML = upgrade3cost;
	upgcount[2].innerHTML = upgrade3count;
	upgrade3vis = true;
	upgbars[2].style.filter = "none";
	upgbarstitle[2].innerHTML = "Clock";
	upgbars[3].style.display = "block";
	for(let i = 0; i < upgrade3count; i++){
		upgpics[2].innerHTML += "<img class='pic pic3' src='https://image.flaticon.com/icons/svg/2928/2928750.svg'>"
		let newcursor = document.getElementsByClassName("pic3")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += upgrade3count;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade4count != NaN && localStorage.upgrade4count != undefined){
	upgrade4count = parseInt(localStorage.upgrade4count);
	upgrade4cost = parseInt(250 * (1.35)**upgrade4count);
	upgprice[3].innerHTML = upgrade4cost;
	upgcount[3].innerHTML = upgrade4count;
	upgrade4vis = true;
	upgbars[3].style.filter = "none";
	upgbarstitle[3].innerHTML = "Friend";
	upgbars[4].style.display = "block";
	for(let i = 0; i < upgrade4count; i++){
		upgpics[3].innerHTML += "<img class='pic pic4' src='https://image.flaticon.com/icons/svg/2920/2920076.svg'>"
		let newcursor = document.getElementsByClassName("pic4")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 10;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade5count != NaN && localStorage.upgrade5count != undefined){
	upgrade5count = parseInt(localStorage.upgrade5count);
	upgrade5cost = parseInt(1000 * (1.35)**upgrade5count);
	upgprice[4].innerHTML = upgrade5cost;
	upgcount[4].innerHTML = upgrade5count;
	upgrade5vis = true;
	upgbars[4].style.filter = "none";
	upgbarstitle[4].innerHTML = "Company";
	upgbars[5].style.display = "block";
	for(let i = 0; i < upgrade5count; i++){
		upgpics[4].innerHTML += "<img class='pic pic5' src='https://image.flaticon.com/icons/svg/2920/2920017.svg'>"
		let newcursor = document.getElementsByClassName("pic5")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 30;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade6count != NaN && localStorage.upgrade6count != undefined){
	upgrade6count = parseInt(localStorage.upgrade6count);
	upgrade6cost = parseInt(10000 * (1.35)**upgrade6count);
	upgprice[5].innerHTML = upgrade6cost;
	upgcount[5].innerHTML = upgrade6count;
	upgrade6vis = true;
	upgbars[5].style.filter = "none";
	upgbarstitle[5].innerHTML = "Truck";
	upgbars[6].style.display = "block";
	for(let i = 0; i < upgrade6count; i++){
		upgpics[5].innerHTML += "<img class='pic pic6' src='https://image.flaticon.com/icons/svg/2921/2921870.svg'>"
		let newcursor = document.getElementsByClassName("pic6")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 100;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade7count != NaN && localStorage.upgrade7count != undefined){
	upgrade7count = parseInt(localStorage.upgrade7count);
	upgrade7cost = parseInt(250000 * (1.35)**upgrade7count);
	upgprice[6].innerHTML = upgrade7cost;
	upgcount[6].innerHTML = upgrade7count;
	upgrade7vis = true;
	upgbars[6].style.filter = "none";
	upgbarstitle[6].innerHTML = "Farm";
	upgbars[7].style.display = "block";
	for(let i = 0; i < upgrade7count; i++){
		upgpics[6].innerHTML += "<img class='pic pic7' src='https://image.flaticon.com/icons/svg/862/862828.svg'>"
		let newcursor = document.getElementsByClassName("pic7")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 1000;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade8count != NaN && localStorage.upgrade8count != undefined){
	upgrade8count = parseInt(localStorage.upgrade8count);
	upgrade8cost = parseInt(1350000 * (1.35)**upgrade8count);
	upgprice[7].innerHTML = upgrade8cost;
	upgcount[7].innerHTML = upgrade8count;
	upgrade8vis = true;
	upgbars[7].style.filter = "none";
	upgbarstitle[7].innerHTML = "Factory";
	upgbars[8].style.display = "block";
	for(let i = 0; i < upgrade8count; i++){
		upgpics[7].innerHTML += "<img class='pic pic8' src='https://image.flaticon.com/icons/svg/2933/2933835.svg'>"
		let newcursor = document.getElementsByClassName("pic8")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 6500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade9count != NaN && localStorage.upgrade9count != undefined){
	upgrade9count = parseInt(localStorage.upgrade9count);
	upgrade9cost = parseInt(25000000 * (1.35)**upgrade9count);
	upgprice[8].innerHTML = upgrade9cost;
	upgcount[8].innerHTML = upgrade9count;
	upgrade9vis = true;
	upgbars[8].style.filter = "none";
	upgbarstitle[8].innerHTML = "Nuclear Plant";
	upgbars[9].style.display = "block";
	for(let i = 0; i < upgrade9count; i++){
		upgpics[8].innerHTML += "<img class='pic pic9' src='https://image.flaticon.com/icons/svg/1847/1847438.svg'>"
		let newcursor = document.getElementsByClassName("pic9")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 26500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade10count != NaN && localStorage.upgrade10count != undefined){
	upgrade10count = parseInt(localStorage.upgrade10count);
	upgrade10cost = parseInt(1000000000 * (1.35)**upgrade10count);
	upgprice[9].innerHTML = upgrade10cost;
	upgcount[9].innerHTML = upgrade10count;
	upgrade10vis = true;
	upgbars[9].style.filter = "none";
	upgbarstitle[9].innerHTML = "City";
	upgbars[10].style.display = "block";
	for(let i = 0; i < upgrade10count; i++){
		upgpics[9].innerHTML += "<img class='pic pic10' src='https://image.flaticon.com/icons/svg/2942/2942593.svg'>"
		let newcursor = document.getElementsByClassName("pic10")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 126500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}
if(localStorage.upgrade11count != NaN && localStorage.upgrade11count != undefined){
	upgrade11count = parseInt(localStorage.upgrade11count);
	upgrade11cost = parseInt(25000000000 * (1.35)**upgrade11count);
	upgprice[10].innerHTML = upgrade11cost;
	upgcount[10].innerHTML = upgrade11count;
	upgrade11vis = true;
	upgbars[10].style.filter = "none";
	upgbarstitle[10].innerHTML = "Time machine";
	for(let i = 0; i < upgrade11count; i++){
		upgpics[9].innerHTML += "<img class='pic pic10' src='https://image.flaticon.com/icons/svg/2942/2942593.svg'>"
		let newcursor = document.getElementsByClassName("pic11")[i];
		newcursor.style.left = i*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 526000;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
}

a[0].addEventListener("click", function(){
	money = money + 1 + upgrade1count;
	localStorage.money = money;
	score[0].innerHTML = "DOGES: " + money;
	deg += 360;
	a[0].style.transform = "rotate("+deg+"deg)";
	dogoscontainer[0].innerHTML += "<div class='dogo'></div>";
	let newdogo = document.getElementsByClassName("dogo")[dogoscount];
	dogos.push(newdogo);
	newdogo.style.left = event.clientX  - 20 + "px";
	newdogo.style.top = event.clientY  - 20 + "px";
	setTimeout(function(){
		dogoscontainer[0].removeChild(document.getElementsByClassName("dogo")[0]);
		dogoscount--;
	}, 1500)
	dogoscount++;
	if(money >= 10 && !upgrade1vis){
		upgrade1vis = true;
		upgbars[0].style.filter = "none";
		upgbarstitle[0].innerHTML = "Cursor";
		upgbars[1].style.display = "block";
	}
	if(money > 25 && !upgrade2vis){
		upgrade2vis = true;
		upgbars[1].style.filter = "none";
		upgbarstitle[1].innerHTML = "AutoCliker";
		upgbars[2].style.display = "block";
	}
	if(money >= 50 && !upgrade3vis){
		upgrade3vis = true;
		upgbars[2].style.filter = "none";
		upgbarstitle[2].innerHTML = "Clock";
		upgbars[3].style.display = "block";
	}
	if(money > 150 && !upgrade4vis){
		upgrade4vis = true;
		upgbars[3].style.filter = "none";
		upgbarstitle[3].innerHTML = "Friend";
		upgbars[4].style.display = "block";
	}
	if(money >= 750 && !upgrade5vis){
		upgrade5vis = true;
		upgbars[4].style.filter = "none";
		upgbarstitle[4].innerHTML = "Company";
		upgbars[5].style.display = "block";
	}
	if(money > 5000 && !upgrade6vis){
		upgrade6vis = true;
		upgbars[5].style.filter = "none";
		upgbarstitle[5].innerHTML = "Truck";
		upgbars[6].style.display = "block";
	}
	if(money >= 100000 && !upgrade7vis){
		upgrade7vis = true;
		upgbars[6].style.filter = "none";
		upgbarstitle[6].innerHTML = "Farm";
		upgbars[7].style.display = "block";
	}
	if(money > 500000 && !upgrade8vis){
		upgrade8vis = true;
		upgbars[7].style.filter = "none";
		upgbarstitle[7].innerHTML = "Factory";
		upgbars[8].style.display = "block";
	}
	if(money > 10000000 && !upgrade9vis){
		upgrade9vis = true;
		upgbars[8].style.filter = "none";
		upgbarstitle[8].innerHTML = "Nuclear Plant";
		upgbars[9].style.display = "block";
	}
	if(money >= 500000000 && !upgrade10vis){
		upgrade10vis = true;
		upgbars[9].style.filter = "none";
		upgbarstitle[9].innerHTML = "City";
		upgbars[10].style.display = "block";
	}
	if(money > 10000000000 && !upgrade11vis){
		upgrade11vis = true;
		upgbars[10].style.filter = "none";
		upgbarstitle[10].innerHTML = "Time machine";
	}
});
upgbars[0].addEventListener("click", function(){
	if(money >= upgrade1cost){
		money = money - upgrade1cost;
		score[0].innerHTML = "DOGES: " + money;
		upgrade1cost = parseInt(upgrade1cost * 1.35);
		upgprice[0].innerHTML = upgrade1cost;
		upgrade1count = upgrade1count + 1;
		localStorage.upgrade1count = upgrade1count;
		upgcount[0].innerHTML = upgrade1count;
		upgpics[0].innerHTML += "<img class='pic pic1' src='https://image.flaticon.com/icons/png/512/1612/1612818.png'>"
		let newcursor = document.getElementsByClassName("pic1")[upgrade1count - 1];
		newcursor.style.left = upgrade1count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
	}
});
let time = 1000;
upgbars[1].addEventListener("click", function(){
	if(money >= upgrade2cost){
		money = money - upgrade2cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade2cost = parseInt(upgrade2cost * 1.35);
		upgprice[1].innerHTML = upgrade2cost;
		upgrade2count = upgrade2count + 1;
		localStorage.upgrade2count = upgrade2count;
		upgcount[1].innerHTML = upgrade2count;
		upgpics[1].innerHTML += "<img class='pic pic2' src='https://image.flaticon.com/icons/svg/889/889844.svg'>"
		let newcursor = document.getElementsByClassName("pic2")[upgrade2count - 1];
		newcursor.style.left = upgrade2count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += upgrade1count;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, time)
	}
});
upgbars[2].addEventListener("click", function(){
	if(money >= upgrade3cost){
		money = money - upgrade3cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade3cost = parseInt(upgrade3cost * 1.5);
		upgprice[2].innerHTML = upgrade3cost;
		upgrade3count = upgrade3count + 1;
		localStorage.upgrade3count = upgrade3count;
		upgcount[2].innerHTML = upgrade3count;
		upgpics[2].innerHTML += "<img class='pic pic3' src='https://image.flaticon.com/icons/svg/2928/2928750.svg'>"
		let newcursor = document.getElementsByClassName("pic3")[upgrade3count - 1];
		newcursor.style.left = upgrade3count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		time = time * 0.87;
	}
});
upgbars[3].addEventListener("click", function(){
	if(money >= upgrade4cost){
		money = money - upgrade4cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade4cost = parseInt(upgrade4cost * 1.35);
		upgprice[3].innerHTML = upgrade4cost;
		upgrade4count = upgrade4count + 1;
		localStorage.upgrade4count = upgrade4count;
		upgcount[3].innerHTML = upgrade4count;
		upgpics[3].innerHTML += "<img class='pic pic4' src='https://image.flaticon.com/icons/svg/2920/2920076.svg'>"
		let newcursor = document.getElementsByClassName("pic4")[upgrade4count - 1];
		newcursor.style.left = upgrade4count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 10;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[4].addEventListener("click", function(){
	if(money >= upgrade5cost){
		money = money - upgrade5cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade5cost = parseInt(upgrade5cost * 1.35);
		upgprice[4].innerHTML = upgrade5cost;
		upgrade5count = upgrade5count + 1;
		localStorage.upgrade5count = upgrade5count;
		upgcount[4].innerHTML = upgrade5count;
		upgpics[4].innerHTML += "<img class='pic pic5' src='https://image.flaticon.com/icons/svg/2920/2920017.svg'>"
		let newcursor = document.getElementsByClassName("pic5")[upgrade5count - 1];
		newcursor.style.left = upgrade5count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 30;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[5].addEventListener("click", function(){
	if(money >= upgrade6cost){
		money = money - upgrade6cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade6cost = parseInt(upgrade6cost * 1.35);
		upgprice[5].innerHTML = upgrade6cost;
		upgrade6count = upgrade6count + 1;
		localStorage.upgrade6count = upgrade6count;
		upgcount[5].innerHTML = upgrade6count;
		upgpics[5].innerHTML += "<img class='pic pic6' src='https://image.flaticon.com/icons/svg/2921/2921870.svg'>"
		let newcursor = document.getElementsByClassName("pic6")[upgrade6count - 1];
		newcursor.style.left = upgrade6count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 100;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[6].addEventListener("click", function(){
	if(money >= upgrade7cost){
		money = money - upgrade7cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade7cost = parseInt(upgrade7cost * 1.35);
		upgprice[6].innerHTML = upgrade7cost;
		upgrade7count = upgrade7count + 1;
		upgcount[6].innerHTML = upgrade7count;
		localStorage.upgrade7count = upgrade7count;
		upgpics[6].innerHTML += "<img class='pic pic7' src='https://image.flaticon.com/icons/svg/862/862828.svg'>"
		let newcursor = document.getElementsByClassName("pic7")[upgrade7count - 1];
		newcursor.style.left = upgrade7count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 1000;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[7].addEventListener("click", function(){
	if(money >= upgrade8cost){
		money = money - upgrade8cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade8cost = parseInt(upgrade8cost * 1.35);
		upgprice[7].innerHTML = upgrade8cost;
		upgrade8count = upgrade8count + 1;
		localStorage.upgrade8count = upgrade8count;
		upgcount[7].innerHTML = upgrade8count;
		upgpics[7].innerHTML += "<img class='pic pic8' src='https://image.flaticon.com/icons/svg/2933/2933835.svg'>"
		let newcursor = document.getElementsByClassName("pic8")[upgrade8count - 1];
		newcursor.style.left = upgrade8count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 6500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[8].addEventListener("click", function(){
	if(money >= upgrade9cost){
		money = money - upgrade9cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade9cost = parseInt(upgrade9cost * 1.35);
		upgprice[8].innerHTML = upgrade9cost;
		upgrade9count = upgrade9count + 1;
		localStorage.upgrade9count = upgrade9count;
		upgcount[8].innerHTML = upgrade9count;
		upgpics[8].innerHTML += "<img class='pic pic9' src='https://image.flaticon.com/icons/svg/1847/1847438.svg'>"
		let newcursor = document.getElementsByClassName("pic9")[upgrade9count - 1];
		newcursor.style.left = upgrade9count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 26500;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[9].addEventListener("click", function(){
	if(money >= upgrade10cost){
		money = money - upgrade10cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade10cost = parseInt(upgrade10cost * 1.35);
		upgprice[9].innerHTML = upgrade10cost;
		upgrade10count = upgrade10count + 1;
		localStorage.upgrade10count = upgrade10count;
		upgcount[9].innerHTML = upgrade10count;
		upgpics[9].innerHTML += "<img class='pic pic10' src='https://image.flaticon.com/icons/svg/2942/2942593.svg'>"
		let newcursor = document.getElementsByClassName("pic10")[upgrade10count - 1];
		newcursor.style.left = upgrade10count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 126500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});
upgbars[10].addEventListener("click", function(){
	if(money >= upgrade11cost){
		money = money - upgrade11cost;
		localStorage.money = money;
		score[0].innerHTML = "DOGES: " + money;
		upgrade11cost = parseInt(upgrade11cost * 1.35);
		upgprice[10].innerHTML = upgrade11cost;
		upgrade11count = upgrade11count + 1;
		localStorage.upgrade11count = upgrade11count;
		upgcount[10].innerHTML = upgrade11count;
		upgpics[10].innerHTML += "<img class='pic pic11' src='https://image.flaticon.com/icons/svg/2010/2010203.svg'>"
		let newcursor = document.getElementsByClassName("pic11")[upgrade11count - 1];
		newcursor.style.left = upgrade11count*10 + "px";
		newcursor.style.top = Math.random() * 60 + "px";
		setInterval(function(){
			money += 526500;
			localStorage.money = money;
			score[0].innerHTML = "DOGES: " + money;
		}, 1000)
	}
});



