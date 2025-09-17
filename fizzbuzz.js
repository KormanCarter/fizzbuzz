function runFizzBuzz(limit) {
      const results = [];
      for (let num = 1; num <= limit; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
          results.push("FizzBuzz");
        } else if (num % 3 === 0) {
          results.push("Fizz");
        } else if (num % 5 === 0) {
          results.push("Buzz");
        } else {
          results.push(num);
        }
      }
      return results;
    }

    function showFizzBuzz() {
      let amount = parseInt(document.getElementById("fizzbuzz-input").value);
      document.getElementById("fizzbuzz-output").innerHTML =
        runFizzBuzz(amount).join("<br>");
    }