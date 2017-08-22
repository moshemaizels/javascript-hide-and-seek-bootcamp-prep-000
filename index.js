function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {

  return document.getElementById("nested").querySelectorAll('div.target')[0]
}

function increaseRankBy(n) {
 console.log("first")
  //var rankedList = ranked.querySelectorAll("li")
  var ranked = document.getElementById("app").querySelectorAll('ul.ranked-list')
//  console.log(ranked.length)
  for (var i = 0; i < ranked.length; i++) {
    var rankedInside = ranked[i].querySelectorAll('li')
    console.log("loop " + i)
    //console.log(rankedInside.length)
    //var r = ranked[i].querySelectorAll('li')
    for (var i = 0; i < rankedInside.length; i++) {
      //console.log(parseInt(rankedInside[i].innerHTML) + n)
      rankedInside[i].innerHTML = parseInt(rankedInside[i].innerHTML) + n
    //  console.log("here")
    //  r.querySelectorAll('li')[i].innerHTML = parseInt(r.querySelectorAll('li')[i].innerHTML)+ n
    }
    //ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n

  }
}

function deepestChild() {
  return document.getElementById("grand-node").querySelectorAll('div')[3]

}
