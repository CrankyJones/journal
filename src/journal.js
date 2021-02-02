export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getNumWords = function() {
  let words = this.body.split(" ");
  let wordCount = words.length;
  return wordCount;
};

Entry.prototype.getNumVowels = function() {
  let letters = this.body.split("");
  let vowelList = ["a", "e", "i", "o", "u", "y"];
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < letters.length; i++) {
    if (vowelList.includes(letters[i])) {
      vowelCount++;
    } else if (letters[i] !== " ") {
      consonantCount++;
    }
  }
  let results = [vowelCount, consonantCount];
  return results;
};

Entry.prototype.getTeaser = function() {
  let words = this.body.split(" ");
  let firstWords = [];
  if (words.length < 8) {  
    for (let i = 0; i < words.length; i++) {
      firstWords += words[i] + " ";
    } 
  } else {      
    firstWords = words.slice(0,8);
  }
  //firstWords = firstWords.join(" ");
  return firstWords;
};