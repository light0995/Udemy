function calculateVolumeAndArea(number) {

    
    if (typeof(number) == 'number' && Number.isInteger(number) && number > 0){
        let volume = number * number * number;
        let cubeSurface = (6 * number) * number;
        let finalResult = 'Объем куба: ' + volume + ', площадь всей поверхности: '+ cubeSurface;
        return finalResult;
    } else {
        return  'При вычислении произошла ошибка';
    }
}

console.log (calculateVolumeAndArea(5));

function getCoupeNumber(number) {
        
        if (number === 0 || number > 36){
        return 'Таких мест в вагоне не существует';
    }
        if (typeof(number) == 'number' && number > 0 && Number.isInteger(number)){

            if (number >= 1 && number <= 4){
                return 1;
            } 
            else if (number >= 5 && number <= 8 ){
                return 2;
            }
            else if (number >= 9 && number <= 12){
                return 3;
            }
            else if (number >= 13 && number <= 16){
                return 4;
            }
            else if (number >= 17 && number <= 20){
                return 5;
            }
            else if (number >= 21 && number <= 24){
                return 6;
            }
            else if (number >= 25 && number <= 28){
                return 7;
            }
            else if (number >= 29 && number <= 32){
                return 8;
            }
             else if (number >= 33 && number <= 36){
                return 9;
             }
}       else {
    return 'Ошибка. Проверьте правильность введенного номера места';
}
}






