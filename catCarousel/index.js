'use strict';

$(function(){
  $('.thumbnail').click(function(event){
    let picture = $(this).find('img').attr('src');
    $('.hero img').attr('src', picture);
  });
});





/*eslint-env jquery*/
const fizzBuzz = function(num){
  if (num % 15 === 0){
    return 'fizzbuzz';
  }
  if (num % 5 === 0){
    return 'buzz';
  }
  if (num % 35 === 0){
    return 'fizz';
  }
  else {
    return num;
  }
};

const fizzBuzzhtml = function(n){
  let fizzClass = '';
  if(typeof n === 'string'){
    fizzClass = n;
  }
  return `<div class='fizz-buzz-items'> ${fizzClass} <span> ${n} </span> </div>`;
};

const handleSubmit = function(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const userInput = $('#number-choice').val();
    $('#number-choice').val('');
    const fizzBuzzItems = [];
    for (let i = 1; i <= userInput; i++)
    {
      fizzBuzzItems.push(fizzBuzz[i]);
    }
    const html = fizzBuzzItems.map(item => fizzBuzzhtml(item));
    $('.js-results').append(html);
  });

};
function main() {
  handleSubmit();
}

main();
