const utils = require('./utils');

it('Should add two numbers', () => {
    var res = utils.add(33, 11);

    if(res !== 44 ){
        throw new Error(`Expected 44, but got ${res}`)
    }
});

it('Should multiply two numbers', () => {
    const res = utils.square(5);

    if(res !== 25){
        throw new Error(`Expected 25, but got ${res}`);
    }
});