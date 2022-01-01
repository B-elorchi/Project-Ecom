// Satrt Login And Register Acount
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
checkout.href = "./cart.html";
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

AddToCart.forEach((e) => {
	e.addEventListener("click", () => {
		// Start Check Items in Local Storage
		myItemsStorage = localStorage.getItem("product");
		if (myItemsStorage == "") {
			console.log("Local Storage is Empty");
		} else {
			var ap = localStorage.getItem("product");
			console.log(`Note Empty :${ap.length}`);
		}
		// End Check Items in Local Storage
		//Style Btn Add cart after Click
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
		console.log(myArray, myArray.length);
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
				console.log(el);
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
      console.log(myR);
		});
		console.log(document.querySelectorAll(".flx").length);
		//--------------------------------
	});
});

// Liks product
document.querySelectorAll(".liks").forEach((e) => {
	e.addEventListener("click", () => {
		e.classList.toggle("liksRed");
		document.querySelector(".wish").textContent =
			document.querySelectorAll(".liksRed").length;
		console.log(document.querySelectorAll(".liksRed").length);
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
	console.log(document.querySelector(".books-product"));
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
	console.log(myCount);
}, 5000);

// function SliderImg(){

// }
// End Slider Top
