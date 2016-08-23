$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 2,
      touchDrag:true,
     itemsDesktop : [1000,2], //2 изображений на ширину между 1000px и 901px
      itemsDesktopSmall : [900,2], // 2 изображения между 900px и 601px
      itemsTablet: [600,2], //2 изображения между 600 и 0
      itemsMobile:[479,1]
 
  });
 
});