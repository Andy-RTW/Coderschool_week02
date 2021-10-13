function ziffZubb(no1,no2) {
    for (let a = no1; a <=no2; a++) {
        if (a%3===0 && a%5===0) {
            console.log(a + " is ziffZubb")
        }

        else    if (a%3===0) {
            console.log(a +" is ziff")
        }

        else    if (a%5===0) {
            console.log(a + " is Zubb")
        }

        else {console.log(a)}
        
    }
}

function gcd(n31,n32) {
    let min=0;
    let max=0;

    if (n31>=n32) {
        min=n32;
        max=n31;        
    }

    else{
        min=n31;
        max=n32;
    }

    for (let a = min; a >=0; a--) {
        if (n31%a===0 && n32%a===0) {
            console.log(`The greatest evenly devided number of ${n31} and ${n32} is ${a}`);
            return a;
        }
        else {}
    }
}

function lcm(n41,n42) {
    let a=gcd(n41,n42);
    let b=n41*n42/a;
    console.log (`The least common multiple number of ${n41} and ${n42} is ${b}`);    
}

function isPrime(a) {
    if (a<2) {
        console.log(`${a} is NOT a Prime number`)
    }

    else {
        for (let b = a-1; b>=1; b--) {
            if (a%b===0) {  

                if (b>1) {
                    console.log(`${a} is NOT a Prime number`);
                    return a;
                }

                else {
                    console.log(`${a} is a PRIME number`)
                    return a;
                }
            }  
            
            
        }
    }
}


function nthPrime(n) {
    
    let a=0;

    for (let number = 2; number < number+1; number) {

        for (let check = number-1; check>=1; check--) {

            if (number%check===0) {

                if (check===1) {

                    a=a+1;

                    if (a===n) {console.log(number);
                        return number;                        
                    }
                    else {
                        number=number+1;
                    }
                }

                else{
                    number=number+1;
                }
                
            }
            
        }
            
    }
        
}


function minutes() {
console.log (Date.now()/60);
}

function untilNow() {
    let sec=Math.floor (Date.now()/1000);
    let lastSec=sec%60;

    let min=Math.floor(sec/60);
    let lastMin=min%60;

    let hour=Math.floor(min/60);
    let lastHour=hour%24;

    let day=Math.floor(hour/24); //day to calculate year

    let leafPeriod=Math.floor(day/(365*4+1));
    let leafDay= leafPeriod*(365*4+1);
    let lastYear=Math.floor((day-leafDay)/365)+leafPeriod*4;
    
    day=(day-leafDay)%365;  // day to calculate remain day and month

    let lastMonth=Math.floor(day/365*12);
    let lastDay=Math.floor( day%(365/12));

    console.log(` It has been ${lastYear} years ${lastMonth} months ${lastDay} days ${lastHour} hours ${lastMin} minutes    ${lastSec} seconds from That Long Story until now
    `);

}

function random5() {
    for (let index = 1; index <= 5; index++) {
        console.log (Math.random());
    }   
}

function getRandomInt10() {
    for (let index = 1; index <= 100; index++) {
        var a=Math.floor(Math.random()*10);
        if (a>9 || a<0) {
            console.log(`Something wrong at ${index}th checks with ${a} `)
        }
        
        else {console.log (a);
        }
    }
}

function getRandomInt(start,end) {
    for (let index = 1; index <= 10; index++) {
        let a=start+Math.floor(Math.random()*(end-start+1));

        if (a<start || a>end) {
            console.log(`Dammmmmmmmmn! It's wrong somewhere man T.T`)
        }
        else {console.log(a)}
    }
    
}

function getRandomItem(array) {
    let items=array[
            Math.floor(
                Math.random()* (array.length)
            )
        ]
    console.log(items);
}

function TriangleOfNumber(n) {
    for (let a = 1; a <=n; a++) {
        var string="";
        for (let b = 1; b <= a; b++) {
            string=string + a+" ";
        }
        console.log(string);
        
    }
    
}

function board(x) {
    for (let a = 1; a <=x; a++) {
        let string=""

        for (let b = 1; b <=x; b++) {
            if (a%2===1) {
                if (b%2===1) {
                    string="0  "+string;
                }
                else{string="1  "+string;
                }
                
            }
            else if (b%2===1){
                string="1  "+string;
            }
            else{string="0  "+string
            }     
        }       

        console.log(string);        
    }
    
}




function earnEachDay(day) {
    var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
    console.log(`Peter earned $${workingHours[day-1]*25} today`)
}

function paidPeter() {
    var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
    let paid=0;
    for (let a = 1; a <= workingHours.length; a++) {
        paid=paid+workingHours[a-1];
    }
    console.log(`Peter was paid $${paid} in the last 2 weeks.`)
}

function yearIncome() {
    var working=[];
    for (let index = 1; index <=5; index++) {
        let time=6+Math.floor((Math.random()*3));
        working=working.push(time);               
        console.log(working);            
    }
}

const one = 1;

if (one) {
  console.log("Is truthy");
}

const zero = 0;

if (zero) {
  console.log("Is truthy");
} else {
  console.log("Isn't truth");
}


