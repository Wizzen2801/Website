```javascript
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    }
    else {
        printNo();
    }
}
// Anonymous function

const printYes = function () {
    console.log('yes!');
}

// Named function

const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)
}
```