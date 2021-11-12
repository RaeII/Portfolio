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

(function () { //evitar conflitos

    

    function animateScrollConhecimento() {
        var item = $('.conhecimento')
        var itemtop = item.offset().top
        var st = $(document).scrollTop()
        var position = itemtop - st  
        


        if ( position < 245 )   {
            item.addClass('luz_cima')
            item.removeClass('luz_cima_perto')
        } 

        if ( position < 238 )   {
            item.addClass('luz_cima_perto')
            item.removeClass('luz_cima')
            item.removeClass('luz_meio')
        } 

        if ( position < 230 )   {
            item.addClass('luz_meio')
            item.removeClass('luz_cima_perto')
            item.removeClass('luz_baixo_perto')
            
        } 

        if ( position < 50)   {
            item.addClass('luz_baixo_perto')
            item.removeClass('luz_meio')
            item.removeClass('luz_baixo')
            
        } 
       
        if ( position < 0 )   {
            item.addClass('luz_baixo')
            item.removeClass('luz_baixo_perto')
        
        } 
    }
    
    $(document).scroll(debounce(function () {
        animateScrollConhecimento()
    }, 0))
}());

(function () {

    

    function animateScrollMain() {
        var item = $('.container_main')
        var itemtop = item.offset().top
        var st = $(document).scrollTop()
        var position = itemtop - st  
        

        /*if ( position < 500 )   {
            item.addClass('luz_cima')
            item.removeClass('luz_cima_perto')
        } 

        if ( position < 300 )   {
            item.addClass('luz_cima_perto')
            item.removeClass('luz_cima')
            item.removeClass('luz_meio')
        }*/

        if ( position > -50 )   {
            item.addClass('luz_meio')
            item.removeClass('luz_cima_perto')
            item.removeClass('luz_baixo_perto')
            item.removeClass('shadow_container_main')
            
        } 

        if ( position < -100)   {
            item.addClass('luz_baixo_perto')
            item.removeClass('luz_meio')
            item.removeClass('luz_baixo')
            item.removeClass('shadow_container_main')
            
        } 
       
        if ( position < -150 )   {
            item.addClass('luz_baixo')
            item.removeClass('luz_baixo_perto')
            item.removeClass('shadow_container_main')
        
        } 
    }
    $(document).scroll(debounce(function () {
        animateScrollMain()
    }, 0))
}());

(function () { //evitar conflitos

    

    function animateScrollItem() {
        var item = $('.item')
        var itemtop = item.offset().top
        var st = $(document).scrollTop()
        var position = itemtop - st  
        

        if ( position < 245 )   {
            item.addClass('luz_cima')
            item.removeClass('luz_cima_perto')
        } 

        if ( position < 238 )   {
            item.addClass('luz_cima_perto')
            item.removeClass('luz_cima')
            item.removeClass('luz_meio')
        } 

        if ( position < 230 )   {
            item.addClass('luz_meio')
            item.removeClass('luz_cima_perto')
            item.removeClass('luz_baixo_perto')
            
        } 

        if ( position < 50)   {
            item.addClass('luz_baixo_perto')
            item.removeClass('luz_meio')
            item.removeClass('luz_baixo')
            
        } 
       
        if ( position < 0 )   {
            item.addClass('luz_baixo')
            item.removeClass('luz_baixo_perto')
        
        } 
    }
    $(document).scroll(debounce(function () {
        animateScrollItem()
    }, 0))
}());

(function () { //evitar conflitos

    

    function animateScrollJob() {
        var item = $('.job')
        var itemtop = item.offset().top
        var st = $(document).scrollTop()
        var position = itemtop - st  
        
        if ( position > 300 )   {
            item.addClass('g75')
            item.removeClass('g70')
           
        }  

        if ( position < 285 )   {
            item.addClass('g75')
            item.removeClass('g70')
           
        }  

        if ( position < 275 )   {
            item.addClass('g70')
            item.removeClass('g75')
            item.removeClass('g65')
        }

        if ( position < 265)   {
            item.addClass('g65')
            item.removeClass('g70')
            item.removeClass('g60')
            
        } 

        if ( position < 255)   {
            item.addClass('g60')
            item.removeClass('g65')
            item.removeClass('g55')
            
        } 
       
        if ( position < 245 )   {
            item.addClass('g55')
            item.removeClass('g60')
            item.removeClass('g50')
        } 
        
        if ( position < 230 )   {
            
            item.addClass('g50')
            item.removeClass('g55')
            item.removeClass('g45')
         
        } 

        if ( position < 200)   {
            
            item.addClass('g45')
            item.removeClass('g50')
            item.removeClass('g40')
            
        }
        
        if ( position < -30)   {
            
            item.addClass('g40')
            item.removeClass('g45')
            item.removeClass('g35')
        }

        if ( position < -50)   {
            
            item.addClass('g35')
            item.removeClass('g40')
        }
    }
    $(document).scroll(debounce(function () {
        animateScrollJob()
    }, 0))
}());



//Desativar scroll ao inciar
function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
}
unloadScrollBars();
