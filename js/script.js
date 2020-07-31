//1
const getRandomArray = (length, min, max) => new Array(length).fill('').map(() => 
Math.floor(Math.random() * (max - min + 1)) + min)

document.writeln(`<p> №1:  ${getRandomArray(15, 1, 100)}</p>`);
//2
function getModa(numbers) {
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}
document.writeln(`<p> №2:  ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);

//3
function getAverage(...numbers) {
    return numbers.reduce((a, b) => Math.floor(a + b)) / numbers.length;
}
document.writeln(`<p> №3:  ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);


//4
Array.prototype.median = function () {
    return this.slice().sort((a, b) => a - b)[Math.floor(this.length / 2)]; 
  };
  document.writeln(`<p> №4:  ${[6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2].median()}</p>`)

//5
const filterEvenNumbers = (...numbers) =>{
    const evenNumb = numbers.filter(num => num % 2)
    return evenNumb
}
document.writeln(`<p> №5:  ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>`)
//6
const countPositiveNumbers = (...numbers) => {
    const positiveNumbers = numbers.filter(num => num > 0);
    return positiveNumbers.length
}
document.writeln(`<p> №6:  ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>`)

//7
const getDividedByFive = (...numbers) =>{
const numbersDividedByFive = numbers.filter(num => num % 5 === 0)
return numbersDividedByFive
}
document.writeln(`<p> №7:  ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`)


//9
const divideByThree = (word) => {
    let isDivideWord = [];
    for(let i = 0; i < word.length; i+=3){
        isDivideWord.push(word.slice(i,i+3));
    }
    return isDivideWord;
}
document.writeln(`<p> №9:  ${divideByThree("Commander")}</p>`)


