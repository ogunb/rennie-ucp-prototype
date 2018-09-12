//-------------BOOTSTRAP ÜYE OLMA DALGASI------------//
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-body input').val(recipient)
})
//-------------BOOTSTRAP ÜYE OLMA DALGASI------------//

//----ARAÇLARDAKİ GPS. BURAYA KAPATMAK İÇİN BİR ŞEYLER DE EKLENECEK----//
$('.araclar').click(function(){
  $(this).addClass('gpsOff');
  $(this).next().removeClass('gpsOff');
});
//----ARAÇLARDAKİ GPS. BURAYA KAPATMAK İÇİN BİR ŞEYLER DE EKLENECEK----//

//----mobil sol bar----//
$('.nav-toggle').click(function() {
  $('.rLefty').toggleClass('acilsusamacil');
  $('.left-nav').toggleClass('acilsusamacil');
  $('.kapansusam').toggleClass('acilsusamacil');
})
//----mobil sol bar----//
