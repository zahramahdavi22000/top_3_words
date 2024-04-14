function top_3_words(str) {
    const wordCounts = {};
    const words = str.toLowerCase().match(/[a-z']+/g) || []; 

   
    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }   

    
    const topWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 3);

    return topWords;
}


module.exports = top_3_words;

