// importing top-3-words functions 
const top_3_words = require('./top_3_words');
const top_3_words_alternative = require('./top_3_words_alternative');



// unit test for evaluate answer of function
function evaluate_answer_test() {
    const testCases = [
        {
            input: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.",
            expectedOutput: ["a", "of", "on"]
        },
        {
            input: "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e",
            expectedOutput: ["e", "ddd", "aa"]
        },
        {
            input: " //wont won't won't",
            expectedOutput: ["won't", "wont"]
        }     
    ];

    for (const { input, expectedOutput } of testCases) {
        const output = top_3_words(input);
        console.log("Input:", input);
        console.log("Output:", output);
        console.log("Expected Output:", expectedOutput);
        console.log("Test Passed:", arraysEqual(output, expectedOutput));
        console.log("--------------------");
    }
}

// function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}




//time complexity test for camparing different solutions
function time_comparison_test() {
    const largeInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    console.log("Performance test for original approach:");
    const startTimeOriginal = performance.now();
    for (let i =0 ; i<1000;i++){
        top_3_words(largeInput);
    }
    const endTimeOriginal = performance.now();
    const executionTimeOriginal = endTimeOriginal - startTimeOriginal;
    console.log("Execution Time (Original):", executionTimeOriginal, "milliseconds");

    console.log("Performance test for alternative approach:");
    const startTimeAlternative = performance.now();
    for (let i =0 ; i<1000;i++){
        top_3_words_alternative(largeInput);
    }
    
    const endTimeAlternative = performance.now();
    const executionTimeAlternative = endTimeAlternative - startTimeAlternative;
    console.log("Execution Time (Alternative):", executionTimeAlternative, "milliseconds");



    //which approach is better?
    let result = executionTimeOriginal < executionTimeAlternative ? "original approach is better":"Alternative approach is better";
    console.log(result)
}


// Run the tests
evaluate_answer_test();
time_comparison_test()
