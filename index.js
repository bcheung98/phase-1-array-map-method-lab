const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const tutorialList = tutorials.map(titles => {
    let title = titles.split(" ");
    const titleList = title.map(words => {
      let word = words.split("");
      word[0] = word[0].toUpperCase();
      return word.join("");
    });
    return titleList.join(" ");
  });
  return tutorialList;
}
