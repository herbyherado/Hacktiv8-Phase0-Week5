/*

Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. 
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan 
akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

*/

function shoppingTime(memberId, money) {
    // you can only write your code here!
    availableItem = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    shoppingList = [];
    payment = 0;

    // if memberID is empty, null, etc will catch and return output
    if (!memberId){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }

    // if money is less than 50.000 will stop process & return output
    if (money < 50000){
      return 'Mohon maaf, uang tidak cukup';
    }

    // iterate over the length of sale items
    for (i = 0; i < availableItem.length; i++){
      // checks for current money and if not purchased previously
      if (money > 1500000 && shoppingList.indexOf(availableItem[0]) == -1){
        shoppingList.push(availableItem[0]);
        payment += 1500000;
      }
      else if (money > 500000 && shoppingList.indexOf(availableItem[1]) == -1){
        shoppingList.push(availableItem[1]);
        payment += 500000;
      }
      else if (money > 250000 && shoppingList.indexOf(availableItem[2]) == -1){
        shoppingList.push(availableItem[2]);
        payment += 250000;
      }
      else if (money > 175000 && shoppingList.indexOf(availableItem[3]) == -1){
        shoppingList.push(availableItem[3]);
        payment += 175000;
      }
      else if (money > 50000 && shoppingList.indexOf(availableItem[4]) == -1){
        shoppingList.push(availableItem[4]);
        payment += 50000;
      }
    }

    let profile = {
      memberId: memberId,
      money: money,
      listPurchased: shoppingList,
      changeMoney: money - payment
    }

    return profile
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja