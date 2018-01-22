function totalDigitRekursif(angka) {
    // you can only write your code here!
    let str = angka.toString();

    if (str.length == 1){
        return Number(str) 
    } else {
        return Number(str[0]) + totalDigitRekursif(Number(str.slice(1)))
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5