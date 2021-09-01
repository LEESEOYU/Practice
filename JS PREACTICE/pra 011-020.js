/*011  조건문 if.else if, else
var number = 2;
if(number == 1){
    console.log('number는 1 입니다.');
} else if(number == 2){
    console.log('number는 2 입니다.');
} else if(number == 3){
    console.log('number는 3 입니다.');
}else {
    console.log('number는 1,2,3중에 해당되는 것이 없습니다.');
}*/

/* 012 조건문 switch
var subject = '파이썬';
switch (subject){
    case 'C언어':
        console.log("초보자를 위한 C++ 200제 ");
        break;
    case '자바스크립트':
        console.log("초보자를 위한 자바스크립트 200제 ");
        break;
    case '파이썬':
         console.log("초보자를 위한 파이썬 200제 ");
         break;
}*/

/* 013 반복문 for
for (var i = 0; i < 10; i++){
    console.log(i+'번째 반복문 입니다.');
}*/

/*for
for (초기값; 조건식; 어떤 간격으로){
    실행할 문장
}*/

/* 013-1 for 활용
var homeTown = [
    {name: '다원', place:'부천', city:'경기도'},
    {name: '인성', place:'특별시', city:'서울'},
    {name: '로운', place:'서울'},
    {name: '준호', place:'서울', city:'고양'}
];
for (var i = 0; i< homeTown.length; i++){
    var h = homeTown[i];
    if(!h|| !h.city) continue;

    console.log(i+'번째 실행입니다.');

    if(h.name === '다원'){
        console.log(h.name+'의 고향은 '+ h.city + ' ' + h.place + ' 입니다' )
    }
}*/

/*014 for in
var store = {snack: 1000, flower: 5000, beverage: 2000};
for (var item in store){
    if(!store.hasOwnProperty(item)) continue;
    console.log(item+'가격이 '+store[item]+' 입니다.')
}*/

/* 015 반복문 while !
var homeTown = [
    {name: '진', city: '과천'},
    {name: '남준', place: '일산',city: '고양'},
    {name: '호석', place: '광주',city: '전라도'},
    {name: '지민', place: '부산',city: '경상도'}
];

var inHomeTown = function(h, name){
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);
}

if (h.name === name){
    console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
    return true;
}
return false;

var h;
while (h = homeTown.shift()){
    if (!h.name || !h.place ||!h.city) continue;
    var result = isHomeTown (h, '호석');
    if(result) break;
}

var i=0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];

do{
    homeTown[i] ={name: names[i], city:cities[i]};
    i++;
} while (i < 4);

console.log(homeTown);*/

/* 017 문자형
console.log("I'm in jeju");
console.log('Sewha ocean is wonderful');
console.log(`Have you ever eaten Makgeolil?`);
console.log("This is the frist line\n")*/

/* 018 Boolean
console.log(7 > 3);
console.log(7 < 3);*/

/*019 null&undefined
var value = null;
console.log(value);
console.log(typeof value);
var value;
console.log(value);
console.log(typeof value);*/

/*020 템플릿 문자열
var cart = [
    {name: '옷', price: 2000},
    {name: '가방', price: 1000}
];

var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable =
`<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>`

console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello'+personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);*/