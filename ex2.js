function checkObject(str,obj) {
    var res = false;
    for (let key in obj) {
        if (str === key) {
            res = true;
        }   
    }
    return res;
}

const person = {
    city: "Moscow"
   }

console.log(checkObject("city",person));