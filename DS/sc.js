function calculate(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          result++;
        }
      }
    }
    return result;
  }
  console.log(calculate(5));