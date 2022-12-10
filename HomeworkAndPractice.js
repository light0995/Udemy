// function getTimeFromMinutes (totalMinutes){
//     if (typeof (totalMinutes) != 'number' || !Number.isInteger(totalMinutes) || totalMinutes < 0){
//         return "Ошибка, проверьте данные";
//     }

//     let hours = Math.floor(totalMinutes / 60);
//     let minutes = totalMinutes % 60;
//     let result = "";
    
//     switch (hours){
//         case 1: 
//         result = "час";
//         break;

//         case 2:
//         case 3:
//         case 4:
//             result = "часа";
//             break;
        
//         default: 
//             result = "часов";
//     }

//     return `Это ${hours} ${result} и ${minutes} минут`;

// }

// console.log (getTimeFromMinutes(-150));


