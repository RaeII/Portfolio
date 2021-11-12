debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};




//luz/////////////////////////////////
(function() {
    var interruptor = document.getElementsByClassName('area_evento')[0]

    var lamp = document.getElementsByClassName('lamp')[0]

    function light() {

        if ($('.lamp').hasClass('lampOn')) {
            $('.tecla1').removeClass('tecla_anime')
            lamp.src = "img/off.png"
            $('.lamp').removeClass('lampOn')
            $('.container_main').removeClass('luz_meio')
            $('.container_main').removeClass('luz_baixo')
            $('.container_main').removeClass('luz_baixo_perto')
            $('.container_main').removeClass('shadow_container_main')

            $('.conhecimento').removeClass('luz_meio')
            $('.conhecimento').removeClass('luz_baixo')
            $('.conhecimento').removeClass('luz_baixo_perto')
            $('.conhecimento').removeClass('luz_cima')
            $('.conhecimento').removeClass('luz_cima_perto')
            $('.conhecimento').removeClass('shadow_conhecimento')

            $('.item').removeClass('luz_meio')
            $('.item').removeClass('luz_baixo')
            $('.item').removeClass('luz_baixo_perto')
            $('.item').removeClass('luz_cima')
            $('.item').removeClass('luz_cima_perto')
            $('.item').removeClass('shadow_item')

            $('.item').addClass('opacy0-1')


            $('.back_anime').removeClass('opacy0-1')

            $('.item').removeClass('shadow_item')
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";
            $('.nope').css('display', 'block')
        } else {
            $('.tecla1').addClass('tecla_anime')
            lamp.src = "img/on.png"
            $('.lamp').addClass('lampOn')
            $('.container_main').addClass('shadow_container_main')
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes";
            $('.nope').css('display', 'none')
            $('.conhecimento').addClass('shadow_conhecimento')
            $('.item').addClass('shadow_item')
            $('.back_anime').addClass('opacy0-1')
            $('.item').removeClass('opacy0-1')
        }

    }
    interruptor.addEventListener('click', light)
}());

//SLIDE////////////////////////////////////////////////////
(function() {
    var ifc = document.getElementsByClassName('item')[0]
    var php = document.getElementsByClassName('item')[1]
    var html = document.getElementsByClassName('item')[2]
    var css = document.getElementsByClassName('item')[3]
    var js = document.getElementsByClassName('item')[4]
    var data = document.getElementsByClassName('item')[5]
    var linux = document.getElementsByClassName('item')[6]

    function slide1() {
        $('.container_slide').css('margin-left', '-950px')
    }


    function slide2() {
        $('.container_slide').css('margin-left', '-1900px')
    }

    function slide3() {
        $('.container_slide').css('margin-left', '-2850px')
    }


    function slide4() {
        $('.container_slide').css('margin-left', '-3800px')
    }


    function slide5() {
        $('.container_slide').css('margin-left', '-4750px')
    }


    function slide6() {
        $('.container_slide').css('margin-left', '-5700px')
    }


    function slide7() {
        $('.container_slide').css('margin-left', '-6650px')
    }
    ifc.addEventListener('click', slide1)
    php.addEventListener('click', slide2)
    html.addEventListener('click', slide3)
    css.addEventListener('click', slide4)
    js.addEventListener('click', slide5)
    data.addEventListener('click', slide6)
    linux.addEventListener('click', slide7)

}());

(function() {
    var ifc = document.getElementsByClassName('item')[0]
    var php = document.getElementsByClassName('item')[1]
    var html = document.getElementsByClassName('item')[2]
    var css = document.getElementsByClassName('item')[3]
    var js = document.getElementsByClassName('item')[4]
    var data = document.getElementsByClassName('item')[5]
    var linux = document.getElementsByClassName('item')[6]

    var img_ifc = document.getElementsByClassName('item_img')[0]
    var img_php = document.getElementsByClassName('item_img')[1]
    var img_html = document.getElementsByClassName('item_img')[2]
    var img_css = document.getElementsByClassName('item_img')[3]
    var img_js = document.getElementsByClassName('item_img')[4]
    var img_data = document.getElementsByClassName('item_img')[5]
    var img_linux = document.getElementsByClassName('item_img')[6]


    function item1() {
        ifc.classList.add('item_hover')
        php.classList.remove('item_hover')
        html.classList.remove('item_hover')
        css.classList.remove('item_hover')
        js.classList.remove('item_hover')
        data.classList.remove('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }


    function item2() {
        ifc.classList.remove('item_hover')
        php.classList.add('item_hover')
        html.classList.remove('item_hover')
        css.classList.remove('item_hover')
        js.classList.remove('item_hover')
        data.classList.remove('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }

    function item3() {
        ifc.classList.remove('item_hover')
        php.classList.remove('item_hover')
        html.classList.add('item_hover')
        css.classList.remove('item_hover')
        js.classList.remove('item_hover')
        data.classList.remove('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }


    function item4() {
        ifc.classList.remove('item_hover')
        php.classList.remove('item_hover')
        html.classList.remove('item_hover')
        css.classList.add('item_hover')
        js.classList.remove('item_hover')
        data.classList.remove('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }


    function item5() {
        ifc.classList.remove('item_hover')
        php.classList.remove('item_hover')
        html.classList.remove('item_hover')
        css.classList.remove('item_hover')
        js.classList.add('item_hover')
        data.classList.remove('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }


    function item6() {
        ifc.classList.remove('item_hover')
        php.classList.remove('item_hover')
        html.classList.remove('item_hover')
        css.classList.remove('item_hover')
        js.classList.remove('item_hover')
        data.classList.add('item_hover')
        linux.classList.remove('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }


    function item7() {
        ifc.classList.remove('item_hover')
        php.classList.remove('item_hover')
        html.classList.remove('item_hover')
        css.classList.remove('item_hover')
        js.classList.remove('item_hover')
        data.classList.remove('item_hover')
        linux.classList.add('item_hover')

        $('.item').removeClass('luz_meio')
        $('.item').removeClass('luz_baixo')
        $('.item').removeClass('luz_baixo_perto')
        $('.item').removeClass('luz_cima_perto')
        $('.item').removeClass('luz_cima')

    }

    ifc.addEventListener('click', item1)
    php.addEventListener('click', item2)
    html.addEventListener('click', item3)
    css.addEventListener('click', item4)
    js.addEventListener('click', item5)
    data.addEventListener('click', item6)
    linux.addEventListener('click', item7)

}());


///JOB///////////////////////////////////////////////////
(function() { //evitar conflitos



    function animateJob() {
        var item = $('.job')
        var itemtop = item.offset().top
        var st = $(document).scrollTop()



        if ((itemtop - st) < 600) {
            item.addClass('job_anime')

        }


    }
    $(document).scroll(debounce(function() {
        animateJob()
    }, 0))
}());

$("url").click(function(){
    $(this).select();

    document.execCommand('copy');
  })


//////////////////////////////////////////////////////
(function () { 



function lampFixed() {
    var item = $('.job')
    var itemtop = item.offset().top
    var st = $(document).scrollTop()
    var position = itemtop - st

    if (position < -320) {
        $('.divLamp').addClass('lampOff')
        $('.container_interruptor').addClass('interruptorOff')
    } else {
        $('.divLamp').removeClass('lampOff')
        $('.container_interruptor').removeClass('interruptorOff')
    }


}

$(document).scroll(debounce(function() {
    lampFixed()
}, 0))
}());