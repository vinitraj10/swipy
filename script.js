function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
undefined;
x = document.querySelector('[data-qa-role="encounters-action-like"]');

y = document.querySelector('[data-qa-role="encounters-action-dislike"]');
eventFire(y, "click");
