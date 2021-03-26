// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat (Ralph){
    cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(Broom){
    const catCopy = [...cats , 'Broom'];
    return catCopy;
}
function prependCat(Arnold){
    const catCopy2 = ['Arnold', ...cats];
    return catCopy2;
}
function removeLastCat(){
    const catsSlice = cats.slice(0,2);
    return catsSlice;
}
function removeFirstCat(){
    const catsSplice = cats.slice(1);
    return catsSplice;
}

