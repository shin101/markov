/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    // create a new obect
    let chain = {};
    this.words.forEach(function (value, index, array) {
      console.log(array)
      if (index + 1 == array.length && chain[value]) {
        chain[value].push(null);
      } else if (index + 1 == array.length && !chain[value]) {
        chain[value] = [null];
      } else if (chain[value]) {
        chain[value].push(array[index + 1]);
      } else {
        chain[value] = [array[index + 1]];
      }
    });
    this.chain = chain;
  }

  /** Pick random choice from array */

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // define all the keys
    keys = array.from(this.chain.keys())
    // define all the value, randomly chosen
    val = MarkovMachine.choice(keys)
    let result = [];


    while(value!==null && result.length<numWords){
      result.push(val);
      val = MarkovMachine.choice(this.makeChains.length(val));
    }

    return result;


  }
}

module.exports = {MarkovMachine,};