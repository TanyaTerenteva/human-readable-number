module.exports = function toReadable (number) {
    const simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    const REMINDER_OF_DEVISION = number%100;
    if (Math.trunc(number/100)>0){
        result+=`${simple[Math.trunc(number/100)]} hundred`;
    }
    if (REMINDER_OF_DEVISION){
        if (Math.trunc(number/100)>0) 
        result+=' ';
        if (REMINDER_OF_DEVISION<20){
            result+=`${simple[REMINDER_OF_DEVISION]}`
        } else {
            result+=`${tens[Math.trunc((REMINDER_OF_DEVISION)/10)-2]}`;
            if ((number%100)%10)
            result+=` ${simple[(REMINDER_OF_DEVISION)%10]}`;            
        }
    } else {
        if (!Math.trunc(number/100)>0)
        result+='zero';
    }
    return result;   
}
