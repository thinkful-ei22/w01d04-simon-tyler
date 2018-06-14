'use strict';

$(function(){
  $('.thumbnail').click(function(event){
    let picture = $(this).find('img').attr('src');
    $('.hero img').attr('src', picture);
  });
});