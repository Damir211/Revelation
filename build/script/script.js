var slideNow = 1;
var slideCount = $('.slider__block').children().length;

function nextSlide() {
if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
$('.slider__block').css('transform', 'translate(0, 0)');
slideNow = 1;
} else {
translateWidth = -$('.slider').width() * (slideNow);
$('.slider__block').css({
    'transform': 'translate(' + translateWidth + 'px, 0)',
    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
});
slideNow++;
}
}
function prevSlide() {
if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
translateWidth = -$('.slider').width() * (slideCount - 1);
$('.slider__block').css({
    'transform': 'translate(' + translateWidth + 'px, 0)',
    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
});
slideNow = slideCount;
} else {
translateWidth = -$('.slider').width() * (slideNow - 2);
$('.slider__block').css({
    'transform': 'translate(' + translateWidth + 'px, 0)',
    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
});
slideNow--;
}
}
$('.next').click(function() {
nextSlide();
});
$('.prev').click(function() {
prevSlide();
});






$('.slider__close').click(function(){
$(this).parent().fadeToggle();
});
$('.slider__icon').click(function(){
$(this).parent().parent().children().last().fadeToggle();
});
$('.topbar__down').click(function(){
downMenu();
});
$('.topbar__up').click(function(){
upMenu();
});
$(window).resize(function() {
menu();
});
$(window).on('load', function () {
menu();
});
$(window).reload
function menu() {
if ($(window).width() >= 1001) {
 $('.slider__text').fadeIn(0);
 $('.slider__block').css('transform', 'translate(0, 0)');
slideNow = 1;
}else{
 $('.slider__text').fadeOut(0);
$('.slider__block').css('transform', 'translate(0, 0)');
slideNow = 1;
}
if ($(window).width() >= 768){
$('.topbar__up').css('display','none');
$('.topbar__down').css('display','none');
$('.navigation').css('display','flex');
}else{
$('.topbar__up').css('display','none');
$('.topbar__down').css('display','block');
$('.navigation').css('display','none');
}
if ($(window).width() >= 601){
$('.container__down').css('display','none');
$('.container__up').css('display','none');
$('.block__down').css('display','none');
$('.block__up').css('display','none');
$('.container').css('max-height','2000px');
$('.block').css('max-height','2000px');
}else{
$('.container__down').css('display','block');
$('.container__up').css('display','none');
$('.block__down').css('display','block');
$('.block__up').css('display','none');
$('.container').css('max-height','350px');
$('.block').css('max-height','350px');
}
}




function downMenu() {
$('.topbar__up').fadeIn();
$('.topbar__down').fadeOut();
$('.navigation').css('display','flex');
}
function upMenu() {
$('.topbar__up').fadeOut();
$('.topbar__down').fadeIn();
$('.navigation').css('display','none');
}
function downBlock(){
$('.block').animate({maxHeight:'2000px'},1000);
$('.block__down').css('display','none');
$('.block__up').css('display','block');
}
function upBlock(){
$('.block').animate({maxHeight:'350px'},1000);
setTimeout(function(){
$('.block__down').css('display','block');
$('.block__up').css('display','none');},1000);
}
function downContainer(){
$('.container').animate({maxHeight:'2000px'},1000);
$('.container__down').css('display','none');
$('.container__up').css('display','block');
}
function upContainer(){
$('.container').animate({maxHeight:'350px'},1000);
setTimeout(function(){
$('.container__down').css('display','block');
$('.container__up').css('display','none');},1000);
}
$('.container__down').click(function(){
downContainer();
});
$('.container__up').click(function(){
upContainer();
});
$('.block__down').click(function(){
downBlock();
});
$('.block__up').click(function(){
upBlock();
});