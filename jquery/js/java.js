(function($) {

    $.fn.texte = function()
  
    {
  
      this.each(function() {
  
        $(this).css('font-weight', 'bold');  
        $(this).css('font-style', 'italic'); 
        $(this).css('color', 'blue');        
        $(this).css('font-size','40px');
  
      });
  
      return this;
  
    };
  
  })(jQuery);

  
            
  $(function() {
            
    $('#action').click(function(){

      $('span').texte();

    });

  });
