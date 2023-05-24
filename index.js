// câu 1
const arr = [0, 3, 5, 4, 5, 2, 9, 1, -1, -3, -5, -7];
document.getElementById("mang").innerHTML = arr;

function cau1() {
    var bien = 0;

    arr.forEach(function (item, index) {
        if (item >= 0) {
            bien += item;
        }
    });
    document.getElementById("ketQuaCau1").innerHTML = bien;
}

function cau2() {
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            n++;
        }
    }
    document.getElementById("ketQuaCau2").innerHTML = n;
}

function cau3() {
    var bien = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (bien > arr[i]) {
            bien = arr[i];
        }
    }

    document.getElementById("ketQuaCau3").innerHTML = bien;
}

function cau4() {
    var bien = 0;
    arrN = [];

    arr.forEach(function (item, index) {
        if (item >= 0) {
            arrN.push(item);
        }
    });

    for (var i = 0; i < arrN.length; i++) {
        for (var x = 1; x < arrN.length; x++) {
            if (arrN[i] < arrN[x]) {
                arrN[x] = arrN[i];
                bien = arrN[i];
            }
        }
    }

    document.getElementById("ketQuaCau4").innerHTML = bien;
}

function cau5() {
    arrN = [];
    var bien = -1;
    arr.forEach(function (item, index) {
        if (item % 2 == 0 && item != 0) {
            arrN.push(item);
            bien = arrN[arrN.length - 1];
        }
    });

    document.getElementById("ketQuaCau5").innerHTML = bien;
}
function cau6() {
    var index1 = document.querySelector("#cau6 .input1").value * 1;
    var index2 = document.querySelector("#cau6 .input2").value * 1;

    var bien1 = arr[index1];
    console.log(bien1);
    var bien2 = arr[index2];
    console.log(bien2);
    arr[index1] = bien2;
    arr[index2] = bien1;

    console.log(arr);
    document.getElementById("ketQuaCau6").innerHTML = arr;
}

function cau7() {
    document.getElementById("ketQuaCau7").innerHTML = arr.sort();
}

function kTraSoNguyenTo(n) {
    var tag = 1;

    if (n < 2) {
        return tag = 0;
    } else if (n == 2) {
        return tag = 1;
    } else if (n % 2 == 0) {
        return tag = 0;
    } else {
        for (var x = 3; x < n - 1; x += 2) {
            if (n % x == 0) {
                tag = 1;
                break;
            }
        }
    }

    return tag;
}
function cau8() {
    var arrN = [];
    for (var i = 0; i < arr.length; i++) {
        if (kTraSoNguyenTo(arr[i]) == 1) {
            arrN.push(arr[i]);
            console.log(arrN);
            document.getElementById("ketQuaCau8").innerHTML =
                `Số nguyên tố đầu tiên trong mảng là: ${arrN[0]}`;
        } else {
            document.getElementById("ketQuaCau8").innerHTML = "-1";
        }
    }
}
var arrX = [2.2, 8, 1.1, 1.2, 2.3, -1.2, -2.3];

function cau9() {
    for (var x = 0; x < arrX.length; x++) {
        arr.push(arrX[x]);
    }
    console.log(arr);
    var n = 0;

    for (var i = 0; i < arr.length; i++) {
        if (Math.ceil(arr[i]) == Math.floor(arr[i])) {
            n++;
        }
    }
    console.log(n);
    document.getElementById("ketQuaCau9").innerHTML = n;
}

function cau10() {
    var tongSoAm = 0;
    var tongSoDuong = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            tongSoAm++;
        } else {
            tongSoDuong++
        }
    }

    if (tongSoAm < tongSoDuong) {
        document.getElementById("ketQuaCau10").innerHTML =
            `Số âm: ${tongSoAm} < Số dương: ${tongSoDuong}`;
    } else if (tongSoAm == tongSoDuong) {
        document.getElementById("ketQuaCau10").innerHTML =
            `Số âm: ${tongSoAm} = Số dương: ${tongSoDuong}`;
    } else if (tongSoAm > tongSoDuong) {
        document.getElementById("ketQuaCau10").innerHTML =
            `Số âm: ${tongSoAm} > Số dương: ${tongSoDuong}`;
    }
}