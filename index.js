let arrNumb = [1, 2, 3, 14, 9,-20, -8];

const addNumber = () =>{
    let so = document.getElementById("nhapSo").value;
    if (so.trim() === ""){
        alert("Vui lòng nhập số");
        return;
    }
    //ép kiểu ở bước này, do người dùng sẽ ko 0 nhập được giá trị 0 nếu ép kiểu sớm
    arrNumb.push(so*1);
    document.getElementById("txt__array").innerHTML = `[${arrNumb}]`;
}

const evenNumbers = arrNumb.filter(number => number % 2 === 0);

const sumEven = () =>{
    let ketqua = 0;
    arrNumb.forEach((item)=>{
        if(item>0){
            ketqua += item;
        }
    }) 
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center">Tổng số dương bằng: ${ketqua} </div>`



//     for(index = 0; index< evenNumbers.length; index++){
//         sum+= evenNumbers[index];
//     }
//     document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center">Tổng số dương bằng: ${sum} </div>`
}

const timSoDuongNhoNhat = () =>{
    let min = arrNumb[0];
    arrNumb.forEach((item)=>{
        if(item<min && item>0){
            min = item;
        }
    })
}

const timSoChanCuoiCung = () =>{
    //không có giá trị chẵn thì trả về -1
    let ketqua = -1;
    arrNumb.forEach((item)=>{
        if(item %2 === 0){
            ketqua = item;
        }
    })
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center">Số chẵn cuối cùng: ${ketqua} </div>`

}
const doiCho = () =>{
    let index1 = document.getElementById("viTri1").value;
    let index2 = document.getElementById("viTri2").value;

    //swap va tao bien trung gina
    let temp = arrNumb[index1];
    arrNumb[index1] = arrNumb[index2];
    arrNumb[index2] =temp;

    document.getElementById("txt__array").innerHTML = `[${arrNumb}]`;
    
}
let sapXep = () =>{
    for(let i=0; i<arrNumb.length; i ++){
        let minIndex = i;
        for(let j = i+1; j< arrNumb.length; j++){
            if(arrNumb[minIndex]>arrNumb[j]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arrNumb[i];
            arrNumb[i] =arrNumb[minIndex];
            arrNumb[minIndex] =temp;
        }
    }
    document.getElementById("txt__array").innerHTML = `[${arrNumb}]`;
}

function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

let timSoNguyenToDauTien = () =>{
    let ketqua = -1;
    arrNumb.forEach((item)=>{
        if(isPrime(item) === true){
            ketqua = item;
        }
    })
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center">Số nguyên đầu tiên là : ${ketqua} </div>`

}

let realNumbArray = [12, 0.24, -19];

let addRealNumber = () =>{
    let so = document.getElementById("mangSoNguyen").value;
    if (so.trim() === ""){
        alert("Vui lòng nhập số");
        return;
    }
    realNumbArray.push(so*1);
    document.getElementById("txt__realNumber").innerHTML = `[${realNumbArray}]`;
}

let howManyInt = () =>{
    let numb = 0;
    realNumbArray.forEach((item)=>{
        while(Number.isInteger(item) === true){
            numb++;
            break;
        }
        // for(let i = 0; i<realNumbArray.length; i++){
        //     if(Number.isInteger(item) === true){
        //         numb=i;
        //     }
        // }
    })
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center">Có ${numb} số nguyên trong mảng </div>`

}

let morePositiveOrNegative = () =>{
    let positive = 0;
    let negative = 0;
    arrNumb.forEach((item) =>{
        while(item>= 0){
            positive++;
            break;
        }
        while(item<0){
            negative++;
            break;
        }
    })
    if(positive>negative){
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center"> Số dương nhiều hơn trong mảng </div>`

    } else if(positive<negative){
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center"> Số âm nhiều hơn trong mảng </div>`

    }else{
    document.getElementById("arrayResult").innerHTML = `<div style="background-color: green; color: white; text-align:center"> Số âm và số dương trong mảng bằng nhau </div>`

    }
}