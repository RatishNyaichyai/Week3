const testFunctions = [];


export function defineTest(name, definition) {
    testFunctions.push({ name, definition });
}

export function runTest() {
    testFunctions.forEach(({ name, definition }) => {
        console.error(name);
        try {
            definition();
            console.error(`✔️ Passed\n`);
        } catch (e) {
            console.error(`❌ Failed: ${e.message}\n`)
        }
    });
}

export function assertEqual(value, expectedValue, message) {
    if (value !== expectedValue) {
        const errorMsg = [
            `Expected ${JSON.stringify(value)} to equal ${JSON.stringify(expectedValue)}`,
            message
        ]
            .filter((v) => v)
            .join(': ');
        throw new Error(errorMsg);
    }
}

export function assertNotEqual(value, expectedValue, message) {
    if (value === expectedValue) {
        const errorMsg = [
            `Expected ${JSON.stringify(value)} to not equal to ${JSON.stringify(expectedValue)}`,
            message
        ]
            .filter((v) => v)
            .join(': ');
        throw new Error(errorMsg);
    }
}