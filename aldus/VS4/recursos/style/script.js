debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
/*
(function () { //evitar conflitos

    var item1 = $('.anime1')
    var item2 = $('.anime2')
    var item3 = $('.anime3')

    animationClass = 'anime_start'  //classe que vai animar

    function animateScroll() {
        var documentTop = $(document).scrollTop()//retorna a localização do top até a atual do scroll
        var itemtop = item1.offset().top
        if (documentTop > itemtop - 500) {
            item1.addClass(animationClass)
            item2.addClass(animationClass)
            item3.addClass(animationClass)
        } else {
            item1.removeClass(animationClass)
            item2.removeClass(animationClass)
            item3.removeClass(animationClass)
        }

    }
    $(document).scroll(debounce(function () {
        animateScroll()
    }, 40))

}()); //fecha e chama a propia função


//Inicio da animação main
setTimeout(function () {
    $('.divaldus').addClass('divaldus_anime')
    $('.logoheader').addClass('logoheader_anime')
}, 2300)

setTimeout(function () {
   
    $('.aldus').addClass('aldus_anime')
},500)


setTimeout(function () {
    $('.divaldus').addClass(('divaldus_anime'))
}, 2500)

setTimeout(function () {
    $('.h1principal').addClass(('h1principal_anime'))
}, 4000)

setTimeout(function () {
    $('.logo').css('transition', 'none')
    $('.h1principal').css('transition', 'none')
    $('.aldus').css('display','none')
}, 10000)
//Fim animação main

//hiden header
function animateHeader() {
    var documentTop = $(document).scrollTop()
    if (documentTop > 10) {
        $('header').addClass('header_anime')
        $('.menu').addClass('menu_anime')
    } else {
        $('header').removeClass('header_anime')
        $('.menu').removeClass('menu_anime')
    }

    if(documentTop > 20){
        $('.whats').addClass('whats_anime')
    }else{
        $('.whats').removeClass('whats_anime')
    }
}
$(document).scroll(debounce(function () {
    animateHeader()
}, 75))
//fim hiden header

/////////////////////////////////////////////System

infoSystem = document.getElementById('infoSystem')
var sys1 = document.getElementsByClassName('system1')[0]
var sys2 = document.getElementsByClassName('system2')[0]
var sys3 = document.getElementsByClassName('system3')[0]
var img  = document.getElementsByClassName('img')[0]
var systemText  = window.document.getElementsByClassName('systemText')[0]

function system1() {
    sys1.style.background = '#3652fe'
   
    sys2.style.background = 'rgb(68, 68, 68)'
    sys3.style.background = 'rgb(68, 68, 68)'
    img.src = 'recursos/img/genio.png'
    $('.system1').addClass('back');
    systemText.innerHTML = "O sistema de gestão empresarial Gênio foi desenvolvimento com base nas necessidades e propostas de nossos clientes. Ele atende os mais variados segmentos empresariais, e proporciona o controle total de sua empresa, desde rotinas operacionais – realizadas no dia-a-dia, até a geração de relatórios de desempenho e apuração de resultados." 
   
}

function system2() {
    sys2.style.background = '#3652fe'
   
    sys1.style.background = 'rgb(68, 68, 68)'
    sys3.style.background = 'rgb(68, 68, 68)'
    img.src = 'recursos/img/cell.png'
    systemText.innerHTML= "Assim como todos os sistemas que desenvolvemos, o GenioMob é um sistema simples e prático. Ele pode ser utilizado tanto em celulares como em tablets, e assim, facilitar o trabalho de colaboradores externos. De forma integrada com o Genio, e permite que consultas e movimentações sejam sincronizadas entre si, evitando o retrabalho e otimizando a rotina de vendas."
   
}

function system3() {
    sys3.style.background = '#3652fe'
    
    sys2.style.background = 'rgb(68, 68, 68)'
    sys1.style.background = 'rgb(68, 68, 68)'
    img.src = 'recursos/img/paf.png'
    systemText.innerText = 'O GenioPaf  é um software desenvolvimento para atender a legislação relacionada ao PAF-ECF (Programa Aplicativo Fiscal - Emissor de Cupom Fiscal). O PAF-ECF se refere a um programa desenvolvido para possibilitar o envio de comandos ao Software Básico do ECF, sem capacidade de alterá-lo ou ignorá-lo, para utilização pelo contribuinte usuário do ECF (cláusula segunda do Convênio ICMS 09/09).'
   
}

function sair1(){
    $('.systemText').removeClass('normalText') 
}

function sair2(){
    $('.systemText').removeClass('normalText') 
}

function sair3(){
    $('.systemText').removeClass('normalText') 
}


//menu mobile////////////////////////////////////////////////////////////////////////////////////////////////

/*const btnMobile = document.getElementsByClassName('hamburger')[0]
const navMenu = document.getElementsByClassName('navMenu')[0]

function toggleMenu(event){
    
btnMobile.classList.toggle('is-active')
navMenu.classList.toggle('is-active')

event.currentTarget.setAttribute('aria-expanded','true')
}

btnMobile.addEventListener('click', toggleMenu)

//whats////////////////////////////////////////////////////
var btnWhats = document.getElementsByClassName('whats')[0]
var container = document.getElementsByClassName('container')[0]
var closee = document.getElementsByClassName('close')[0]

function screenWhats(){
    btnWhats.classList.toggle('active')
    container.classList.toggle('active') 
    setTimeout(function () {
        $('.mensseger1').addClass('mensseger_active')
    }, 1000)
    setTimeout(function () {
        $('.mensseger2').addClass('mensseger_active')
    }, 2500)

    setTimeout(function () {

        $('.ponto1').css('height', '20px')
        $('.ponto1').css('width', '20px')
    }, 100)
    setTimeout(function () {
    
        $('.ponto1').css('height', '10px')
        $('.ponto1').css('width', '10px')
    }, 250)
    
    setTimeout(function () {
    
        $('.ponto2').css('height', '20px')
        $('.ponto2').css('width', '20px')
    }, 260)
    setTimeout(function () {
    
        $('.ponto2').css('height', '10px')
        $('.ponto2').css('width', '10px')
    }, 400)
    
    setTimeout(function () {
    
        $('.ponto3').css('height', '20px')
        $('.ponto3').css('width', '20px')
    }, 420)
    setTimeout(function () {
    
        $('.ponto3').css('height', '10px')
        $('.ponto3').css('width', '10px')
    }, 550)
    
    setTimeout(function () {
    
        $('.ponto1').css('height', '20px')
        $('.ponto1').css('width', '20px')
    }, 570)
    setTimeout(function () {
    
        $('.ponto1').css('height', '10px')
        $('.ponto1').css('width', '10px')
    }, 700)
    
    setTimeout(function () {
    
        $('.ponto2').css('height', '20px')
        $('.ponto2').css('width', '20px')
    }, 720)
    setTimeout(function () {
    
        $('.ponto2').css('height', '10px')
        $('.ponto2').css('width', '10px')
    }, 850)
    
    setTimeout(function () {
    
        $('.ponto3').css('height', '20px')
        $('.ponto3').css('width', '20px')
    }, 870)
    setTimeout(function () {
        $('.ponto3').css('height', '10px')
        $('.ponto3').css('width', '10px')
    }, 1000)
    setTimeout(function () {
        $('.pontos').css('display', 'none')
    }, 1020)
    
}

btnWhats.addEventListener('click',screenWhats)


function close(){
    btnWhats.classList.toggle('active')
    container.classList.toggle('active')
   
}

closee.addEventListener('click',close)
*/
//suporte////////////////////////////////
var clickClose = document.getElementsByClassName('click_close')[0]
var clickSuporte = document.getElementsByClassName('click_suporte')[0]
var suporte = document.getElementsByClassName('suporte')[0]

function suporteAnime(){
    suporte.classList.toggle('suporte_anime')
    clickSuporte.classList.toggle('img_suporte')
    $('.click_close').css('display','block')
}

clickSuporte.addEventListener('click',suporteAnime)

function clickClosefun(){
    suporte.classList.toggle('suporte_anime')
    $('.click_close').css('display','none')
    clickSuporte.classList.toggle('img_suporte')
}
  clickClose.addEventListener('click',clickClosefun)
  
  
  var header_fun = document.getElementsByClassName('header_suporte')[0]
  var header_fun1 = document.getElementsByClassName('header_suporte')[1]
  var img_header_suporte = document.getElementsByClassName('img_header_suporte')[0]
  

  
  function suporteOver(){
    $('.img_header_suporte').addClass('filter_none')
      img_header_suporte.src = 'recursos/img/suporte-tecnico.png'
  }
  function suporteout(){
    $('.img_header_suporte').removeClass('filter_none')
    img_header_suporte.src = 'recursos/img/suporte.png'
}
  
  header_fun.addEventListener('click',suporteAnime)
  header_fun.addEventListener('mouseover',suporteOver)
  header_fun.addEventListener('mouseout',suporteout);
  
  header_fun1.addEventListener('click',suporteAnime)
  header_fun1.addEventListener('mouseover',suporteOver)
  header_fun1.addEventListener('mouseout',suporteout);
  (function () { 
      

    var item1 = $('.divisor')
    var item2 = $('.distancia')
    var item3 = $('.divisor_base')

    animationClass = 'divisor_anime' 
    animationClass2 = 'divisor_base_anime' //classe que vai animar
    
    function animateScroll() {
        var documentTop = $(document).scrollTop()//retorna a localização do top até a atual do scroll
        var itemtop = item2.offset().top

        if (documentTop > itemtop -600) {
            item1.addClass(animationClass)
            item3.addClass(animationClass2)
            $('.h2_container').addClass('h2_container_anime')
        } else {
            item1.removeClass(animationClass)
            item3.removeClass(animationClass2)
            $('.h2_container').removeClass('h2_container_anime')
        }

    }
    $(document).scroll(debounce(function () {
        animateScroll()
    }, 0))

}());

(function () { //evitar conflitos

    var text1 = $('.container_text1')
    

    animationClassText = 'text1_anime' 
    
    
    function animateScrollText() {
        var documentTop = $(document).scrollTop()//retorna a localização do top até a atual do scroll
        var itemtop = text1.offset().top

        if (documentTop > itemtop -600) {
            text1.addClass(animationClassText)
      
        } else {
            text1.removeClass(animationClassText)
    
        }

    }
    $(document).scroll(debounce(function () {
        animateScrollText()
    }, 0))

}());

(function () { 


    function animateScrollHeader() {
        var ScrollTop = $(document).scrollTop()//retorna a localização do top até a atual do scroll
       

        if (ScrollTop > 10) {
            $('header').addClass('header_anime')
      
        } else {
            $('header').removeClass('header_anime')
        }

    }
    $(document).scroll(debounce(function () {
        animateScrollHeader()
    }, 0))

}());
/*
function sizeOfThings(){
    
    
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    
 
    document.querySelector('.screen-size').innerHTML = screenWidth + 'x' +screenHeight;
  
  };
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });
*/


    var olaa = document.getElementsByClassName('configure')[0]
    var aldus = document.getElementsByClassName('aldus')[0]
    var aldus1 = document.getElementsByClassName('aldus')[1]
    var confere = 0
   
    function con() {
        if(confere == 1){
            
            aldus.src = "../img/logo-azul.png"
            aldus1.src = "../img/logo-azul.png"
            $('.aldus').removeClass('aldus_lado')
            confere = 0
        }else{
            aldus.src = "../img/aldus-lado.png"
            aldus1.src = "../img/aldus-lado.png"
            $('.aldus').addClass('aldus_lado')
            confere = 1
        }

    }

    olaa.addEventListener('click',con);
    

(function () { 

     var config_container_button = document.getElementsByClassName('fecha')[0]
     var config_container = document.getElementsByClassName('configure_container')[0]



     function config_hiden(){
        config_container.classList.toggle('configure_container_anime')
     }
     
     config_container_button.addEventListener('click', config_hiden )

     
}());


    

  
  
