# Indian Pincode Database <img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" width="20" height="20" />

Library for find pincode data post office, district, state. Written in [TypeScript](https://www.typescriptlang.org/).

## Installation

```
npm install indian-pincode-db
```

## Usage

```
import {
  findByPincode,
  findByPostOffice,
  findByDistrict,
  findByState,
  states,
  districts,
} from 'indian-pincode-db';

// Example 1 findByPincode
const pincodeDetails = findByPincode(400021);
console.log(pincodeDetails);
// [
//     {
//       officeName: 'Nariman Point',
//       pincode: 400021,
//       officeType: 'SO',
//       district: 'MUMBAI',
//       stateName: 'Maharashtra'
//     }
// ]

// Example 2 findByPostOffice
const pincodeDetails2 = findByPostOffice('Bandra');
console.log(pincodeDetails2);
// [
//     {
//       officeName: 'Bandra West',
//       pincode: 400050,
//       officeType: 'SO',
//       district: 'MUMBAI SUBURBAN',
//       stateName: 'Maharashtra'
//     }
//   ]

// Example 3 findByDistrict
const pincodeDetails3 = findByDistrict('Thane');
console.log(pincodeDetails3);

// Example 4 findByState
const pincodeDetails4 = findByState('Maharashtra');
console.log(pincodeDetails4);

// Example 5 states
console.log(states);
// array of states

// Example 6 districts
const maharashtraDistricts = districts['Maharashtra'];
console.log(maharashtraDistricts);
// array of districts

```

## License

[MIT](./LICENSE) © [Vivek Thakur](https://github.com/vivekvt)
