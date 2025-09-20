 let name='hello';
 var name1='world';
 const name3='something';

            //Array Practice Questions              
            //1. Sum of all elements
// const arr = [2, 4, 6, 8];

// const sum = arr.reduce((total, num) => total + num, 0);

// console.log("Sum:", sum); 


            //2.Find maximum element

// const arr = [12, 45, 67, 23];

// const largest = arr => Math.max(...arr);

// console.log("Largest number:", largest(arr)); 


            //3. Count even numbers

// const arr = [1, 2, 3, 4, 6, 7];

// const countEven = arr => arr.filter(num => num % 2 === 0).length;

// console.log("Even numbers count:", countEven(arr)); // Output: 3

            //4. Reverse an array (using loop)

// const arr = [10, 20, 30, 40];

// const reverseArray = arr => arr.slice().reverse();

// console.log("Reversed array:", reverseArray(arr)); 
// Output: [40, 30, 20, 10]


            //5.Remove duplicates

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const removeDuplicates = arr => [...new Set(arr)];

// console.log("Array without duplicates:", removeDuplicates(arr));
// Output: [1, 2, 3, 4, 5]

            //6.Filter odd numbers
// const arr = [5, 10, 15, 20, 25];

// const oddNumbers = arr.filter(num => num % 2 !== 0);

// console.log("Odd numbers:", oddNumbers);
// Output: [5, 15, 25]


            //7.Square each number
// const arr = [2, 3, 4];

// const squares = arr.map(num => num * num);

// console.log("Squares:", squares);
// Output: [4, 9, 16]


            //8.Double and filter
// const arr = [2, 5, 8, 12];

// const result = arr
//   .map(num => num * 2)       // double each number
//   .filter(num => num > 10);  // keep only numbers greater than 10

// console.log("Result:", result);
// Output: [16, 24]

            //9.Sum using reduce
// const marks = [50, 60, 70, 80];

// const total = marks.reduce((sum, mark) => sum + mark, 0);

// console.log("Total Marks:", total);
// Output: 260

                //10.Find product of all numbers
// const arr = [2, 3, 4];

// const product = arr.reduce((result, num) => result * num, 1);

// console.log("Product:", product);
// Output: 24

                //11.Check if array is sorted
// const isSorted = arr => arr.every((num, i, array) => i === 0 || array[i - 1] <= num);

// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([3, 2, 1]));    // false

                //12.Second largest element
// const arr = [12, 35, 1, 10, 34, 1];

// const secondLargest = arr => {
//   const unique = [...new Set(arr)];        // remove duplicates
//   unique.sort((a, b) => b - a);            // sort descending
//   return unique[1];                        // pick 2nd element
// };

// console.log("Second Largest:", secondLargest(arr)); 
// Output: 34

                //13.Frequency of each element
// const arr = [1, 2, 2, 3, 1, 4, 2];

// const countOccurrences = arr =>
//   arr.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});

// console.log(countOccurrences(arr));
// Output: { '1': 2, '2': 3, '3': 1, '4': 1 }

                //14.Flatten nested array
// const arr = [[1, 2], [3, 4], [5, 6]];

// const flatten = arr => arr.reduce((flat, subArr) => flat.concat(subArr), []);

// console.log("Flattened array:", flatten(arr));
// // Output: [1, 2, 3, 4, 5, 6]

                //15.Matrix multiplication (nested loops)
// const multiplyMatrices = (A, B) => {
//   let rowsA = A.length, colsA = A[0].length;
//   let rowsB = B.length, colsB = B[0].length;

//   if (colsA !== rowsB) {
//     throw new Error("Matrix multiplication not possible");
//   }

//   // Initialize result matrix with zeros
//   let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

//   // Multiply
//   for (let i = 0; i < rowsA; i++) {
//     for (let j = 0; j < colsB; j++) {
//       for (let k = 0; k < colsA; k++) {
//         result[i][j] += A[i][k] * B[k][j];
//       }
//     }
//   }
//   return result;
// };

// const A = [[1, 2], [3, 4]];
// const B = [[2, 0], [1, 2]];

// console.log("Result:", multiplyMatrices(A, B));
// // Output: [[4, 4], [10, 8]]

            //16.Diagonal sum of matrix
// const diagonalSums = matrix => {
//   const n = matrix.length;

//   const mainDiagonal = matrix.reduce((sum, row, i) => sum + row[i], 0);
//   const antiDiagonal = matrix.reduce((sum, row, i) => sum + row[n - 1 - i], 0);

//   return { mainDiagonal, antiDiagonal };
// };

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const { mainDiagonal, antiDiagonal } = diagonalSums(matrix);

// console.log("Main diagonal:", mainDiagonal);   // 15
// console.log("Anti diagonal:", antiDiagonal);   // 15

                //17.Find longest word
// const arr = ["apple", "banana", "cherry", "watermelon"];

// const longestString = arr.reduce((longest, current) =>
//   current.length > longest.length ? current : longest
// , "");

// console.log("Longest string:", longestString);
// Output: "watermelon"

                //18.Group even and odd
// const arr = [1, 2, 3, 4, 5, 6];

// const rearrange = arr => [
//   ...arr.filter(num => num % 2 === 0), // evens first
//   ...arr.filter(num => num % 2 !== 0)  // then odds
// ];

// console.log("Rearranged array:", rearrange(arr));
// Output: [2, 4, 6, 1, 3, 5]

            //19.Chained map/filter/reduce
// const arr = [1, 2, 3, 4, 5];

// const sumOfSquaresEven = arr
//   .filter(num => num % 2 === 0)   // keep even numbers → [2, 4]
//   .map(num => num * num)          // square them → [4, 16]
//   .reduce((sum, num) => sum + num, 0); // sum → 20

// console.log("Sum of squares of evens:", sumOfSquaresEven);
// Output: 20

                //20.Rotate array
const arr = [1, 2, 3, 4, 5];
const k = 2;

const rotateRight = (arr, k) => {
  const n = arr.length;
  k = k % n; // handle if k > n
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
};

console.log("Rotated array:", rotateRight(arr, k));
// Output: [4, 5, 1, 2, 3]

