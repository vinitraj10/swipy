function isMyType() {
  // assuming that person don't drink or smoke, cause if they havent answered
  // to that, we shall leave that to GOD
  let isSmoker = false,
    isDrinker = false,
    smokerType = ["Socially", "Regularly"],
    drinkerType = ["Socially", "Regularly", "Frequently", "Sober"];

  // gets the attribute of the user from there bio which they have written
  stories = document.getElementsByClassName(
    "encounters-story-about__badges"
  )[0];

  for (let i = 0; i < stories.childNodes.length; i++) {
    // to find the type of attribute this is a hack
    imgSrc =
      stories.childNodes[i].childNodes[0].childNodes[0].childNodes[0].src;
    answerForAttr =
      stories.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerText;

    // checks if person added smoking attr and it should be never only
    if (imgSrc.includes("smoking") && smokerType.includes(answerForAttr)) {
      isSmoker = true;
    }
    // checks if person added drinking attr and it should be never only
    if (imgSrc.includes("drinking") && drinkerType.includes(answerForAttr)) {
      isDrinker = true;
    }
  }

  return !(isDrinker && isSmoker);
}

module.exports = {
  isMyType,
};
