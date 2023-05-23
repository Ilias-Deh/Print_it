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
let dots = document.querySelectorAll(".dot")
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let position = 0;

function next () {	
	dots[position].classList.toggle("dot_selected");
	if (position < slides.length-1){
		position++
	} else {
		position = 0
	}
	changeSlide(slides[position])
}

function previous () {
	dots[position].classList.toggle("dot_selected");
	if (position > 0){
		position--
	} else {
		position = slides.length-1
	}
	changeSlide(slides[position])
}

function changeSlide (slide) {
	dots[position].classList.toggle("dot_selected");
	bannerImage.src = "./assets/images/slideshow/" + slide.image
	bannerText.innerHTML = slide.tagLine
}

arrowLeft.addEventListener("click",  () =>{
	previous(position)
});

arrowRight.addEventListener("click",  () =>{
	next(position)
});
