var weightMark = 78
var heightMark = 1.69

var BMIMark = weightMark / (heightMark*heightMark)

console.log("Can nang cua Mark: " + weightMark);
console.log("Chieu cao cua Mark: " + heightMark);
console.log("BMI cua Mark: " + BMIMark);

var weightJohn = 92
var heightJohn = 1.95

var BMIJohn = weightJohn / (heightJohn*heightJohn)

console.log("Can nang cua John: " + weightJohn);
console.log("Chieu cao cua John: " + heightJohn);
console.log("BMI cua John: " + BMIJohn);

var markHigherBMI = () => {
    if (BMIMark > BMIJohn){
        console.log("Mark co BMI cao hon John");
    }else{
        console.log("John co BMI cao hon Mark");
    }
};

markHigherBMI()


var weightMark = 95
var heightMark = 1.88

var BMIMark = weightMark / (heightMark*heightMark)

console.log("Can nang cua Mark: " + weightMark);
console.log("Chieu cao cua Mark: " + heightMark);
console.log("BMI cua Mark: " + BMIMark);

var weightJohn = 85
var heightJohn = 1.76

var BMIJohn = weightJohn / (heightJohn*heightJohn)

console.log("Can nang cua John: " + weightJohn);
console.log("Chieu cao cua John: " + heightJohn);
console.log("BMI cua John: " + BMIJohn);

var markHigherBMI = () => {
    if (BMIMark > BMIJohn){
        console.log("Mark co BMI cao hon John");
    }else{
        console.log("John co BMI cao hon Mark");
    }
};

markHigherBMI()
