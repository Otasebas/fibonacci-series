 //create a loop that itterates over an array as many times as the num
  //then if length is longer than 1 make the second number a 1
  //then starting a the 3rd index add the previous two numbers

function fibonacci(num) {
  const fibonacci = []

  for(let i = 0; i < num+1; i++){
      fibonacci.push(0+i)
  }
    
  if (fibonacci.length > 2){
   for(let i = 2; i < fibonacci.length; i++){
      fibonacci[i] = (fibonacci[i-1] + fibonacci[i-2])
    }
  }
  return fibonacci[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
