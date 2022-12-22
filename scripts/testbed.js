
    $('.t-1').click(function() {
      $('.box-1').slideToggle();
      $('.box-2, .box-3, .box-4, .box-5').slideUp();
      $('.sectors-icon-column-lottie').fadeToggle();
    });

    $('.t-2').click(function() {
      $('.box-2').slideToggle();
      $('.box-1, .box-3, .box-4, .box-5').slideUp();
      $('.sectors-icon-column-lottie').fadeToggle();
    });

    $('.t-3').click(function() {
      $('.box-3').slideToggle();
      $('.box-1, .box-2, .box-4, .box-5').slideUp();
      $('.sectors-icon-column-lottie').fadeToggle();
    });

    $('.t-4').click(function() {
      $('.box-4').slideToggle();
      $('.box-1, .box-2, .box-3, .box-5').slideUp();
      $('.sectors-icon-column-lottie').fadeToggle();
    });

    $('.t-5').click(function() {
      $('.box-5').slideToggle();
      $('.box-1, .box-2, .box-3, .box-4').slideUp();
      $('.sectors-icon-column-lottie').fadeToggle();
    });




    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */
    //******************************************* */

    $('.t-1').hover(function() {
      $('.box-1').fadeIn();
      $('.t-1').css('opacity', '1');
      $('.box-2, .box-3, .box-4, .box-5').fadeOut();
			$('.t-2, .t-3, .t-4, .t-5').css('opacity', '0.5');
      $('.sectors-icon-column-lottie').fadeOut();
    }, function() {
      setTimeout(function() {
        if (!$('.box-1').is(':hover')) {
          $('.box-1').fadeOut();
          $('.sectors-icon-column-lottie').fadeIn();
          $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
        }
      }, 1000); // wait 1 second before executing
    });

    $('.box-1').hover(function() {
      $('.box-1').fadeIn();
    }, function() {
      setTimeout(function() {
        if (!$('.t-1').is(':hover')) {
          $('.box-1').fadeOut();
          $('.sectors-icon-column-lottie').fadeIn();
          $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
        }
      }, 1000); // wait 1 second before executing
    });

$('.t-2').hover(function() {
  $('.box-2').fadeIn();
  $('.t-2').css('opacity', '1');
  $('.box-1, .box-3, .box-4, .box-5').fadeOut();
  $('.sectors-icon-column-lottie').fadeOut();
  $('.t-1, .t-3, .t-4, .t-5').css('opacity', '0.5');
}, function() {
  setTimeout(function() {
    if (!$('.box-2').is(':hover')) {
      $('.box-2').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
			$('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});

$('.box-2').hover(function() {
  $('.box-2').fadeIn();
}, function() {
  setTimeout(function() {
    if (!$('.t-2').is(':hover')) {
      $('.box-2').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});


$('.t-3').hover(function() {
  $('.box-3').fadeIn();
  $('.t-3').css('opacity', '1');
  $('.box-1, .box-2, .box-4, .box-5').fadeOut();
  $('.sectors-icon-column-lottie').fadeOut();
  $('.t-1, .t-2, .t-4, .t-5').css('opacity', '0.5');
}, function() {
  setTimeout(function() {
    if (!$('.box-3').is(':hover')) {
      $('.box-3').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});

$('.box-3').hover(function() {
  $('.box-3').fadeIn();
}, function() {
  setTimeout(function() {
    if (!$('.t-3').is(':hover')) {
      $('.box-3').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});

$('.t-4').hover(function() {
  $('.box-4').fadeIn();
  $('.t-4').css('opacity', '1');
  $('.box-1, .box-2, .box-3, .box-5').fadeOut();
  $('.sectors-icon-column-lottie').fadeOut();
  $('.t-1, .t-2, .t-3, .t-5').css('opacity', '0.5');
}, function() {
  setTimeout(function() {
    if (!$('.box-4').is(':hover')) {
      $('.box-4').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});

$('.box-4').hover(function() {
  $('.box-4').fadeIn();
}, function() {
  setTimeout(function() {
    if (!$('.t-4').is(':hover')) {
      $('.box-4').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});


$('.t-5').hover(function() {
  $('.box-5').fadeIn();
  $('.t-5').css('opacity', '1');
  $('.box-1, .box-2, .box-3, .box-4').fadeOut();
  $('.sectors-icon-column-lottie').fadeOut();
  $('.t-1, .t-2, .t-3, .t-4').css('opacity', '0.5');
}, function() {
  setTimeout(function() {
    if (!$('.box-5').is(':hover')) {
      $('.box-5').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});

$('.box-5').hover(function() {
  $('.box-5').fadeIn();
}, function() {
  setTimeout(function() {
    if (!$('.t-5').is(':hover')) {
      $('.box-5').fadeOut();
      $('.sectors-icon-column-lottie').fadeIn();
      $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
    }
  }, 1000); // wait 1 second before executing
});




$(document).ready(function() {
  // This will fire when document is ready:
  $(window).resize(function() {
      // This will fire each time the window is resized:
      if($(window).width() >= 768) {
          // if larger or equal

            } else {
          // if smaller
          $('.t-1').click(function() {
            $('.box-1').slideToggle();
            $('.box-2, .box-3, .box-4, .box-5').slideUp();
            $('.sectors-icon-column-lottie').fadeToggle();
          });
      
          $('.t-2').click(function() {
            $('.box-2').slideToggle();
            $('.box-1, .box-3, .box-4, .box-5').slideUp();
            $('.sectors-icon-column-lottie').fadeToggle();
          });
      
          $('.t-3').click(function() {
            $('.box-3').slideToggle();
            $('.box-1, .box-2, .box-4, .box-5').slideUp();
            $('.sectors-icon-column-lottie').fadeToggle();
          });
      
          $('.t-4').click(function() {
            $('.box-4').slideToggle();
            $('.box-1, .box-2, .box-3, .box-5').slideUp();
            $('.sectors-icon-column-lottie').fadeToggle();
          });
      
          $('.t-5').click(function() {
            $('.box-5').slideToggle();
            $('.box-1, .box-2, .box-3, .box-4').slideUp();
            $('.sectors-icon-column-lottie').fadeToggle();
          });
            }
  }).resize(); // This will simulate a resize to trigger the initial run.
});


if ($(window).width() >= 768) {
  $('.t-1').hover(function() {
    $('.box-1').fadeIn();
    $('.t-1').css('opacity', '1');
    $('.box-2, .box-3, .box-4, .box-5').fadeOut();
    $('.t-2, .t-3, .t-4, .t-5').css('opacity', '0.5');
    $('.sectors-icon-column-lottie').fadeOut();
  }, function() {
    setTimeout(function() {
      if (!$('.box-1').is(':hover')) {
        $('.box-1').fadeOut();
        $('.sectors-icon-column-lottie').fadeIn();
        $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
      }
    }, 1000); // wait 1 second before executing
  });

  $('.box-1').hover(function() {
    $('.box-1').fadeIn();
  }, function() {
    setTimeout(function() {
      if (!$('.t-1').is(':hover')) {
        $('.box-1').fadeOut();
        $('.sectors-icon-column-lottie').fadeIn();
        $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
      }
    }, 1000); // wait 1 second before executing
  });

$('.t-2').hover(function() {
$('.box-2').fadeIn();
$('.t-2').css('opacity', '1');
$('.box-1, .box-3, .box-4, .box-5').fadeOut();
$('.sectors-icon-column-lottie').fadeOut();
$('.t-1, .t-3, .t-4, .t-5').css('opacity', '0.5');
}, function() {
setTimeout(function() {
  if (!$('.box-2').is(':hover')) {
    $('.box-2').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});

$('.box-2').hover(function() {
$('.box-2').fadeIn();
}, function() {
setTimeout(function() {
  if (!$('.t-2').is(':hover')) {
    $('.box-2').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});


$('.t-3').hover(function() {
$('.box-3').fadeIn();
$('.t-3').css('opacity', '1');
$('.box-1, .box-2, .box-4, .box-5').fadeOut();
$('.sectors-icon-column-lottie').fadeOut();
$('.t-1, .t-2, .t-4, .t-5').css('opacity', '0.5');
}, function() {
setTimeout(function() {
  if (!$('.box-3').is(':hover')) {
    $('.box-3').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});

$('.box-3').hover(function() {
$('.box-3').fadeIn();
}, function() {
setTimeout(function() {
  if (!$('.t-3').is(':hover')) {
    $('.box-3').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});

$('.t-4').hover(function() {
$('.box-4').fadeIn();
$('.t-4').css('opacity', '1');
$('.box-1, .box-2, .box-3, .box-5').fadeOut();
$('.sectors-icon-column-lottie').fadeOut();
$('.t-1, .t-2, .t-3, .t-5').css('opacity', '0.5');
}, function() {
setTimeout(function() {
  if (!$('.box-4').is(':hover')) {
    $('.box-4').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});

$('.box-4').hover(function() {
$('.box-4').fadeIn();
}, function() {
setTimeout(function() {
  if (!$('.t-4').is(':hover')) {
    $('.box-4').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});


$('.t-5').hover(function() {
$('.box-5').fadeIn();
$('.t-5').css('opacity', '1');
$('.box-1, .box-2, .box-3, .box-4').fadeOut();
$('.sectors-icon-column-lottie').fadeOut();
$('.t-1, .t-2, .t-3, .t-4').css('opacity', '0.5');
}, function() {
setTimeout(function() {
  if (!$('.box-5').is(':hover')) {
    $('.box-5').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});

$('.box-5').hover(function() {
$('.box-5').fadeIn();
}, function() {
setTimeout(function() {
  if (!$('.t-5').is(':hover')) {
    $('.box-5').fadeOut();
    $('.sectors-icon-column-lottie').fadeIn();
    $('.t-1, .t-2, .t-3, .t-4, .t-5').css('opacity', '1');
  }
}, 1000); // wait 1 second before executing
});
}

if ($(window).width() < 768) {
  $('.t-1').click(function() {
    $('.box-1').slideToggle();
    $('.box-2, .box-3, .box-4, .box-5').slideUp();
    $('.sectors-icon-column-lottie').fadeToggle();
  });

  $('.t-2').click(function() {
    $('.box-2').slideToggle();
    $('.box-1, .box-3, .box-4, .box-5').slideUp();
    $('.sectors-icon-column-lottie').fadeToggle();
  });

  $('.t-3').click(function() {
    $('.box-3').slideToggle();
    $('.box-1, .box-2, .box-4, .box-5').slideUp();
    $('.sectors-icon-column-lottie').fadeToggle();
  });

  $('.t-4').click(function() {
    $('.box-4').slideToggle();
    $('.box-1, .box-2, .box-3, .box-5').slideUp();
    $('.sectors-icon-column-lottie').fadeToggle();
  });

  $('.t-5').click(function() {
    $('.box-5').slideToggle();
    $('.box-1, .box-2, .box-3, .box-4').slideUp();
    $('.sectors-icon-column-lottie').fadeToggle();
  });

  
}