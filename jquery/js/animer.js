(function($) {

    $.fn.changement = function()
  
    {
  
      this.each(function() {
  
        $(this).css('background', 'repeating-radial-gradient(pink, purple 8%, turquoise 25%');        
        $(this).css('height','200px');
        $(this).css('width','200px');


  
      });
  
      return this;
  
    };
  
  })(jQuery);


            
  $(function() {
            
    $('#forme').click(function(){

      $('#rond').changement();

    });

  });