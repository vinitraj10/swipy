// simulates the mouse touch click
function eventFire(el, etype = "click") {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

module.exports = {
  eventFire,
};
