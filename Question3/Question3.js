var pointDolphins = [96, 108, 89];
var pointKoalas = [88, 91, 110];

var sumPointDolphins = 0;
for (var i = 0; i < pointDolphins.length; i++) {
    sumPointDolphins += pointDolphins[i];
}

var avgPointDolphins = sumPointDolphins / pointDolphins.length; 

console.log("Diem trung binh cua doi Dolphins: " + avgPointDolphins);

var sumPointKoalas = 0;
for (var i = 0; i < pointKoalas.length; i++) {
    sumPointKoalas += pointKoalas[i];
}

var avgPointKoalas = sumPointKoalas / pointKoalas.length; 

console.log("Diem trung binh cua doi Koalas: " + avgPointKoalas);

if(avgPointDolphins > avgPointKoalas){
    console.log("Doi Dolphins chien thang voi so diem: " + avgPointDolphins);
    if(avgPointDolphins > 100){
        console.log("Doi Dolphins danh phan thuong 1 voi so diem: " + avgPointDolphins); 
    }
}else if(avgPointDolphins < avgPointKoalas){
    console.log("Doi Koalas chien thang voi so diem: " + avgPointKoalas);
    if(avgPointKoalas > 100){
        console.log("Doi koalas danh phan thuong 1 voi so diem: " + avgPointDolphins); 
    }
}else{
    console.log("Hai doi hoa nhau voi so diem: " + avgPointKoalas);
    if(avgPointKoalas >= 100 || avgPointDolphins >= 100 ){
        console.log("Ca 2 doi danh phan thuong 2"); 
    }else{
        console.log("Khong co doi nao danh phan thuong 2"); 
    }
}


