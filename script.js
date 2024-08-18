const readline = require("readline")

const below_twenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'];
const below_hundred = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


const numberToWords = (number) => {
  switch (true) {
    case number < 20:
      return below_twenty[number]
    case number < 100:
      const tens = below_hundred[Math.floor(number / 10) - 2]
      const remainder = number % 10
      return remainder === 0 ? tens : tens + " " + below_twenty[remainder]
    case number < 1000:
      const hundreds = below_twenty[Math.floor(number / 100)] + " hundred"
      const remainderBelowHundred = number % 100
      return remainderBelowHundred === 0
        ? hundreds
        : hundreds + " and " + numberToWords(remainderBelowHundred)
    case number === 1000:
      return "one thousand"
    default:
      return "Enter a number between 1 and 1,000"
  }
}

module.exports = numberToWords

if (require.main === module) {
  const readline = require("readline")

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const askQuestion = () => {
    rl.question(
      'Enter a number between 0 and 1,000 (or type "quit" to exit): ',
      (input) => {
        if (input.toLowerCase() === "quit") {
          console.log("Leaving so soon? Bye!")
          rl.close()
          return
        }

        const number = parseInt(input, 10)

        if (isNaN(number) || number < 0 || number > 1000) {
          console.log("Please enter a valid number between 0 and 1,000")
        } else {
          console.log(`that's ${numberToWords(number)}`)
        }
        //loop
        askQuestion()
      }
    )
  }

  askQuestion()
}
