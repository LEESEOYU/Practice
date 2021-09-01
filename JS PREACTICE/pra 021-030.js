/* 021 산술 연산자
var x =10;
x += 5;
x *= 2;
console.log(x);
var y = 10;
y -= 5;
y /= 5;
console.log(y);*/

/* 021 -1 
console.log(15 % 4);
console.log(3 ** 3);
console.log(+10);
console.log(-10);
var value = 10;
++value;
--value;
console.log(value);*/

/* 022 비교연산자
console.log(5 == 5);
console.log("5" == 5);
console.log(5 == '5');
console.log(5 != 1);
console.log(5 !="1");
console.log(5 !="5");
console.log(5 === 5);
console.log(5 ==="5");
console.log(5 !== 10);
console.log(5 !== "5");*/

/* 022-1 
console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 6);
console.log(5 >= 5);*/

/* 023 논리 연산자
//AND 
console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 == 5);
console.log(5 == 5 && `다른 문장 1` == `다른 문장 2`);

//OR
console.log(true || false);
console.log(false || false);
console.log('문장' == '문장' || 5 == 10);

//NOT
console.log(!true);
console.log(!false);
console.log(!5);
console.log(! '문장');
console.log(!!5);
console.log(!!'문장');*/

/* 024 삼항 연산자
var condition = 5 > 10;
condition ? console.log('Left') : console.log("Right");
var result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식 1"
):(
    console.log("삼항 연산식의 두 번째 표현식 입니다."),
    "표현식 2"
);
console.log(result);*/

/* 025 비트 연산자
console.log(14 & 11);
console.log(~14);
console.log(14 | 11);
console.log(14 ^ 11);
console.log(2 << 2);
console.log(14 >> 1);
console.log(14 >>> 2);*/

/* 026 자료형 변환
console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2);

console.log('-연산자를 활용한 자료형 변환');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num);
console.log(typeof num);

console.log('-함수를 이용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num= Number(str);
console.log(num);
console.log(typeof num);*/

/*027 배열
var arr = [1,2,3,4,5];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);*/

/*028 객체 ! 
var family = {
    'address':'seoul',
    members: {},
    addFamily: function(age,name,role){
        this.members[role] = {
            age : age,
            name: name
        };
    },
    getHeadCount: function(){
        return Object.keys(this,this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(30, 'dangdangi', 'dog');
console.log(family.getHeadCount());*/

/* 029  객체 2
var family = {
    'address':'seoul',
    members: {},
    addFamily: function(age,name,role){
        this.members[role] = {
            age : age,
            name: name
        };
    },
    getHeadCount: function(){
        return Object.keys(this,this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());

var printMembers = function(){
    var members = family.members;
    for(role in members){
        console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
    }
};

printMembers();

var members = family.members;
members['nephew'] = {age: 3, name: 'hyun'};
members.niece = {age: 5, name: 'lyn'};
delete members.aunt;
delete members['dog'];
printMembers();*/

/* 030 ES6 
var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role){
    this.members[role] = {age, name};
};

var getHeadCount = function(){
    return Object.keys(this.members).length;
};

var family = {address, members, addFamily, getHeadCount};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());*/