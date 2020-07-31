const convertArr = require('./convertArray');

test('test convert array', () => {
    expect(convertArr(['1','2', '3'],['3','4','5'])).toEqual([['1','3'],['2','4'],['3', '5']]);
});

test('test arr', () => {
    expect(convertArr(['1','2', '3'],['3','4','5', '6'])).toEqual([['1','3'],['2','4'],['3', '5']]);
}) 