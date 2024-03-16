//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function getMax(x, y, z){
    if((x > y) && (x > z)){
        return x
    }
    else if((y > z) && (y > x)){
        return y
    }
    else if((z > x) && (z > y)){
        return z
    }
    else
        return("There is an error with the values.")
}
console.log(getMax(34,35,24))

function getMin(x, y, z){
    if ((x < y) && (x < z)){
        return x
    }
    else if ((y < z) && (y < x)){
        return y
    }
    else if ((z < x) && (z < y)){
        return z
    }
    else
        return("There is an error with the values.")
}
console.log(getMin(21, 5, 14))

function getMean(x, y, z){
    let total = x + y + z
    let mean = total / 3
    return mean
}
console.log(getMean(12, 42, 9))

function compare(word1, word2){
    if(word1 == word2){
        return(0)
    }
    else if(word1 > word2){
        return(1)
    }
    else if(word1 < word2){
        return(-1)
    }
    else
        return("There is an error with these words.")
}
console.log(compare("watermelon", "fish"))

function getCharPerLine(str, indent){
    for (let char = 0; char < str.length; char++)
    {
        if (indent == true){
            console.log(str[char].padStart(char + 1, " "))
        }
        else{
            console.log(str[char])
        }
    }      
}
console.log(getCharPerLine("Watermelon", true))

function arrow(size){
    let star = "*"
    //this loop runs size amount of times in order to create rows
    for(let h=1; h <= size; h++){
        //this loop adds stars to star variable
        for(let i=0; i <= h; i++){
            star = (star.padStart(i, "*"))
        }
        console.log(star)
    }
        //this loop removes stars from star variable
        for(let s = size-1; s > 0; s--){
            star = (star.slice(0, s))
            console.log(star)
        }
}
console.log(arrow(6))