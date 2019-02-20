let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
responsesLength=console.log(`${responses.length}`)

// Ask the user what their question is, and store it as a variable called `question`
question=prompt("please ask your question")

// Output a random response to the user's question
output=responses[Math.floor(Math.random()*responses.length)];
console.log(`${output}`)

// Output the number of responses that include the word "yes"

const result = responses.filter(response => response.includes("yes"));
console.log(`${result}`)

// Output the number of responses that include the words "no" or "not"
const result_no = responses.filter(response =>response.includes("no"));
const result_not = responses.filter(response => response.includes("not"));
total= result_no+result_not
console.log(`${total}`)

// Output the alphabetized list of responses
console.log(`${responses.sort()}`)

// Output the first and last responses from the alphabetized list
console.log(`${responses[0]}`)
console.log(`${responses[responses.length - 1]}`)


// Delete two of the negative responses
a=responses.splice(2,1)
b=responses.splice(4,1)
console.log(`${responses}`)

// Reassign 'Ask again later' to the beginning of the array
console.log(`${responses.splice()}`)

// Add 1 response of your choosing to the current list
responses.push("I think so")


// Concat an **array** of 3 additional responses to the current list
newArray=["may be", "May be Not" , "Hopefully yes"]
responses=responses.concat(newArray);
console.log(`${responses}`);

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(`${responses.length}`)
