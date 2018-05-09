
document.getElementById("findButton").onclick = function() {
    const typedText = document.getElementById("input").value;
    let anagramSets = {}
    const sortedWord = "";
    console.log(typedText);
    // your code will go here ...

    


    function alphabetize(typedText) {
        sortedWord = typedText.toLowerCase().split("").sort().join("").trim();
        return sortedWord;
    //    return typedText.toLowerCase().split("").sort().join("").trim();

      }
      
      for(let i=0; i<words.length; i++){
        //   anagramSets["alphabetize(words[i]"] = 
        //   console.log(alphabetize(words[i]));
      }
      
    }

    // anagramSets = {
    //     "ailr": ["lair", "liar", "rail"],
    //     "aelst": ["least", "steal", ... ],
    //      ...
    //  };
