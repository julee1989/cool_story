// var natural = require('natural');
// var  tokenizer = new natural.WordTokenizer();
// console.log(tokenizer.tokenize("your dog has fleas."));


// console.log(natural.JaroWinklerDistance("dixon","dicksonx"))
// console.log(natural.JaroWinklerDistance('not', 'same'));

// console.log(natural.LevenshteinDistance("ones","onez"));
// console.log(natural.LevenshteinDistance('one', 'one'));
var natural = require('natural');

const prompt = require('souffleur')
var question ='What is your full name?'
var  tokenizer = new natural.WordTokenizer();
prompt(question)
  .then(function(results){
  	console.log(tokenizer.tokenize(results[question]));
  })
// Returns {"Any question": "some answer"}
  
