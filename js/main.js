setTimeout(() => {
	// Create OverLay page
	let myOverLay = document.createElement("div");
	myOverLay.className = "over-lay";
	document.body.appendChild(myOverLay);
	// Create ads
	let myPupsAds = document.createElement("div");
	myPupsAds.className = "popus-ads";
	let myHeading = document.createElement("h3");
	myHeading.textContent = "Get Discount -40% for first order";
	myHeading.className = "popus-heding";
	myPupsAds.appendChild(myHeading);
	let popusInput = document.createElement("input");
	popusInput.type = "email";
	popusInput.className = "popus-input";
	popusInput.placeholder = "your amail";
	myPupsAds.appendChild(popusInput);
	let buttonPopus = document.createElement("button");
	buttonPopus.textContent = "Send";
	myPupsAds.appendChild(buttonPopus);
	// Create close button
	let closeButton = document.createElement("i");
	closeButton.className = "fas fa-close";
	closeButton.addEventListener("click", (e) => {
		e.target.parentNode.remove();
		document.querySelector(".over-lay").remove();
	});
	myPupsAds.appendChild(closeButton);
	document.body.appendChild(myPupsAds);
}, 10000);

// Satrt Login And Register Acount
console.log(document.querySelector(".fa-arrow-right"));
let loginForm = document.querySelector("#login-form");
loginForm.addEventListener("click", () => {
	document.querySelector("#register").classList.remove("active");
	document.querySelector("#myacount").classList.toggle("active");
	document.querySelectorAll(".hidden").forEach((el) => {
		el.classList.toggle("hidden-all");
	});
	document.querySelector("#myacount").style.opacity = 1;
});
const closeForm = document.querySelector(".closeF");
closeForm.addEventListener("click", () => {
	document.querySelector("#myacount").classList.remove("active");
	document.querySelectorAll(".hidden").forEach((el) => {
		el.classList.remove("hidden-all");
	});
});
//------------------------------------------------------
let RegisterForm = document.querySelector("#Register-form");
RegisterForm.addEventListener("click", () => {
	document.querySelector("#myacount").classList.remove("active");
	document.querySelector("#register").classList.toggle("active");
	document.querySelectorAll(".hidden").forEach((el) => {
		el.classList.toggle("hidden-all");
	});
	document.querySelector("#register").style.opacity = 1;
});
const closeForm_2 = document.querySelector(".closeF-2");
closeForm_2.addEventListener("click", () => {
	document.querySelector("#register").classList.remove("active");
	document.querySelectorAll(".hidden").forEach((el) => {
		el.classList.remove("hidden-all");
	});
});
document.querySelectorAll(".container").forEach((el) => {
	el.classList.remove("active-opacity");
});

//-------------------------------------------------------
let crAcount = document.querySelector("#register-acount");
crAcount.addEventListener("click", () => {
	document.querySelector("#myacount").classList.remove("active");
	document.querySelector("#register").classList.toggle("active");
});
//-------------------------------------------------------
let lgAcount = document.querySelector("#login-acount");
lgAcount.addEventListener("click", () => {
	document.querySelector("#register").classList.remove("active");
	document.querySelector("#myacount").classList.toggle("active");
});
// End Login And Register Acount

let AddToCart = document.querySelectorAll(".add");
let myArray = [];
let myvar = document.querySelector("#cart-add");
let myNumCart = document.querySelector(".cart");
let myhCart = document.createElement("h3");
let checkout = document.createElement("a");
checkout.textContent = "checkout";
checkout.className = "btn";
checkout.href = "./otherPge/cart.html";
let checkoutDiv = document.createElement("div");
checkoutDiv.className = "checkout-div";
let removeProduct;
if (document.querySelector(".cart").textContent == 0) {
	myhCart.innerHTML = "this cart is empty";
	//myhCart.style.padding = "20px 20px";
	myhCart.className = "remove";
	myhCart.style.textAlign = "center";
	myvar.appendChild(myhCart);
}
function AddToCartFun() {
	// ------------------Create My Cart ------------------
	let flx = document.createElement("div");
	flx.className = "flx";
	let myimg = document.createElement("img");
	let myH = document.createElement("h3");
	let prices = document.createElement("h4");
	prices.className = "price-product";
	let QNts = document.createElement("h4");
	let trach = document.createElement("i");

	trach.className = "fa fa-trash remove-product";
	if (myArray !== "") {
		for (let i = 0; i < myArray.length; i++) {
			myimg.src = myArray[i].image;
			myH.textContent = myArray[i].name;
			prices.textContent = myArray[i].price;
			QNts.textContent = myArray[i].Qnt;
			flx.appendChild(myimg);
			flx.appendChild(myH);
			flx.appendChild(prices);
			flx.appendChild(QNts);
			flx.appendChild(trach);
			myvar.appendChild(flx);
			//myArray[i].remove();
		}
	}
	// ------------------ ------------------
	checkoutDiv.appendChild(checkout);
	myvar.appendChild(checkoutDiv);
	myNumCart.textContent = document.querySelectorAll(".flx").length;
	removeProduct = document.querySelectorAll(".remove-product");
	removeProduct.forEach((el) => {
		el.addEventListener("click", () => {
			el.parentElement.remove(this);
			myNumCart.textContent = document.querySelectorAll(".flx").length;
			if (document.querySelector(".cart").textContent == 0) {
				if (document.querySelector(".remove") == null) {
					myvar.appendChild(myhCart);
					myvar.removeChild(checkoutDiv);
				}
			}
			//
		});

		let myR = document.querySelectorAll(".flx");
	});

	//--------------------------------
}
function adding(e) {
	e.textContent = "In Cart";
	e.disabled = true;
	e.style.backgroundColor = "white";
	e.style.color = "var(--main-color)";
	//------------------------------
	if (document.querySelector(".cart").textContent !== 0) {
		if (document.querySelector(".remove") !== null) {
			myvar.removeChild(myhCart);
		}
	}
}
AddToCart.forEach((e) => {
	e.addEventListener("click", () => {
		// Start Check Items in Local Storage
		myItemsStorage = localStorage.getItem("product");

		// End Check Items in Local Storage
		//Style Btn Add cart after Click
		adding(e);

		let b = e.parentElement.parentElement.parentElement.firstElementChild;
		let nameProduct = e.parentElement.parentElement.firstElementChild;
		let price =
			nameProduct.nextElementSibling.nextElementSibling.firstElementChild
				.nextElementSibling;

		////////////////////////
		let qnt =
			nameProduct.nextElementSibling.nextElementSibling.nextElementSibling
				.nextElementSibling.firstElementChild.nextElementSibling.value;

		let myOb = {
			image: b.src,
			name: nameProduct.textContent,
			price: price.textContent,
			Qnt: qnt,
		};
		myArray.push(myOb);
		localStorage.setItem("product", myArray);
		// ------------------Create My Cart ------------------
		AddToCartFun();
		//--------------------------------
	});
});

// Liks product
document.querySelectorAll(".liks").forEach((e) => {
	e.addEventListener("click", () => {
		e.classList.toggle("liksRed");
		document.querySelector(".wish").textContent =
			document.querySelectorAll(".liksRed").length;
	});
});

//Section Product
document.querySelector(".top-product").addEventListener("click", () => {
	document.querySelector(".top-pro").classList.remove("hidden-all-pro");
	document.querySelector(".fashion-product").classList.add("hidden-all-pro");
	document.querySelector(".electro-product").classList.add("hidden-all-pro");
	document.querySelector(".books-product").classList.add("hidden-all-pro");
});
document.querySelector(".Elctro").addEventListener("click", () => {
	document.querySelector(".top-pro").classList.add("hidden-all-pro");
	document.querySelector(".fashion-product").classList.add("hidden-all-pro");
	document.querySelector(".books-product").classList.add("hidden-all-pro");
	document.querySelector(".electro-product").classList.remove("hidden-all-pro");
});
document.querySelector(".Books").addEventListener("click", () => {
	document.querySelector(".top-pro").classList.add("hidden-all-pro");
	document.querySelector(".fashion-product").classList.add("hidden-all-pro");
	document.querySelector(".electro-product").classList.add("hidden-all-pro");
	document.querySelector(".books-product").classList.remove("hidden-all-pro");
});
document.querySelector(".Fashion").addEventListener("click", () => {
	document.querySelector(".books-product").classList.add("hidden-all-pro");
	document.querySelector(".top-pro").classList.add("hidden-all-pro");
	document.querySelector(".electro-product").classList.add("hidden-all-pro");
	document.querySelector(".fashion-product").classList.remove("hidden-all-pro");
});

// Start Slider Top
const myImage = document.querySelector(".slider-image .info-box img");
const myHeading = document.querySelector(".slider-image .info-box .box h3");
const myPragraph = document.querySelector(".slider-image .info-box .box p");
const myLinks = document.querySelector(".slider-image .info-box .box a");

let myObjSlider = [
	{
		title: "Avilable",
		image: "./img/s2.png",
		info: "dolorem repudiandae! Quis asperiores dolorem, suscipit pariatur totam",
		link: "Learn more",
	},
	{
		title: "Learn more",
		image: "./img/s3.png",
		info: "dolorem repudiandae! Quis asperiores dolorem, suscipit pariatur totam",
		link: "Shop Now",
	},
	{
		title: "Layouts",
		image: "./img/s4.png",
		info: "aspernatur non placeat assumenda maiores accusantium",
		link: "Learn more",
	},
	{
		title: "Shop Now",
		image: "./img/s5.png",
		info: "dolorem repudiandae! Quis asperiores dolorem, suscipit pariatur totam",
		link: "Elorchi About",
	},
	{
		title: "Shop Now",
		image: "./img/s1.png",
		info: "aspernatur non placeat assumenda maiores accusantium",
		link: "Shop Now",
	},
];
let myCount;
setInterval(() => {
	myCount = Math.floor(Math.random() * myObjSlider.length);
	myImage.src = myObjSlider[myCount].image;
	myHeading.textContent = myObjSlider[myCount].title;
	myPragraph.textContent = myObjSlider[myCount].info;
	myLinks.textContent = myObjSlider[myCount].link;
}, 5000);

// function SliderImg(){

// }
// End Slider Top

let myArrayTwo = [];
let myObTwo;
let myProduct = document.querySelectorAll(".cat-col-2 .product-list");
console.log(myProduct);
myProduct.forEach((e) => {});

console.log(myArrayTwo);

document.querySelectorAll(".cart-Two").forEach((e) => {
	e.addEventListener("click", () => {
		let el = e.parentElement.parentElement;
		let imageT = el.firstElementChild;
		let nameT = imageT.nextElementSibling.firstElementChild.textContent;
		let priceT = imageT.nextElementSibling.nextElementSibling.firstElementChild;
		let QNtsT = priceT.nextElementSibling.nextElementSibling.value;
		myObTwo = {
			image: imageT.src,
			name: nameT,
			price: priceT.textContent,
			Qnt: QNtsT,
		};
		myArray.push(myObTwo);
		console.log(myArray);
		AddToCartFun();
	});
});

window.onscroll = () => {
	if (window.scrollY >= 1800) {
		document.querySelector(".to-top").style.display = "block";
	} else {
		document.querySelector(".to-top").style.display = "none";
	}
};

// ------------------------------------------

//  TESTIMONIALS CAROUSEL HOOK
var cards = $("#card-slider .slider-item").toArray();

startAnim(cards);

function startAnim(array) {
	if (array.length >= 4) {
		TweenMax.fromTo(
			array[0],
			0.5,
			{ x: 0, y: 0, opacity: 0.75 },
			{
				x: 0,
				y: -120,
				opacity: 0,
				zIndex: 0,
				delay: 0.03,
				ease: Cubic.easeInOut,
				onComplete: sortArray(array),
			}
		);

		TweenMax.fromTo(
			array[1],
			0.5,
			{ x: 79, y: 125, opacity: 1, zIndex: 1 },
			{
				x: 0,
				y: 0,
				opacity: 0.75,
				zIndex: 0,
				boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
				ease: Cubic.easeInOut,
			}
		);

		TweenMax.to(array[2], 0.5, {
			bezier: [
				{ x: 0, y: 250 },
				{ x: 65, y: 200 },
				{ x: 79, y: 125 },
			],
			boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
			zIndex: 1,
			opacity: 1,
			ease: Cubic.easeInOut,
		});

		TweenMax.fromTo(
			array[3],
			0.5,
			{ x: 0, y: 400, opacity: 0, zIndex: 0 },
			{ x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
		);
	} else {
		$("#card-slider").append(
			"<p>Sorry, carousel should contain more than 3 slides</p>"
		);
	}
}

function sortArray(array) {
	clearTimeout(delay);
	var delay = setTimeout(function () {
		var firstElem = array.shift();
		array.push(firstElem);
		return startAnim(array);
	}, 3000);
}
