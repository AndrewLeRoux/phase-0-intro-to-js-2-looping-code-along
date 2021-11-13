function writeCards(array, eventName) {
    const newArray = [...array];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
}
return newArray;
}

function countDown (integer) {
    while (integer >= 0) {
    console.log(integer);
    integer--;
    }
}