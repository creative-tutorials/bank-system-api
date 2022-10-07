'use strict';

const banks =[
    {'id': 302, 'name': '9mobile 9Payment Service Bank', 'slug': '9mobile-9payment-service-bank-ng', 'code': '120001', 'longcode': '120001', 'gateway': '', 'pay_with_bank': false, 'active': true, 'country': 'Nigeria', 'currency': 'NGN', 'type': 'nuban', 'is_deleted': false, 'createdAt': '2022-05-31T06:50:27.000Z', 'updatedAt': '2022-06-23T09:33:55.000Z'},
    {'id': 174, 'name': 'Abbey Mortgage Bank', 'slug': 'abbey-mortgage-bank', 'code': '801', 'longcode': '', 'gateway': null, 'pay_with_bank': false, 'active': true, 'country': 'Nigeria', 'currency': 'NGN', 'type': 'nuban', 'is_deleted': false, 'createdAt': '2020-12-07T16:19:09.000Z', 'updatedAt': '2020-12-07T16:19:19.000Z'}, 
    {'id': 188, 'name': 'Above Only MFB', 'slug': 'above-only-mfb', 'code': '51204', 'longcode': '', 'gateway': null, 'pay_with_bank': false, 'active': true, 'country': 'Nigeria', 'currency': 'NGN', 'type': 'nuban', 'is_deleted': false, 'createdAt': '2021-10-13T20:35:17.000Z', 'updatedAt': '2021-10-13T20:35:17.000Z'}, {'id': 627, 'name': 'Abulesoro MFB', 'slug': 'abulesoro-mfb-ng', 'code': '51312', 'longcode': '', 'gateway': null, 'pay_with_bank': false, 'active': true, 'country': 'Nigeria', 'currency': 'NGN', 'type': 'nuban', 'is_deleted': false, 'createdAt': '2022-08-31T08:26:20.000Z', 'updatedAt': '2022-08-31T08:26:20.000Z'}, 
]


//  console.log(Object.keys(banks));
 console.log(Object.entries(banks));
 let objEntries = Object.entries(banks);

//  console.log(Object.fromEntries(objEntries));


 let entries = Object.entries(banks)
 let datas = entries.map( ([key, val] = entry) => {
  return `${key} and ${val}`;
});

console.log(datas);

const findSlugByName = name => {
    return Object.values(banks).find(obj => obj.name === name)?.name;
}

// console.log(findSlugByName)

// console.log(findSlugByName('Abbey Mortgage Bank'));

// const objects = banks.find(obj => obj.id === 302);
// console.log(objects);
let result = banks.map((bank) => {
    return bank.name;
})

console.log(result);
