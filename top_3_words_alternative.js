function top_3_words_alternative(str) {
    const wordCounts = new Map();
    const words = str.toLowerCase().match(/[a-z']+/g) || []; 

    
    words.forEach(word => {
        const count = wordCounts.get(word) || 0;
        wordCounts.set(word, count + 1);
    });

  
    const sortedWords = Array.from(wordCounts.entries()).sort((a, b) => b[1] - a[1]);
    const topWords = sortedWords.slice(0, 3).map(entry => entry[0]);

    return topWords;
}

module.exports = top_3_words_alternative;