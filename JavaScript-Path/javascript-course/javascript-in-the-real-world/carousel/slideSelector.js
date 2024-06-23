const selector = function(direction) {

    

    if(direction == "-") {
        i--
    } else if(direction == "+") {
        i++
    } else {
        i
    }

    return i;
}

export default selector