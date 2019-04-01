function validBraces(braces){
    arr = braces.split("");
    comparisonArr = [];
    arr.forEach(function(x, i){
        comparisonArr.push(x)
        switch(x){
            case "}":
                if (comparisonArr[comparisonArr.length - 2] === "{"){
                    comparisonArr.splice(-2, 2)
                }
                break;
            case "]":
                if (comparisonArr[comparisonArr.length - 2] === "["){
                    comparisonArr.splice(-2, 2)
                }
                break;
            case ")":
                if (comparisonArr[comparisonArr.length - 2] === "("){
                    comparisonArr.splice(-2, 2)
                }
                break;
        }
    })
    if (comparisonArr.length === 0) {
        return true
    } else {
        return false
    }
  }

  console.log(validBraces("([{}])"))

