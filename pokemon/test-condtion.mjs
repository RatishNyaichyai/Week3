export function test(obtained, expected) {
    if (JSON.stringify(obtained) === JSON.stringify(expected)) {
        console.log(`Test passed`);
    }
    else {
        console.log(`Test failed: damage received should have been ${expected} but received ${obtained}`);
    }
}
