$(document).ready(function() {

    $('#other_menu div a').click(function(e){
        e.preventDefault();
    });

/*************************************************************************
Indexing: setting ID attributes
***************************************************************************/

//Other Menu: indexing link id > 0 to n for 
    $('#other_menu_wrapper a').each(function(index){
        var i = index;
        var image = $(this).attr("id","link" + i);

    });
//Other Menu: indexing image id 0 to n for main image
    $('#main_image img').each(function(index){
        var i = index;
        var image = $(this).attr("id","main_image" + i);
    });

//Other Menu: Icons: indexing icon id 0 to n for Icon Menu
    $('#icons_menu_wrapper a').each(function(index){
        var i = index;
        var image = $(this).attr("id","icon_small" + i);
    });

//Other Menu: Icons: indexing icon id 0 to n for Icon Menu
    $('#icon_main img').each(function(index){
        var i = index;
        var image = $(this).attr("id","icon_main" + i);
    });
  
/*************************************************************************
Mapping: setting Object literals mapping menu to main exhibit
***************************************************************************/

//object literal mapping other menu to main graphics
    var other_menu_map = {};
    
    for (i=0; i<3; i++){other_menu_map["link"+i] = "main_image"+i;} 
    //for menu link pointing to icons
    other_menu_map["link3"] = "icons_menu" ;

//object literal > mapping icon menu to main icon
    var icon_menu_map = {};

    for (i=0; i<5; i++){
        icon_menu_map["icon_small"+i] = "icon_main"+i;
    } 

    console.log(icon_menu_map);

//icons
function hideAll(){
    $('#icons_menu').hide();
    $('#icon_main').hide();
    $('#main_image img').each(function(index){
        $('#main_image'+index).hide();
    });    
};

function hideMainIcon(){
    $('#icon_main img').each(function(index){
        $('#icon_main'+index).hide();
    });    
};


hideAll();
$('#main_image0').show();

//other_menu
    $('#other_menu_wrapper a').click(function(){
        
        var div_id = other_menu_map[$(this).attr('id')];
        hideAll();
        $('#'+div_id).fadeIn();

        
        if ($(this).attr('id') == "link3") {
            $('#icon_main').fadeIn();
            hideMainIcon();
            $('#icon_main4').fadeIn();
        }
    });

    $('#icons_menu_wrapper a').click(function(){
        hideMainIcon();
        $('#icon_main').show();
        var icon_main_id = icon_menu_map[$(this).attr('id')];
        $('#'+icon_main_id).fadeIn();

        console.log(icon_menu_map[$(this).attr('id')]);
    });

/*************************************************************************
Liquid Layout: responsive structural design
***************************************************************************/
// liquid content

    $(function(){
        var MAX_HEIGHT = 600;
        var min_doc_height = Math.max( ($(document).height()), MAX_HEIGHT);
       
        function min_win_height() {
            return (Math.max( ($(window).height()), MAX_HEIGHT));
        };

    // content liquid view

        $('#intro,#capture,#phplite,#others,#contact').height(min_doc_height);

        $(window).resize(function(){
        $('#intro,#capture,#phplite,#others,#contact').height(min_win_height());
		});

    // position_name liquid view

        $('.position_name').height(.4*min_doc_height);


        $(window).resize(function(){
        $('.position_name').height(0.4*min_win_height());
        });

    // position_capture liquid view

        $('.position_capture').height(.35*min_doc_height);

        $(window).resize(function(){
        $('.position_capture').height(0.35*min_win_height());
        });

    // position_phplite liquid view

        $('.position_phplite').height(.4*min_doc_height);

        $(window).resize(function(){
        $('.position_phplite').height(0.4*min_win_height());
        });

    // push_down

        $('#push_down').height(0.3*min_doc_height);

        $(window).resize(function(){
        $('#push_down').height(0.3*min_win_height());
        });  
    });

/*************************************************************************
Preload images
***************************************************************************/
function loadImages () {
var icon_calendar_small = new Image();
    icon_calendar_small.src = 'images/icon_calendar_color.png' ;

var icon_settings_small = new Image();
    icon_settings_small.src = 'images/icon_settings_color.png' ;

var icon_events_small =  new Image();
    icon_events_small.src = 'images/icon_events_color.png' ;

var icon_location_small = new Image();
    icon_location_small.src = 'images/icon_location_color.png' ;

var icon_search_small = new Image();
    icon_search_small.src = 'images/icon_search_color.png' ;
};

loadImages();

});


/*************************************************************************
LinkedIn
***************************************************************************/


!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src="//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,"script","twitter-wjs");




