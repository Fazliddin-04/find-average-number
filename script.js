
// Son kiritish
var num1 = +prompt("1-sonni kiriting")
var num2 = +prompt("2-sonni kiriting")
var num3 = +prompt("3-sonni kiriting")

// Shartlar va Javoblar

if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    alert('Siz kiritgan sonlar: ' + num1 + ', ' + num2 + ', ' + num3 + '.\nBularning ichida o`rta qiymatalisi: ' + num1)
} else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
    alert('Siz kiritgan sonlar: ' + num1 + ', ' + num2 + ', ' + num3 + '.\nBularning ichida o`rta qiymatalisi: ' + num2)
} else if (num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1) {
    alert('Siz kiritgan sonlar: ' + num1 + ', ' + num2 + ', ' + num3 + '.\nBularning ichida o`rta qiymatalisi: ' + num3)
} else {
    alert("UPS!!! Nimadir xato ketti...")
}

