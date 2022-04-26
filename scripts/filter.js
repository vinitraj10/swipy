function isMyType() {
  // assuming that person drinks and smokes as well
  let isSmoker = true,
    isDrinker = true,
    checkedMyType = false;
  // gets the attribute of the user from there bio which they have written
  stories = document.getElementsByClassName(
    "encounters-story-about__badges"
  )[0];

  for (let i = 0; i < stories.length; i++) {
    // to find the type of attribute this is a hack
    imgSrc = stories[i].childNodes[0].childNodes[0].childNodes[0].src;
    answerForAttr =
      stories[i].childNodes[0].childNodes[1].childNodes[0].innerText;

    // checks if person added smoking attr and it should be never only
    if (imgSrc.includes("smoking") && answerForAttr == "Never") {
      isSmoker = false;
      // flag to check if this has been checked
      // as if someone has not added these attribute will pass the check
      // as i don't want to maximise the chances. lets leave something for humans as well ;)
      checkedMyType = true;
    }
    // checks if person added drinking attr and it should be never only
    if (imgSrc.includes("drinking") && answerForAttr == "Never") {
      isDrinker = false;
      checkedMyType = true;
    }
  }

  // if my type has been checked then person
  // should be non-smoker and drinker
  if (checkedMyType) {
    return !(isDrinker && isSmoker);
  }
  // else just leave to the GOD and hope for a match
  return true;
}

module.exports = {
  isMyType,
};
