'use strict';

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
    const userInput = $('.js-shopping-list-entry').val();
    let addedHtml = addUserInput(userInput);
    $('ul').append(addedHtml);
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

