
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
 
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
   
  }



  var percentage=document.getElementById('percentage');
var max=document.documentElement.scrollHeight;
	function func1(){
        console.log('func1');
		if(window.pageYOffset==0){
			percentage.innerText='';
			return;
		}
        var percent2=Math.round(((window.pageYOffset+window.innerHeight)/max)*100);
        percentage.innerText=percent2+'% Viewed';
          
	}


  var as=document.getElementsByClassName('list-item');
var amount=0;

function func(event){
	event.preventDefault();
	var str=this.getAttribute('data-value');
	var temp=document.getElementById(str);
	var limit=temp.offsetTop;
	var id=setInterval(function (){
	if(amount>limit){
		clearInterval(id);
        amount=0;
         
		return;

	}
	window.scrollBy(0,20);
	amount+=20;
	
}
,5);
}


for(let i=0;i<as.length;i++){
	as[i].addEventListener('click',func);
}











window.addEventListener('scroll',func1);