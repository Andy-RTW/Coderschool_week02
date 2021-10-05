//if the number is divisible by 3, print "Ziff"
//if the number is divisible by 5, print "Zubb"
//if the number is divisible by 3 AND 5, print "ZiffZubb"
//if the number is not divisible by 3 or 5 , print the number instead

function ziffZubb(no1,no2) {
    for (let a = no1; a <=no2; a++) {
        if (a%3===0 && a%5===0) {
            console.log(a + " is ziffZubb")
        }

        else if (a%3===0) {
            console.log(a +" is ziff")
        }

        else if (a%5===0) {
            console.log(a + " is Zubb")
        }

        else {console.log(a)}
        
    }
}

function gcd(n31,n32) {
        for (let b = n31; b > 1; b--) {

            if (n31%b===0 && n32%b===0) {
                console.log(b);
                return;
            }
            else if (b===2) {
                console.log("There is no result except 1");
            }     
        }
    }


    function min(a,b) {
        let min=1;
        let max=1;
        if (a>=b) {
            let min=b;
            let max=a;
            console.log(min);
        }

    }

    min(5,6)
