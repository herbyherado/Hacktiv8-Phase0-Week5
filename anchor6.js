function kaliTerusRekursif(angka) {
    // you can only write your code here!

    if (angka < 10){
        return angka;
    } else {
        angka =  angka.toString().split('');
        let totalKali = 1;

        for (i = 0; i < angka.length; i++){
            totalKali *= angka[i]; 
        }
        return kaliTerusRekursif(totalKali)
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
