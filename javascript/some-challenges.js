/**
 * Day 1: Arithmetic Operators
 */
var length = 3;
var width = 4.5;

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    area = length * width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length + width) * 2;
    
    return perimeter;
}


/**
 * Day 2: Loops
 */
var s = "javascriptloops";

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowel = [];
    var consonant = [];
    for (var i = 0; i < s.length; i++) {
        if (/[aeiou]/g.test(s[i])) {
            vowel.push(s[i]);
            continue;
        }
        consonant.push(s[i]);
    }
    var result = vowel.concat(consonant).join("\n");
    console.log(result);
}


/**
 * Day 7: Regular Expressions I
 */
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
     var re = /^([aeiou]).*\1$/gi;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
/**
 * Output
 */
regexVar().test("bcd"); // false
regexVar().test("abcd"); // false
regexVar().test("abcda"); // true
regexVar().test("abcdo"); // false

/**
 * 
 * Day 3: Try, Catch, and Finally 
 */
 var s = "1234";
 var sN = Number("1234");

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse();
        console.log(s.join(""));
    } catch (err){
        console.log("s.split is not a function\n" + s);
    }
}

/**
 * 
 * Day 3: Throw 
 */

 var a = 1;

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        throw new Error("YES");
    } else if (a == 0) {
        throw new Error("Zero Error");
    } else if (a < 0) {
        throw new Error("Negative Error");
    }
}



class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
 */

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */ 
