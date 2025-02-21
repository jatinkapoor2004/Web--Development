//It is like memoization of java done using object in javascript like hashmap
function memoize(fn) {
    let cache = {};  // Use an object for caching

    return function (...args) {//it means we can put dynamic no. of arg
        let key = JSON.stringify(args);  // Convert arguments to a unique key

        if (cache[key] !== undefined) {
            console.log("Fetching from cache...");
            return cache[key];
        }

        console.log("Calculating result...");
        let result = fn(...args);
        cache[key] = result;  // Store result in cache
        return result;
    };
}

// Example function
function add(a, b, c) {
    return a + b + c;
}

// Memoized version
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2, 3));  // 🔹 Calculating result... → 6
console.log(memoizedAdd(1, 2, 3));  // 🔹 Fetching from cache... → 6
console.log(memoizedAdd(2, 3, 4));  // 🔹 Calculating result... → 9
