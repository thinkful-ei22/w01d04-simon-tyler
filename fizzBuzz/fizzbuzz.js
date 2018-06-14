'use strict';
/*eslint-env jquery*/
//function that evaluates to fizz, buzz, fizzbuzz, num
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
//console.log(fizzBuzz(511));

//generates new tags to show this in the browser
const fizzBuzzhtml = function(n){
  let fizzClass = '';
  if(typeof n === 'string'){
    fizzClass = n;
  }
  return `<div class='fizz-buzz-items'> ${fizzClass} <span> ${n} </span> </div>`;
};

//console.log(fizzBuzzhtml('fizz'));
const handleSubmit = function(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const userInput = $('#number-choice').val();
    //console.log(userInput);
    $('#number-choice').val('');
    //take user input and evaluate that to Fizz, Buzz....
    const fizzBuzzItems = [];
    for (let i = 1; i <= userInput; i++)
    {
      fizzBuzzItems.push(fizzBuzz[i]);
    }
    const html = fizzBuzzItems.map(item => fizzBuzzhtml(item));
    $('.js-results').append(html);
    //$('.js-results')

  });

};
function main()
{
  handleSubmit();
}

main();