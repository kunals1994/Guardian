/*
 * Pennapps Fall 2015, Guardian
 */

var paginationIndex = 0;
var maxPagination = 4;

function jumpToPage(i) {
  if(i < 0 || i >= maxPagination || i === paginationIndex) {
    return;
  }

  var newPageIsToLeft = i < paginationIndex;
  hidePaginationNumber(paginationIndex, !newPageIsToLeft);
  setTimeout(function() {
    showPaginationNumber(i, newPageIsToLeft);
  }, 350);

  paginationIndex = i;
}

function activatePaginationNumber(i) {
  $('.paginationDot').removeClass('paginationDotActive');
  $('.paginationDot').eq(i).addClass('paginationDotActive');
}

function hidePaginationNumber(i, move_left) {
  var element = $('#' + i.toString());
  var dir = move_left ? "left" : "right";
  element.hide("slide", {direction: dir}, 400);
}

function showPaginationNumber(i, left) {
  var element = $('#' + i.toString());
  var dir = left ? "left" : "right";
  activatePaginationNumber(i);
  element.show("slide", {direction: dir}, 400);
}

function handleLeftSwipeOnPagination() {
  if(paginationIndex === maxPagination - 1) {
    return;
  }

  hidePaginationNumber(paginationIndex, true);
  paginationIndex += 1;
  setTimeout(function() {
    showPaginationNumber(paginationIndex, false);
  }, 350);
}

function handleRightSwipeOnPagination() {
  if(paginationIndex === 0) {
    return;
  }

  hidePaginationNumber(paginationIndex, false);
  paginationIndex -= 1;
  setTimeout(function() {
    showPaginationNumber(paginationIndex, true);
  }, 350);
}

$(document).ready(function(){
  $('.ui-loader').hide();
  fadeAllIn();
  $(document).on("swipeleft", function() {
    handleLeftSwipeOnPagination();
  });
  $(document).on("swiperight", function() {
    handleRightSwipeOnPagination();
  });
});

function fadeAllIn() {
  $('#fadeOne').fadeIn();
  $('#fadeTwo').fadeIn(1000);
  $('#fadeThree').fadeIn(2000);
}
