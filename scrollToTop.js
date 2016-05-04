// 1. lets first listen for the scroll event
$(window).scroll(function(){

    // top value in this case 0
    var wScroll = $(this).scrollTop();

    // determine when to show button
    var showScrollButton = 50;

    // fadein / fadeout back to  top button
    if (wScroll > showScrollButton) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

// 2. lets create the button
$('body').append('<a id="top" href="#">TOP</a>');

// 3. lets create the css properties
$('#top').css({
  "bottom" : "200px",
  "right" : "20px",
  "position" : "fixed",
  "cursor" : "pointer",
  "z-index" : "1",
  "display" : "none",
  "background-color" : "rgba(0,0,0,0.7)",
  "padding" :"20px 40px",
  "color" : "#ffffff"
});

// 4. lets create the on click
$('#top').click(function () {
    $('body,html').animate({

      // position you want to scroll to
      scrollTop: 0
    }, 800);

    // stop anchor link behavior
    return false;
});


// =====================================================
// Delete this when ready to use. this is just to add
// Content to the page, so that we can get a scroll bar
// =====================================================
for (var i = 0; i < 30; i++) {
  $('body').append( "<p style='width:500px; margin:0 auto;'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ut. Incidunt quod tempora soluta, nihil, perferendis neque quo blanditiis nobis totam, illo cupiditate rerum delectus autem! Illum quisquam perferendis impedit</p><br>" );
}
