function areaOfCircle(x2) {
    

    //Log the string "Area of a circle" to the console.
    console.log('Area of a cirle');

    //Declare a variable, name it pi, and assign it the value 3.14 in one statement.
    var pi=3.14;

    //Log the type of pi to the console.
    console.log(pi);

    //Declare a variable, name it radius, and assign the value 5 to it in one statement.
    var radius=x2;

    //Log the type of radius to the console.
    console.log(radius);

    //Declare a variable called area which is calculated by pi and radius to get the area of a circle
    var area=pi*radius*radius;

    //Log the result to the console in this format using string concatenation: string + value + string ...
    console.log("The area of a circle given the radius "+radius+" (m) is "+area+" (m2)");

    //Change the value of the radius to 7 and log the result again using template literal. string ${value} string
    console.log(`The area of a circle given the radius ${radius} (m) is  ${area} (m2)`);
}

function opAndCompare(x3) {
    console.log ("Part 1 : Operators expressions");
    console.log( 10 + 24===34);
    console.log( "10" + "24"==="1024");
    console.log( "Hello" + " " + 2021==="Hello 2021");
    console.log( 1 + 2 * 3===7);
    console.log( (1 + 3) ** 2===16);
    console.log( 1 / 0===Infinity);
    console.log( 6 % 2===0);
    console.log( 5.5 % 2===1.5);
    console.log( Number("123")===123);
    console.log( typeof(1 + "")===typeof(" "));

    console.log (" Part 2 : Comparison expressions");

    console.log( 5 == "5"===true);
    console.log( 5 === "5"===false);
    console.log( 8 != 8.0===false);
    console.log( 8 !== 8.0===false);
    console.log( "true" ==="true");
    console.log( 4 <= 4.0===true);
    console.log( 7 >= 7===true);

    console.log (" Part 3 : Logical expressions");
    console.log( true && true===true);
    console.log( true && false===false);
    console.log( true || true===true);
    console.log( false || true===true);
    console.log( !true===false);
    console.log( !false===true);
    console.log( (false && (true || true))===false);
    console.log( false && true || true===true);
    
}

function number(x41) {
    let a=x41;
    if (a>0) {console.log(`${a} is a positive number. `)
    }
    else if (a===0) {console.log(`${a} is zero`)
    }
    else {console.log(`${a} is a negative number. `)}
    
}

function minmax(a,b,c) { 
    let min=a;
    let max=c;
    if (a>=b) {

        if (b>=c) {
            min=c;
            max=a;          
        }

        else if (a>=c) {
            max=a;
            min=b;            
        }

        else {
            max=c;
            min=b;
        }
    }

    else if (a>=c) {
        max=b;
        min=c;   
    }

    else if (b>=c) {
        max=b;
        min=a;        
    }
    else {
        max=c;
        min=a;
    }
    console.log(`${min} is the smallest number, and ${max} is the biggest number between a = ${a},b = ${b}, and c = ${c}`)
}

function ascDes(a,b) {
    
    if (a>=b) {
        for (let big = a; big >= b; big--) {
        console.log(big);
        }
    }

    else {
        for (let small = a; small <= b; small++) {
        console.log(small);
        }
    }    
}

function sumToEnd(a,b) {
    let result=0;
    for (let call = a; call <=b; call++) {
        result=result +call;
    }
    console.log(`Sum of numbers from ${a} to ${b} is: ${result}`)
}

function sumDigits(x) {
    let last=x%10;
    let b=x-x%10;
    for (let a =b ; a >0; a/=10) {
        last=a%10 +last;
    }
    console.log(last)
}

function problem1() {
    console.log("Finally, it work!")
}

function problem02() {
    console.log("DP")
}

function yourName(a) {
    console.log(`You see, "${a}"" is your name`)        
}

function conditional(x41) {
    let a=x41;
    if (a>0) {console.log(`${a} is a positive number. `)
    }
    else if (a===0) {console.log(`${a} is zero`)
    }
    else {console.log(`${a} is a negative number. `)}
}
    
function seriesOfNumber(a,b) {
    
    if (a>=b) {
        for (let big = a; big >= b; big--) {
        console.log(big);
        }
    }

    else {
        for (let small = a; small <= b; small++) {
        console.log(small);
        }
    }    
}

function leapyears(start,end) {
    let a=0;
    if (start%4>2) {a=start+1;        
    }
    else if (start%4>1) {a=start+2;        
    }
    else if (start%4>0) {a=start+3;
    }
    else {a=start
    }

    for (let year = a; year <= end; year+=4) {
        console.log(year);

    }
}

function wrapvalue(x,y) {
    let a=x;
    let b=y;
    console.log(`at the begin value of a was ${a} and b was ${b}`)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(`at the end value of a was ${a} and b was ${b}`)
}
    
function random() {
    console.log( Math.random())
    
}

function magic8() {
    let a= Math.random();
    a=a*10;
    a=Math.ceil(a);
    a=a%2;
    if (a>0) {
    console.log("No");      
    }
    else {console.log("Yes")}  
}

magic8()