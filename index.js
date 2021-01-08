function shuffleCards(cardDeck) {
  $gameBoard = $("#gameboard");
  // credit to the Fisher-Yates shuffle
  let i = cardDeck.length;
  console.log(i);
  while (--i) {
    let j = Math.floor(Math.random() * (i + 1));
    let tempi = cardDeck[i];
    let tempj = cardDeck[j];
    cardDeck[i] = tempj;
    cardDeck[j] = tempi;
  }
  console.log(cardDeck);
  cardDeck.each(function (i) {
    $gameBoard.append(cardDeck[i]);
  });
}

function cardsClicked() {
  let moves = 0;
  let twoCards = [];
  $cards.click(function () {
    if (twoCards.length < 2 && !$(this).hasClass("card-flipped")) {
      $(this).toggleClass("card-flipped");
      if ($(this).hasClass("card-flipped")) {
        twoCards.push($(this));
        console.log(twoCards[0][0].innerHTML);
      }
    }
    if (twoCards.length === 2) {
      checkMatch(twoCards);
      twoCards = [];
      moves++;
    }
    $("#moveCounter").html(`Moves: ${moves}`);
  });
}

function checkMatch(cardArray) {
  if (cardArray.length != 2) {
    return;
  }
  if (cardArray[0][0].innerHTML === cardArray[1][0].innerHTML) {
    setTimeout(function () {
      $(cardArray[0]).addClass("card-matched");
      $(cardArray[1]).addClass("card-matched");
    }, 500);
  } else {
    setTimeout(function () {
      $(cardArray[0]).removeClass("card-flipped");
      $(cardArray[1]).removeClass("card-flipped");
    }, 500);
  }
}

$(function () {
  $cardDeck = $(".card").toArray();
  $cards = $(".card");
  shuffleCards($cards);
  cardsClicked();
});
