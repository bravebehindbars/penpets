/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$('.carousel').carousel({
  interval: 2000
})

let ham = document.getElementsByClassName('slider')[0]
let menu = document.getElementsByClassName('menu')[0]
let navbar = document.getElementsByClassName('nav-bar')[0]
let sliderImg = document.getElementById('slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/students-5.jpg','./img/students-3.jpg','./img/students-4.jpg', './img/students-2.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===4){
        i=0;
    }
}
setInterval(slide,2000)
function showprints(){
	let paws = document.getElementById("Paws")
	if(paws.style.display === "none"){
		paws.style.display = "block";
	}
	else {
		paws.style.display = "none";
	}
	alert ("Click to show/hide paw prints")
}