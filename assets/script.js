const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let bannerImage = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p")

let dot_0 = document.getElementById("dot_0")
let dot_1 = document.getElementById("dot_1")
let dot_2 = document.getElementById("dot_2")
let dot_3 = document.getElementById("dot_3")

dots = [dot_0,dot_1,dot_2,dot_3]


let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let i = 0;




function suivant () {

	
	if (i < slides.length-1){
		dots[i].classList.remove("dot_selected");
		i++
		dots[i].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[i].image
		bannerText.innerHTML = slides[i].tagLine
	} else {
		dots[i].classList.remove("dot_selected");
		i = 0
		dots[i].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[i].image
		bannerText.innerHTML = slides[i].tagLine
		}
	}

function precedent () {

	
	if (i > 0){
		dots[i].classList.remove("dot_selected");
		i--
		dots[i].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[i].image
		bannerText.innerHTML = slides[i].tagLine
	} else {
		dots[i].classList.remove("dot_selected");
		i = 3
		dots[i].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[i].image
		bannerText.innerHTML = slides[i].tagLine
	}
}


arrowLeft.addEventListener("click",  () =>{
	console.log("Vous avez cliqué sur le bouton gauche")
	precedent(i)
});


arrowRight.addEventListener("click",  () =>{
	console.log("Vous avez cliqué sur le bouton droit")
	suivant(i)
});
