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
    // iterate over each word in word list
    for(let i=0;i<this.words.length;i++){
      // define current word and next word
      let word = this.words[i];
      let next_word = this.words[i+1]||null;
      // if word exists in obj then push next word to chain
      if(word in chain){
        chain[word].push(next_word);
      }else{
        // else add current word, next word??? 
        chain[word].push(next_word)
      }
    }
    return chain;
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