/// <reference path="./global.d.ts" />
// @ts-check

// Array Destructuring...
/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  const [first] = deck
  return first
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [first, second] = deck
  return second
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  // exclusive swap, right?
  [deck[0], deck[1]] = [deck[1], deck[0]]
  return deck

}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const [first, ...rest] = deck
  return [first, [...rest]]
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards([before, ...after]) {
  // if (deck[0] === undefined) {
  //   [deck[1], deck[2], deck[3]] = FACE_CARDS
  //   deck[0]= undefined // Why did I have to reassign it to undefined? 
  //   return deck
  // }
  // deck.splice(1,0,FACE_CARDS[0],FACE_CARDS[1],FACE_CARDS[2])
  // return deck 
  return [before, ...FACE_CARDS, ...after]
}
