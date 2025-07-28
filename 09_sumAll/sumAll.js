const sumAll = function(first,last) {
    if(!Number.isInteger(first) || !Number.isInteger(last)){return "ERROR"}
    if(first<0 || last <0){return "ERROR"}
    if(first > last)
    {
        let temp=first;
        first = last;
        last = temp;
    }
    
    let total=0
    for(let i=first ; i<=last ; i++)
    {
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
