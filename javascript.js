    var words = ['oh, hello', 'salut', 'hola', 'hoi', 'ciáo', 'hallo', 'oi'], i=0;
  
 setInterval(function() {         // \/ \/ callback function
  $('#greetingHop').fadeOut(900, function() {
                      // if i = last index ? i = 0 else i++
    $(this).text(words[ (i === words.length - 1) ? i = 0 : i += 1] ).fadeIn(500);
  });
}, 2000);
