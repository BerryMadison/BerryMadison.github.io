const modalElement = document.getElementById("modalContent")
	var myModal = new bootstrap.Modal(modalElement, {
	  keyboard: false
	})


// setting, getting and check the value of the cookie
function setCookie(cvalue) {
	const d = new Date();
	document.cookie ="style=" + cvalue + ";" + "SameSite=none";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	let style = getCookie("style");
	if (style != "") {
		changeStyle(style);
	} else {
		style = document.getElementById("pagestyle").getAttribute("href");
		console.log(style);
		setCookie(style);
    }
}


// Changes the stylesheet of the page
function changeStyle(sheet) {
	document.getElementById("pagestyle").setAttribute("href", sheet);
	setCookie(sheet);
	if(sheet == "stylesheet.css") {
		document.getElementById("icon").setAttribute("href", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/skullmain.ico");
		document.getElementById("myPic").setAttribute("src", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/me3.jpg");
		document.getElementById("work").style.background = "none";
		document.getElementById("about").style.background = "none";
	} else if(sheet == "future.css") {
		document.getElementById("icon").setAttribute("href", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/skullfuture.ico");
		document.getElementById("myPic").setAttribute("src", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/steampunkme3.png");
		document.getElementById("content").classList.add("screen");
		document.getElementById("work").style.background = "url('https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/futureneoncity.jpg') center no-repeat";
		document.getElementById("work").style.backgroundSize = "cover";
		document.getElementById("about").style.background = "url('https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/sci-fi-neon.jpg') center no-repeat";
		document.getElementById("about").style.backgroundSize = "cover";
		document.getElementById("content").classList.add("screen");
		document.getElementsByClassName("content")[0].classList.add("screen");
		document.getElementsByClassName("content")[1].classList.add("screen");
	} else if(sheet == "space.css") {
		document.getElementById("icon").setAttribute("href", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/skullspace.ico");
		document.getElementById("myPic").setAttribute("src", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/DEDsec2.png");
		document.getElementById("work").style.background = "url('https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/space4.jpg') center no-repeat";
		document.getElementById("work").style.backgroundSize = "cover";
		document.getElementById("about").style.background = "url('https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/space3.jpg') center no-repeat";
		document.getElementById("about").style.backgroundSize = "cover";
	} else {
		document.getElementById("myPic").setAttribute("src", "https://github.com/BerryMadison/BerryMadison.github.io/blob/main/images/me2.jpg");
	}
}

// Show bigger Image on click
function imagePopUp(e) {
	var imgsrc = document.getElementsByClassName("projectImg")[e].getAttribute("src");
	
	document.getElementById("img").setAttribute("src", imgsrc);
	myModal.show();
}
