//Масиви -- часткові випадки об'єктів

const arr = ["a", "b", "c"];
const arrObj = {
    0: "a",
    1: "b",
    2: "c",
    'a': 4
    //У всередині обєктів можна створювати вкладені структури
    abc: {
        df: [{}, {}],
        def: {

        }
    }
}
const b = 'b';
arrObj[b] = {};

console.log(arrObj);

arr[10] = '3456';
console.log(arr[10]);
console.log(arr);

console.log(arr[0]);
console.log(arrObj[0]);

// arrObj.b = "1234";
// arrObj['b'] = "1234";
arrObj[b] = "1234"; //якщо обявлена змінна

console.log(arrObj['b']);
console.log(arrObj.b);


const storeName = 'Rewe';
const storeDescription = {
    budget: 10000,
    employees: ["John", "Ann", "Pedro"],
    products: {
        apple: 10,
        banan: 30
    },
    open: true
}

console.log(storeDescription);