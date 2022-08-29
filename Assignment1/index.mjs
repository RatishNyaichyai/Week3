import { inRange, zip, filter } from "lodash-es";
import { defineTest, runTest, assertEqual, assertNotEqual } from "./test-utils.mjs";

defineTest('inRange > for 3 arguments', () => {

    const obtained = inRange(5, 1, 10)
    const expected = true;
    assertEqual(obtained, expected, 'should provide true');
})

defineTest('inRange > for 2 arguments', () => {
    const obtained = inRange(3, 5);
    const expected = true;
    assertEqual(obtained, expected, 'should provide true');
})
defineTest('inRange > for infinity', () => {
    const obtained = inRange(Infinity, Infinity, Infinity);
    const expected = true;
    assertNotEqual(obtained, expected, 'should not provide true');
})

// defineTest('inRange > for wrong arguments', () => {
//     const num = 15;
//     const startNum = 1;
//     const endNum = 10;
//     const obtained = inRange(num, startNum, endNum);
//     const expected = false;
//     assertEqual(obtained, expected, 'should provide false');
// })

defineTest('zip ', () => {
    let obtained = zip(['a', 'b'], [1, 2]);
    let expected = [['a', 1], ['b', 2]];

    //converting array into string for comparing
    obtained = JSON.stringify(obtained);
    expected = JSON.stringify(expected);
    assertEqual(obtained, expected, 'should provide a nested array');
})

defineTest('filter', () => {
    const personDetails = [
        { name: 'Ratish', age: 24, address: 'Bhaktapur' },
        { name: 'Nishant', age: 26, address: 'lalitpur' }
    ];
    let obtained = filter(personDetails, { age: 24 });
    let expected = [
        { name: 'Ratish', age: 24, address: 'Bhaktapur' },
    ];
    //converting array into string for comparing
    obtained = JSON.stringify(obtained);
    expected = JSON.stringify(expected);
    assertEqual(obtained, expected, 'should return array of filtered object');
})

runTest();