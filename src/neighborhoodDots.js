var main = function () {

    // controls clicking and hovering over dots on each neighborhood map functionality
 
    $('.Dots circle').click(function() {
        var clickedDot = $(this),
            description = clickedDot.next();
            clickCount = (clickedDot.data("click-count") || 0) + 1;
 
        clickedDot.data("click-count", clickCount);

        $(clickedDot).css('r', '10.25');
        
        if (clickCount % 2 === 0) {
            $(clickedDot).css('r', '7.75');
            $(description).css('display', 'none');
        }
        else {
            $(clickedDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }
    })

    $('.Dots circle').mouseenter(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                clickCount = (hoveredDot.data("click-count") || 0);

            if (clickCount % 2 === 1) {
                return false;
            }

            $(hoveredDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }) 
        
    $('.Dots circle').mouseleave(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                clickCount = (hoveredDot.data("click-count") || 0);

            if (clickCount % 2 === 1) {
                return false;
            }
            
            $(hoveredDot).css('r', '7.75');
            $(description).css('display', 'none');
        })

    // closes pop up panel on main map

    $('#PopUp_Panel .closeButton').click(function() {
        $('#PopUp_Panel').fadeOut(300);
    });

    $(document).bind('keydown', function(e) {
        if (e.which === 27) {
            $('#PopUp_Panel').fadeOut(300);
        }
    });

    // resets neighborhood from past clicks in case you go back to main map and then back to neighborhood

    var resetDoce = function () {
        $('#doce_x3C_Path_2004_x3E__4_').css('display', 'inline');
        $('#doce_x3C_Path_2004_x3E__4_').siblings().css('display', 'none');
        $('#doce_x32_004_2_').css('display', 'inline');  
        $('#doce_x32_005').css('display', 'none'); 
        $('#doce_x32_006').css('display', 'none'); 
        $('#doce_x32_007').css('display', 'none'); 
        $('#doce_x32_008').css('display', 'none'); 
        $('#doce_x32_009').css('display', 'none'); 
        $('#doce_x32_010').css('display', 'none'); 
        $('#doce_x32_011').css('display', 'none'); 
        $('#doce_x32_012').css('display', 'none'); 
        $('#doce_x32_013').css('display', 'none'); 
        $('#doce_x32_014').css('display', 'none');  
        $('#doceDotAndInfo circle').css('display', 'none');
        $('#doceInfoPanel').css('display', 'none');
        $('#doce2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#doce2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetCandelaria = function () {
        $('#candelaria_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#candelaria_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#candelaria_x32_004_2_').css('display', 'inline');  
        $('#candelaria_x32_005').css('display', 'none'); 
        $('#candelaria_x32_006').css('display', 'none'); 
        $('#candelaria_x32_007').css('display', 'none'); 
        $('#candelaria_x32_008').css('display', 'none'); 
        $('#candelaria_x32_009').css('display', 'none'); 
        $('#candelaria_x32_010').css('display', 'none'); 
        $('#candelaria_x32_011').css('display', 'none'); 
        $('#candelaria_x32_012').css('display', 'none'); 
        $('#candelaria_x32_013').css('display', 'none'); 
        $('#candelaria_x32_014').css('display', 'none');  
        $('#candelariaDotAndInfo circle').css('display', 'none');
        $('#candelariaInfoPanel').css('display', 'none');
        $('#candelaria2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#candelaria2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetSanJavier = function () {
        $('#sanJavier_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#sanJavier_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#sanJavier_x32_004_2_').css('display', 'inline');  
        $('#sanJavier_x32_005').css('display', 'none'); 
        $('#sanJavier_x32_006').css('display', 'none'); 
        $('#sanJavier_x32_007').css('display', 'none'); 
        $('#sanJavier_x32_008').css('display', 'none'); 
        $('#sanJavier_x32_009').css('display', 'none'); 
        $('#sanJavier_x32_010').css('display', 'none'); 
        $('#sanJavier_x32_011').css('display', 'none'); 
        $('#sanJavier_x32_012').css('display', 'none'); 
        $('#sanJavier_x32_013').css('display', 'none'); 
        $('#sanJavier_x32_014').css('display', 'none');  
        $('#sanJavierDotAndInfo circle').css('display', 'none');
        $('#sanJavierInfoPanel').css('display', 'none');
        $('#sanJavier2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#sanJavier2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetGuayabal = function () {
        $('#guayabal_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#guayabal_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#guayabal_x32_004_2_').css('display', 'inline');  
        $('#guayabal_x32_005').css('display', 'none'); 
        $('#guayabal_x32_006').css('display', 'none'); 
        $('#guayabal_x32_007').css('display', 'none'); 
        $('#guayabal_x32_008').css('display', 'none'); 
        $('#guayabal_x32_009').css('display', 'none'); 
        $('#guayabal_x32_010').css('display', 'none'); 
        $('#guayabal_x32_011').css('display', 'none'); 
        $('#guayabal_x32_012').css('display', 'none'); 
        $('#guayabal_x32_013').css('display', 'none'); 
        $('#guayabal_x32_014').css('display', 'none');  
        $('#guayabalDotAndInfo circle').css('display', 'none');
        $('#guayabalInfoPanel').css('display', 'none');
        $('#guayabal2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#guayabal2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    // brings user to neighborhood's specific page when they click the outline from the main page

    $('#_x31_2_de_Octubre_14 path').click(function() {
        $('.mainPage').fadeOut(500).css('display', 'none');
        $('.doceDeOctubre').fadeIn(500).css('display', 'inline');
        $('#PopUp_Panel').css('display', 'none'); 
        resetDoce();
    })

    $('#La_Candelaria_14 path').click(function() {
        $('.mainPage').fadeOut(500).css('display', 'none');
        $('.laCandelaria').fadeIn(500).css('display', 'inline'); 
        $('#candelaria_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#PopUp_Panel').css('display', 'none');   
        resetCandelaria();
    })

    $('#San_Javier_14 path').click(function() {
        $('.mainPage').fadeOut(500).css('display', 'none');
        $('.sanJavier').fadeIn(500).css('display', 'inline');
        $('#sanJavier_x3C_Path_2004_x3E_').css('display', 'inline');  
        $('#PopUp_Panel').css('display', 'none'); 
        resetSanJavier();
    })

    $('#Guayabal_14 path').click(function() {
        $('.mainPage').fadeOut(500).css('display', 'none');
        $('.guayabal').fadeIn(500).css('display', 'inline'); 
        $('#guayabal_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#PopUp_Panel').css('display', 'none');
        resetGuayabal();   
    })

    // back to main map

    $('#Return_Button g rect').click(function() {
        $('.doceDeOctubre').fadeOut(500).css('display', 'none');
        $('.laCandelaria').fadeOut(500).css('display', 'none');
        $('.sanJavier').fadeOut(500).css('display', 'none');
        $('.guayabal').fadeOut(500).css('display', 'none');
        $('.mainPage').fadeIn(500).css('display', 'inline');
    })
        
};

$(document).ready(main);
