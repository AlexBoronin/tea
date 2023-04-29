$(document).ready(function () {
    $('.open-popup-link').magnificPopup({
        type: 'image',
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $("#accordion").accordion();
    $("#accordion").accordion("option", "icons", null);
//

    $('h3').click(function () {
        if ($(this).hasClass('ui-state-active')) {
            $(this).removeClass("ui-accordion-header-active")
                .addClass("ui-accordion-header-collapsed")
                .addClass("ui-corner-all")
                .removeClass("ui-state-active")
                .removeClass('ui-state-focus');
            $(this).attr('aria-selected', 'false');
            $(this).attr('aria-expanded', 'false');
            $(this).attr('tabindex', '-1');
            $(this).next().attr('aria-hidden', "true");
            $(this).next().attr('style', "display: none; height: 95px;");
            $(this).next().removeClass('ui-accordion-content-active');
        } else {
            for (let i = 0; i < $('#accordion').children('h3').length; i++) {
                if ($('#accordion').children('h3').eq(i).hasClass("ui-state-active")) {
                    $('#accordion').children('h3').eq(i).addClass('ui-accordion-header-collapsed').addClass('ui-corner-all').removeClass('ui-state-focus').removeClass('ui-accordion-header-active').removeClass('ui-state-active');
                    $('#accordion').children('h3').eq(i).attr('aria-selected', 'false');
                    $('#accordion').children('h3').eq(i).attr('aria-expanded', 'false');
                    $('#accordion').children('h3').eq(i).attr('tabindex', '-1');
                    $('#accordion').children('h3').eq(i).next().attr('aria-hidden', "true");
                    $('#accordion').children('h3').eq(i).next().attr('style', "display: none; height: 95px;");
                    $('#accordion').children('h3').eq(i).next().removeClass('ui-accordion-content-active');
                }
            }
            $(this).addClass("ui-accordion-header-active").removeClass("ui-accordion-header-collapsed").removeClass("ui-corner-all").addClass("ui-state-active").addClass('ui-state-focus');
            $(this).attr('aria-selected', 'true');
            $(this).attr('aria-expanded', 'true');
            $(this).attr('tabindex', '0');
            $(this).next().attr('aria-hidden', "false");
            $(this).next().attr('style', "height: 95px;");
            $(this).next().addClass('ui-accordion-content-active');
        }

        // $(this).toggleClass("ui-accordion-header-active").toggleClass("ui-accordion-header-collapsed").toggleClass("ui-corner-all").toggleClass("ui-state-active");
        // if (!$(this).attr('aria-selected') && !$(this).attr('aria-expanded')) {
        //     $(this).attr('aria-selected', 'true');
        //     $(this).attr('aria-expanded', 'true');
        //     $(this).attr('tabindex', '0');
        // } else {
        //     $(this).attr('aria-selected', 'false');
        //     $(this).attr('aria-expanded', 'false');
        //     $(this).attr('tabindex', '-1');
        // }
        // if ($(this).next().hasClass('ui-accordion-content-active')) {
        //     $('.btn__ques:after').css('rotate', '180deg');
        //     $(this).next().attr('aria-hidden', "false");
        //     $(this).next().attr('style', "height: 111.391px;");
        // } else {
        //     $(this).next().attr('aria-hidden', "true");
        //     $(this).next().attr('style', "display: none; height: 111.391px;");
        // }
    })

    $('.slider-item').slick({
        autoplay: true,
        autoplaySpeed: 1000
    });

    let form = $('#form');
    let firstName = $('#validationCustom01');
    let lastName = $('#validationCustom02');
    let tel = $('#validationCustom03');
    let country = $('#validationCustom04');
    let index = $('#validationCustom05');
    let addres = $('#validationCustom06');
    let formControls = $('#form .form-control');

    tel.inputmask({"mask": "(999) 999-9999"});
    index.keydown((ev) => {
        if (isNaN(parseInt(ev.key)) && ev.key !== 'Backspace') {
            alert('Только цифры')
            return false;
        }
    });

        form.submit(function (event) {
            event.preventDefault();


            formControls.click(function () {
                $(this).val('').removeClass('text-warning pulse');
            })
            if (!firstName.val() || firstName.val() === 'заполните...') {
                alert(`не заполнено поле ${firstName.prev().text()}`);
                firstName.val('заполните...').addClass('text-warning pulse')
                return;
            }
            if (!lastName.val() || lastName.val() === 'заполните...') {
                alert(`не заполнено поле ${lastName.prev().text()}`);
                lastName.val('заполните...').addClass('text-warning pulse')
                return;
            }
            if (!tel.val() || tel.val() === 'заполните...') {
                alert(`не заполнено поле ${tel.prev().text()}`);
                tel.val('заполните...').addClass('text-warning pulse')
                return;
            }
            if (!country.val() || country.val() === 'заполните...') {
                alert(`не заполнено поле ${country.prev().text()}`);
                country.val('заполните...').addClass('text-warning pulse')
                return;
            }
            if (!index.val() || index.val() === 'заполните...') {
                alert(`не заполнено поле ${index.prev().text()}`);
                index.val('заполните...').addClass('text-warning pulse')
                return;
            } else if (index.val().length !== 6) {
                alert(`индекс - 6 цифр`);
                return;
            }
            if (!addres.val() || addres.val() === 'заполните...') {
                alert(`не заполнено поле ${addres.prev().text()}`);
                addres.val('заполните...').addClass('text-warning pulse')
                return;
            }
            form.addClass('opacity-75').css('position', 'relative');
            $('.success').css('display', 'block');
        });

    $('#cross').click(function () {
        form.removeClass('opacity-75').css('position', 'unset');
        $('.success').css('display', 'none');
        form.trigger('reset');
        $('html, body').animate({scrollTop: 0}, 'fast');
    });

    // formControls.each(function(idx) {
    //
    //     if(!$(this).val() || $(this).val() === 'заполните...'){
    //         // form.hide();
    //         $(this).val('заполните...').addClass('text-warning pulse')
    //     }
    //     if($(this).val() && $(this).val() !== 'заполните...'){
    //         if ($(this).prev().text() === 'Телефон' && ){
    //
    //         }
    //     }
    // });

    // noValid.addClass('w-100 h-100 d-flex justify-content-center align-content-center bg-opacity-50' +
    //     'bg-success-subtle text-warning fs-2 position-relative top-0 start-0 z-3')
    //     .html(`<span>Заполните поле ${$(this).prev().text()}</span>`)
    // if ( $( "input" ).first().val() === "correct" ) {
    //     $( "span" ).text( "Validated..." ).show();
    //     return;
    // }

    // $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    // event.preventDefault();

});