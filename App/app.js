// script.js
//clima 

$(document).ready(function () {

    function animateImageOnLoad(element) {
        element.animate({ opacity: 1 }, 1000);
    }

    function animateImageOnHover(element) {
        element.hover(
            function () {
                // Mueve la imagen hacia arriba al hacer hover
                $(this).animate({ marginTop: '-10px' }, 'fast');
            },
            function () {
                // Restaura la posición original al quitar el hover
                $(this).animate({ marginTop: '0px' }, 'fast');
            }
        );
    }

    function animateImageWithBorder(element) {
        element.hover(
            function () {
                // Al pasar el mouse
                $(this).css({
                    'border': '2px solid white',
                    'transform': 'scale(1.05)',
                    'transition': 'all 0.3s ease'
                });
            },
            function () {
                // Al salir del hover
                $(this).css({
                    'border': 'none',
                    'transform': 'scale(1)',
                    'transition': 'all 0.3s ease'
                });
            }
        );
    }


    function animateImagesLeftRight(element) {
        element.each(function () {
            $(this).animate({ marginLeft: '10px' }, 'slow');
            $(this).animate({ marginLeft: '0px' }, 'slow');
        });

        element.hover(
            function () {
                $(this).animate({ marginLeft: '10px' }, 'fast');
            },
            function () {
                $(this).animate({ marginLeft: '0px' }, 'fast');
            }
        );
    }

    // Animaciones en la carga
    animateImageOnLoad($('.img-header img'));
    animateImageOnLoad($('.razonesdes img, .img-footer'));

    // Animaciones en el hover
    animateImageOnHover($('.razonesdes img, .img-footer'));
    animateImageWithBorder($('.menuCate img'));
    animateImagesLeftRight($('.img-fluid'));

    // Animaciones en la carga para misión y visión
    animateImageOnLoad($('.img-mision'));
    animateImageOnLoad($('.img-vision'));

    // Animaciones en el hover para misión y visión
    animateImageOnHover($('.img-mision'));
    animateImageOnHover($('.img-vision'));

    // Animaciones en la carga y en el hover para el equipo de trabajo
    animateImagesLeftRight($('.img-equipo'));
    animateImageOnHover($('.img-equipo'));

});
