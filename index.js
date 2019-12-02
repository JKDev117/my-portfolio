function listenForClick(){   
    $('.burgericon').click(function(){
        $(this).toggleClass("change");
        $('#navLinks').toggle(300);
    });
/*
    $('#JK').click(function(){
        $('header').show();
        $('#contactMe').hide();
        $('#myProjects').hide();
        $('#aboutMe').hide();
    });

    $('#aboutMeClick').click(function(){
        $('#aboutMe').show();
        $('header').hide();
        $('#myProjects').hide();
        $('#contactMe').hide();
    });

    $('#myProjectsClick').click(function(){
        $('#myProjects').show();
        $('header').hide();
        $('#contactMe').hide();
        $('#aboutMe').hide();
    });

    $('#contactMeClick').click(function(){
        $('#contactMe').show();
        $('header').hide();
        $('#myProjects').hide();
        $('#aboutMe').hide();
    });
*/ 
};
   

function start(){
    /*
    $('#aboutMe').hide();
    $('#myProjects').hide();
    $('#contactMe').hide();
    */
    //$('.burgericon').toggleClass("change");
    listenForClick();
}

$(start);