(function($) {

    $.fn.disparait = function()
  
    {
  
      this.each(function() {
  
        $('this').fadeOut();
  
      });
  
      return this;
  
    };
  
  })(jQuery);

        
    
    
    $(function() {

      $('#cacher').click(function(){

        $('#rond').disparait();

      });

    });


