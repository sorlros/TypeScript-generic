"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수를 생성하는 문제..
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(39).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("Mark").length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
