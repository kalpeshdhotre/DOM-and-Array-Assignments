// 35. Write a functions which checks if all items are unique in the array.

const countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia"];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function uniqueCheck(array) {
    let arrayToCheck = array;
    let flag = true;

    // let indexStart = arrayToCheck.indexOf(element);
    for (var l = 0; l <= arrayToCheck.length; l++) {
        for (var i = l + 1; i <= arrayToCheck.length; i++) {
            if (arrayToCheck[l] == arrayToCheck[i]) {
                console.log(`This array does not contains unique elements`);
                flag = false;
                break;
            }
        }
        if ((flag == false)) {
            return flag;
            break;
        }
    }
    return flag;
}

/* arrayToCheck.forEach((element) => {
        let indexStart = arrayToCheck.indexOf(element);

        for (var i = indexStart; i <= arrayToCheck.length; i++) {
            if (element == arrayToCheck[i + 1]) {
                console.log(`This array does not contains unique elements`);
                flag = false;
                break;
            }
        }
    }); 
    return flag;
}*/

let checkArray = uniqueCheck(countryList);
console.log(checkArray);
