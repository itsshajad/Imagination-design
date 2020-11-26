$(window).on('load',function(){
  setTimeout(function(){
  $('.loader').remove();
  },500)
})

  new WOW().init();

//to-top
$(document).ready(function(){
	$(window).scroll(function(){
			if($(this).scrollTop()>250){
				$('#to-top').fadeIn().addClass('animated slideInUp');
			}
			else{$('#to-top').fadeOut();}
		});
	$('#to-top').click(function(){
		$('html').animate({scrollTop:0},500)
	})

});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



function formvalidation(){
var msg = ""
var userName = document.getElementById('text');
var userPhone = document.getElementById('phone');
var name_patt =/[a-zA-Z]/;
var phone_patt =/[0-9]/;

if (!name_patt.test(userName.value)) {
  msg+="Name Is Required\n"
}
if (!phone_patt.test(userPhone.value)) {
  msg+="Phone No Is Required"
}
if (msg) {
  alert(msg)
  return false;
}

}


(function($){
  
  $(document).ready(function(){
    
    var galLink = $("a.gal_link");
    
    
    galLink.lightbox();
    
    
  });
  
})(jQuery);
