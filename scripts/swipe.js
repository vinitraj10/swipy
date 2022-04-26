var utils = require("../scripts/utils");
var filters = require("../scripts/filter");

function swipeRight() {
  const rightSwipe = document.querySelector(
    '[data-qa-role="encounters-action-like"]'
  );
  return rightSwipe;
}

function swipeLeft() {
  const leftSwipe = document.querySelector(
    '[data-qa-role="encounters-action-dislike"]'
  );
  return leftSwipe;
}

function swipeForMyType() {
  if (filters.isMyType()) {
    utils.eventFire(swipeRight());
  } else {
    utils.eventFire(swipeLeft());
  }
}

module.exports = {
  swipeForMyType,
};
