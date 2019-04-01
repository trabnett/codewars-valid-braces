function validBraces(braces){
    dict = {"{": 0, "[": 0, "(": 0}
    arr = braces.split("")
    arr.forEach(x => {
        switch(x){
            case "{":
                dict["{"] += 1
                break;
            case "}":
                dict["{"] -= 1
                break;
            case "[":
                dict["["] += 1
                break;
            case "]":
                dict["["] -= 1
                break;
            case "(":
                dict["("] += 1
                break;
            case ")":
                dict["("] -= 1
                break;
        }
    })
    if (dict["["] === 0 && dict["{"] === 0 && dict["("] === 0){
        return true
    } else {
        return false
    }
  }

  console.log(validBraces("[({})](]"))