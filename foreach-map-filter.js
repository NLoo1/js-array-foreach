/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    // console.log(arr + " OLD ARRAY")
    const newArr = [];
    // for(let num of arr){
    //     newArr.push(num*2);
    // }
    // console.log(newArr + " NEW ARRAY");
    // return newArr;

    arr.map(function(num, ){
        newArr.push(num*2);
    })
    // console.log(newArr);
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const newArr = [];

    arr.filter(function(num){
        if(num % 2 == 0) newArr.push(num);
    })
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const newArr = [];

    arr.filter(function(i){
        newArr.push(i[0] + i[i.length-1]);
    })
    // console.log(newArr);
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArr = [];

    arr.map(function(e){
        newArr.push({
            name: e.name,
            title: value
        })
    })
    // console.log(newArr);
    return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    // const newArr = [];
    // const strArr = Array.from(str);
    // // console.log(strArr);

    // strArr.filter(function(strArr){ // Go through strArr
    //     if('aeiouAEIOU'.includes(strArr)){  // If there are vowels in strArr:
    //         for(let name in newArr){ // Go through newArr.
    //             if(name[1].includes('aeiouAEIOU')){ // If newArr has a vowel property, increment value by 1
    //                 name[1] = name[1] + 1;
    //             }
    //             else{ // If newArr does not have that vowel property, make new key and value
    //                 name[strArr] = 1;
    //             }
    //         }
        
    //     };
    // })
    // // console.log(newArr + " NEW ARR");
    // console.log(Object.entries(newArr));
    // return newArr;
   

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Split str. Use filter() to push vowels to vowelChars
    const vowelChars = str.split('').filter(char => vowels.has(char.toLowerCase()));

    const vowelCounts = {};

    for (const char of vowelChars) {
      const lowercaseChar = char.toLowerCase();
      if (vowelCounts[lowercaseChar]) { //If vowel key exists, increment property by 1
        vowelCounts[lowercaseChar]++;
      } else {
        vowelCounts[lowercaseChar] = 1; // If not, add new key
      }
    }
//   console.log(vowelCounts);
  return vowelCounts;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    const newArr = arr.map((num) => num*2);

    return newArr;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    const newArr = arr.map((char, index) => char*index);
    
    return newArr;
    
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    const newArr = arr.map((obj) =>  obj[key])
    return newArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    const newArr = arr.map((obj) => obj.first + " " + obj.last);
    return newArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    const newArr = arr.filter(obj => obj.hasOwnProperty(key));
    return newArr;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const newArr = arr.filter(obj => obj === searchValue);
    return newArr[0];
}
    
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const newArr = arr.filter(obj => obj.hasOwnProperty(key));
    // console.log(searchValue + " AAA");
    if(newArr[0][key] == searchValue) return newArr[0];
    else return undefined;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Split str. Use filter() to push vowels to vowelChars
    const vowelChars = str.split('').filter(char => !(vowels.has(char.toLowerCase())));

    let output = "";
    for(let i = 0; i < vowelChars.length; i++){
        output+= vowelChars[i];
    }

    return output.toLowerCase();

}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    const newArr = arr.filter(obj => obj%2);
    return newArr.map(obj => obj*2);
}
