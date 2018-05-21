// pulls value from button "findbutton" and stores it
let anagramSets = {}
const newDiv = document.getElementById("listedAnagrams")


document.getElementById("findButton").onclick = function () {
    const typedText = document.getElementById("input").value;

    // alphabetizes the user's word
    function alphabetize(wordToAlphabetize) {
        return wordToAlphabetize.toLowerCase().split("").sort().join("").trim();
    }

    

    // alphabetizes the words
    for (let i = 0; i < words.length; i++) {
        if (alphabetize(words[i]) === alphabetize(typedText)){
            // const newDiv = document.getElementById("listedAnagrams");
            const textAnagram = document.createTextNode(words[i] + " ");
            newDiv.appendChild(textAnagram);
                //print to the page
        }
        
    }

}