window.load = roundedCorners('.round');jQuery(window).load(function(){
 initQuickLinks(); jQuery('.round').find('img').css( { opacity: 0 }); roundedCorners('.round');  jQuery('input').focus(function(){
 if(jQuery(document.getElementById('q')).val() == 'Search UCF'){
 jQuery(document.getElementById('q')).val(''); }
 }); jQuery('input').blur(function(){
 if(jQuery(document.getElementById('q')).val() == ''){
 jQuery(document.getElementById('q')).val('Search UCF'); }

 });});function roundedCorners(elementName){
 var size = jQuery(elementName).size(); for(i = 0; i < size; i++){
 var element = jQuery(elementName+':eq('+i+')'); var img = jQuery(elementName+':eq('+i+') img'); var marginRight = img.css('margin-right'); var marginTop = img.css('margin-top'); var marginLeft = img.css('margin-left'); var marginBottom = img.css('margin-bottom'); var float = img.css('float'); var src = img.attr('src'); var height = img.height(); var width = img.width();   height = (height % 2)? height - 1: height; width = (width % 2)? width - 1: width; element.css({
 height: height, 
 width: width,
 display: "block",
 marginRight: marginRight,
 marginTop: marginTop,
 marginLeft: marginLeft,
 marginBottom: marginBottom,
 float: float,
 backgroundImage:'url("'+src+'")',
 backgroundRepeat:'no-repeat'
 }); img.hide(); element.corner(); }
}