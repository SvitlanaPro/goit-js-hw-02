function formatMessage(message, maxLength){
    
    if (message.length <= maxLength){
        return  message;
    } else{
        return  message + "...";
    }
 }
//     console.log (message);
//     console.log (message.length);
//     let messageNew;
//     console.log (messageNew === message);
//     //   console.log (messageNew === message.length);
//     if (message.length <= maxLength){
//         messageNew === message;
//     } else{
//         messageNew === message + "...";
//     }
//     return messageNew;


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"