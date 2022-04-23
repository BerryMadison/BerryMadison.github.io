const modalElement = document.getElementById("modalContent")
	var myModal = new bootstrap.Modal(modalElement, {
	  keyboard: false
	})


// setting, getting and check the value of the cookie
function setCookie(cvalue) {
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
	if(sheet == "https://BerryMadison.github.io/public/stylesheet.css") {
		document.getElementById("icon").setAttribute("href", "https://BerryMadison.github.io/images/skull.ico");
		document.getElementById("myPic").setAttribute("src", "https://BerryMadison.github.io/images/me3.jpg");
		document.getElementById("work").style.background = "none";
		document.getElementById("about").style.background = "none";
	} else if(sheet == "https://BerryMadison.github.io/public/future.css") {
		document.getElementById("icon").setAttribute("href", "https://BerryMadison.github.io/images/skullfuture.ico");
		document.getElementById("myPic").setAttribute("src", "https://BerryMadison.github.io/images/steampunkme3.png");
		document.getElementById("content").classList.add("screen");
		document.getElementById("work").style.background = "url('https://BerryMadison.github.io/images/futureneoncity.jpg') center no-repeat";
		document.getElementById("work").style.backgroundSize = "cover";
		document.getElementById("about").style.background = "url('https://BerryMadison.github.io/images/sci-fi-neon.jpg') center no-repeat";
		document.getElementById("about").style.backgroundSize = "cover";
		document.getElementById("content").classList.add("screen");
		document.getElementsByClassName("content")[0].classList.add("screen");
		document.getElementsByClassName("content")[1].classList.add("screen");
	} else {
		document.getElementById("icon").setAttribute("href", "https://BerryMadison.github.io/images/skullspace.ico");
		document.getElementById("myPic").setAttribute("src", "https://BerryMadison.github.io/images/DEDsec2.png");
		document.getElementById("work").style.background = "url('https://BerryMadison.github.io/images/space4.jpg') center no-repeat";
		document.getElementById("work").style.backgroundSize = "cover";
		document.getElementById("about").style.background = "url('https://BerryMadison.github.io/images/space3.jpg') center no-repeat";
		document.getElementById("about").style.backgroundSize = "cover";
	}
}

// Show bigger Image on click
function imagePopUp(e) {
	var imgsrc = document.getElementsByClassName("projectImg")[e].getAttribute("src");
	
	document.getElementById("img").setAttribute("src", imgsrc);
	myModal.show();
}
