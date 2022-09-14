const {MarkovMachine} = require('./markov')

test('make sure the Markov chain functions',function(){
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.chain).toContain({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]})
})

