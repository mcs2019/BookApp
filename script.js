$(document).ready(function(){


  $('#add').click(function(){
    
    let userInput = $('input[name=bookListItem]').val();
    
  $('.list').append('<li>' + '<input class ="checked-item" type="checkbox">' + userInput + '</li>');
  return false;
  })
  

  $(document).on('click','.checked-item',function(){

    
    $(this).parent().toggleClass('is-it-checked');

  })

  
  $('.checked').on('click', function(e){

    

    e.preventDefault();

    
    $('.is-it-checked').remove();
  })

  $('.reset-list').on('click',function(e){
     
     e.preventDefault();

     
     $('li').remove();
  })
  


})
