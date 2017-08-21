function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {

  return document.getElementById("nested").querySelectorAll('div.target')[0]
}

function increaseRankBy(n) {
  var ranked = document.getElementById("app").querySelectorAll('ul.ranked-list')
  for (var i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
    //console.log(ranked[i].innerHTML)
  }
}

function deepestChild() {
  return document.getElementById("grand-node").querySelectorAll('div')[3]

}
