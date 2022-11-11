'use strict';

// для настройки создаем файл с название .prettierrc
// {
//    "singleQuote": true    настройка кавычек
//    "arrowParens": "avoid"   настройка скобок стрелочной функции(убирает скобки если входящий парметр 1)
// }

// const myVar = 'asdq';
// while (false) {}

// const calcAge = birthYear => 2021 - birthYear;

// console.log();

//-----------------------------------------------------------------------------------

// let value = [1, 2, 3, 4, 5];
// let value = 12345;
// let value = '12345';

// let value = false;

// console.log(value.length);

const typeValue = typeof value;
// console.log(typeValue);

const reverseValue = function (value) {
   let retVal = '';
   if (
      typeValue !== 'string' &&
      typeValue !== 'number' &&
      !Array.isArray(value)
   ) {
      return console.log(`ЭТО ${typeValue} ДУРАЧЕГ`);
   } else if (typeValue === 'string') {
      for (let i = value.length - 1; i >= 0; i--) {
         retVal += value[i];
      }
      return retVal;
   } else if (typeValue == 'number') {
      value = value + '';
      for (let i = value.length - 1; i >= 0; i--) {
         retVal += value[i];
      }
      return retVal;
   } else if (Array.isArray(value) && value.length) {
      return value.reverse();
   }
};

reverseValue(value);

console.log(value);
console.log(typeValue);
