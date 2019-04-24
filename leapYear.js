const itIsLeap = function (year){
    
     if(typeof(year)==='number' && typeof(year)< 0 ) {  
        
    if (year%4 === 0){

        if (year %100===0){
            if (year %400===0){
                return true;
            }else {
                return false;
            }

        }else {
            return true ;
        }

    }else {
        return false;
    }
}else{
    return "in put should be a number and abov 0"
}

////////////////////////
const itIsLeap = function (year){
    
    return (year%100===0 ? year%400===0 : year %4 ===0 );
    }
itIsLeap(1997) // false
itIsLeap(1996) // true
itIsLeap(1900) // false
itIsLeap(2000) // true

