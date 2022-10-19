let ifPositive = document.getElementById("ifPositive");
let ifPositiveResult = document.getElementById("ifPositiveResult");

let numberIf = -4;
let numberIfResult = "";

if(numberIf < 0) {
    numberIfResult = "negative";
} else if(numberIf > 0) {
    numberIfResult = "positive";
} else {
    numberIfResult = "zero";
}

ifPositive.innerHTML = "A = " + numberIf;
ifPositiveResult.innerHTML = "A is: " + numberIfResult;

let numberWhile = 0;
while (numberWhile < 3) {
    console.log(numberWhile);
    numberWhile++;
}


let numberDoWhile = 0;
do {
    console.log(numberDoWhile);
    numberDoWhile++;
} while (numberDoWhile < 3);


for(let numeroFor = 0; numeroFor <= 3; numeroFor++){
    console.log(numeroFor);
}


let season = "autumn";
switch (season) {
    case "spring":
        console.log("We are in spring.");
        break;
    case "autumn":
        console.log("We are in autumn.");
        break;
    case "winter":
        console.log("We are in winter.");
        break;
    case "summer":
        console.log("We are in summer.");
        break;
    default:
        console.log("The season you entered does not exist!");
        break;
}