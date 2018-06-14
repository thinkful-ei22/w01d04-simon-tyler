'use strict';
/*eslint-env jquery*/

const userInput = $('.js-shopping-list-entry');

console.log(userInput);

const addItemToHTML = function(submitFood) {
  return `<li>
  <span class="shopping-item">${submitFood}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
  </li>`;
};

const addUserInput = function(foodItem) {
  return addItemToHTML(foodItem);
};

const submitFunction = function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const addedHtml = addUserInput(userInput.val());
    $('ul').append(addedHtml);
    userInput.val('');
  });
};

const checkOffItem = function() {
  $('body').on('click', '.shopping-item-toggle', function(event) { 
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
};

const deleteItem = function() {
  $('body').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
};

function main() {
  submitFunction();
  checkOffItem();
  deleteItem();
}

main();