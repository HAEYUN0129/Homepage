
var slides = document.querySelectorAll("#slides > img");
var current = 0;

showSlides(current);
setInterval(function() {
    current++;
    showSlides(current); // 매개 변수를 전달하여 함수 호출
}, 3000);

function clickSlides(n) {
    current += n;
    showSlides(current);
}

function showSlides(n){
    if (n > slides.length - 1){
        n = 0;
    }else if (n < 0){
        n = slides.length - 1;
    }
    current = n;
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; //*모든 이미지를 화면에서 감춤 
    }
    slides[n].style.display = "block"; //*n번째 이미지만 화면에 표시 
}


