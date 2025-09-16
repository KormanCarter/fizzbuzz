
function cool(str) {
    let array = str.split('');
    const reversed = array.reverse();
    if(str === reversed.join('')){
        return true;
    }
    else{
        return false;
    }
    
}
