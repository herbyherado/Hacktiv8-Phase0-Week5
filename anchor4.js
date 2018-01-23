/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut 
yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                      ['Baju Zoro', 500000, 2],
                      ['Sweater Uniklooh', 175000, 1]
                    ];

  // you can only write your code here!
  let result = [];
  
  // will return result directly if input is empty array
  if (shoppers.length == 0){
    return result;
  }

  // iterate over the listBarang to create new array of object - which will be used to be processed & display the results
  for (i = 0; i < listBarang.length; i++){
    let retail = {};

    retail.product = listBarang[i][0];
    retail.shoppers = [];
    retail.leftOver = listBarang[i][2];
    retail.totalProfit = 0;

    result.push(retail)
  }

  // iterate over the input array
  for (j = 0; j < shoppers.length; j++){

    // checks for input array product
    switch (shoppers[j].product){  
      case 'Sepatu Stacattu':
        // check if amount to be shopped is greater than of the current stock; if greater then stop process and continue to next sequence
        if (shoppers[j].amount > result[0].leftOver){
          continue;
        // if passes previous check, then will add name to result, decrease the stock, and add totalProfit
        } else {
          result[0].shoppers.push(shoppers[j].name);
          result[0].leftOver -= shoppers[j].amount;
          result[0].totalProfit += shoppers[j].amount * listBarang[0][1];
          break;
        }
      case 'Baju Zoro':
        if (shoppers[j].amount > result[1].leftOver){
          continue;
        } else {
          result[1].shoppers.push(shoppers[j].name);
          result[1].leftOver -= shoppers[j].amount;
          result[1].totalProfit += shoppers[j].amount * listBarang[1][1];
          break;
        }
      case 'Sweater Uniklooh':
        if (shoppers[j].amount > result[2].leftOver){
          continue;
        } else {
          result[2].shoppers.push(shoppers[j].name);
          result[2].leftOver -= shoppers[j].amount;
          result[2].totalProfit += shoppers[j].amount * listBarang[2][1];  
          break;
        }
    }
  }
  
  return result
  
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]