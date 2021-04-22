//슬릭구현
$(document).ready(function(){
    //메인슬라이더
    $('.mainImg').slick({
        dots:true,
        prevArrow:$('.prev'),
        nextArrow:$('.next'),
        autoplay:true, //자동으로 넘어감
        autoplaySpeed:500, //몇초만에 넘어갈지
        pauseOnHover:false,
    })
    
    $('.pauseBtn').click(function(){
        $('.pauseBtn').toggleClass('play');
        if($('.pauseBtn').hasClass('play')){//만약에 퍼즈버튼이라는 아이에게 플레이라는 클레스가 있다면?
            $('.mainImg').slick('slickPause'); //슬릭을 멈춘다.
        }else if(!$('.pauseBtn').hasClass('play')){ //또는 퍼즈버튼이 play라는 클레스가 없다면?
            $('.mainImg').slick('slickPlay') //슬릭을 재생한다.
        } 
    })
    
    //wow
    new WOW().init();
    
})