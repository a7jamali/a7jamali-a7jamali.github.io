$('.home__inner').hover(function() {
    // Change the background of the hovered element to "../assets/backgrounds/scribble.svg" and set the background size to "cover"
    $(this).css({
      'background': 'url("../assets/backgrounds/scribble.svg")',
      'background-size': 'cover'
    });
  
    // Make all other .home__inner elements have 50% opacity
    $('.home__inner').not(this).css('opacity', '0.25');
  }, function() {
    // Change the background of the hovered element to nothing on hover out
    $(this).css('background', 'none');
  
    // Make all .home__inner elements have full opacity on hover out
    $('.home__inner').css('opacity', '1');
  });
  
  


$('.home__outer .m-link').hover(function() {
    // Get the width of the home__outer element
    var outerWidth = $('.home__outer').width();
  
    // Get the position of the m-link element relative to the home__outer element
    var linkPosition = $(this).position();
  
    // Calculate whether the m-link element is on the right half of the home__outer element
    var isRightHalf = linkPosition.left > (outerWidth / 2);
  
    // If the m-link element is on the right half of the home__outer element, flip the m-bg element horizontally
    if (isRightHalf) {
      $('#m-bg').css('transform', 'scaleX(-1)');
    } else {
      $('#m-bg').css('transform', 'scaleX(1)');
    }
  
    // Display the m-bg element
    $('#m-bg').fadeIn(333);
  }, function() {
    // Hide the m-bg element when the mouse is no longer hovering over the m-link element
    $('#m-bg').fadeOut(333);
  });
  