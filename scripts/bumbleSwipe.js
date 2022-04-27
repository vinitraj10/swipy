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

function isMyType() {
  // assuming that person don't drink or smoke, cause if they havent answered
  // to that, we shall leave that to GOD
  let isSmoker = false,
    isDrinker = false,
    smokerType = ["Socially", "Regularly"],
    drinkerType = ["Socially", "Regularly", "Frequently", "Sober"];
  shorterThanMe = true;

  // gets the attribute of the user from there bio which they have written
  stories = document.getElementsByClassName(
    "encounters-story-about__badges"
  )[0];

  if (stories?.childNodes?.length > 0) {
    console.log("valid childNodes");
    for (let i = 0; i < stories.childNodes.length; i++) {
      const imageNode =
        stories.childNodes[i].childNodes[0].childNodes[0].childNodes[0];
      const answerNode =
        stories.childNodes[i].childNodes[0].childNodes[1].childNodes[0];
      // to find the type of attribute this is a hack
      imgSrc = imageNode.src;
      answerForAttr = answerNode.innerText;

      // checks if person added smoking attr and it should be never only
      if (imgSrc.includes("smoking") && smokerType.includes(answerForAttr)) {
        isSmoker = true;
      }
      // checks if person added drinking attr and it should be never only
      if (imgSrc.includes("drinking") && drinkerType.includes(answerForAttr)) {
        isDrinker = true;
      }
    }
    return !isDrinker && !isSmoker;
  } else {
    return true;
  }
}

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
  if (isMyType()) {
    console.log("swiped right");
    eventFire(swipeRight());
  } else {
    console.log("swiped left");
    eventFire(swipeLeft());
  }
  console.log("swipes left", totalSwipes);
}

/*

  Main swiping script
  currently does 50 swipes at max with
  each swipe has got 4 sec of interval in between

*/

let totalSwipes = 50;

interval = setInterval(() => {
  totalSwipes = totalSwipes - 1;
  swipeForMyType();
  if (totalSwipes == 0) {
    clearInterval(interval);
  }
}, 4000);
