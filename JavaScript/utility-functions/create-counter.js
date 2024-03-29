function createCounter() {
    let counter = 0;

    function increment() {
        counter++;
        console.log('Counter incremented:', counter);
    }

    function decrement() {
        counter--;
        console.log('Counter decremented:', counter);
    }

    function getCounter() {
        return counter;
    }

    async function processCounter() {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an asynchronous operation
        console.log('Current counter:', getCounter());
    }

    return {
        increment,
        decrement,
        processCounter
    };
}

// Example of usage:
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.processCounter();