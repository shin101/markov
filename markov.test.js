const {MarkovMachine} = require('./markov')


describe('running Markove tests',function(){
    test('make sure the Markov chain functions',function(){
        let mm = new MarkovMachine("the cat in the hat");
        expect(mm.chain).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]})
    })


});

