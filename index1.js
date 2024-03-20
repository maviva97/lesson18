const arr = [1, 2, 3, 4]
const strArr = ['Vasile', 'Anton', 'Maria']
const maped = arr.map((item) => {
    if (item > 1) {
        return item - 1;
    }
    return item
})
console.log(maped);
const someValue = arr.some((item, index) => {
    return item > 3;
})
console.log(someValue);
const strArrayValue = strArr.some((item) => item.length > 4);
console.log(strArrayValue);
const everyValue = arr.every((item, index) => {
    console.log(index);
    return typeof item === "number"
})
console.log(everyValue);

const findItem = arr.find((item) => {
    return item > 4;
})
console.log(findItem);

const filterItem = arr.filter((item) => {
    return item > 4;
})
console.log(filterItem);

const indexOfItem = arr.findIndex((item) => {
    return item > 3;
})
console.log(indexOfItem);

const sorted = arr.sort((a, b) => {
    return b - a > 0 ? -1 : 1; //cresc
    // return a - b >0 ? -1 : 1; desc   
})
console.log(sorted);
const sort = strArr.sort().reverse()
console.log(sort);
const arrObj = [{ nume: 'Vinz' }, { nume: 'Alex' }, { nume: 'Selena' },]
const sor = arrObj.sort((a, b) => {
    return a.nume < b.nume ? -1 : 1;
})
console.log(sor)
