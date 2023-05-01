//あいうえお対応表
const adan = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん", "が", "ざ", "だ", "ば", "ぱ", "ゃ"];
const idan = ["い", "き", "し", "ち", "に", "ひ", "み", "り", "ぎ", "じ", "ぢ", "び", "ぴ"];
const udan = ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "ぐ", "ず", "づ", "ぶ", "ぷ", "ゅ"];
const edan = ["え", "け", "せ", "て", "ね", "へ", "め", "れ", "げ", "ぜ", "で", "べ", "ぺ"];
const odan = ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", "ご", "ぞ", "ど", "ぼ", "ぽ", "ょ"];

//let firstname = document.getElementById('firstname');
//let secondname = document.getElementById('secondname');
//let firstname = "かとうこういち"
//let secondname = "かとうこういち"



function fortune(firstname, secondname) {
    //名前の文字列を分解(ex:あいう→[あ,い.う])
    firstname = firstname.split('');
    secondname = secondname.split('');


    //1人目の名前を数値化
    for (i = 0; i < firstname.length; i++) {
        if (adan.includes(firstname[i])) {
            firstname[i] = 1;
        } else if (idan.includes(firstname[i])) {
            firstname[i] = 2;
        } else if (udan.includes(firstname[i])) {
            firstname[i] = 3;
        } else if (edan.includes(firstname[i])) {
            firstname[i] = 4;
        } else if (odan.includes(firstname[i])) {
            firstname[i] = 5;
        }
    }
    console.log("一人目の名前(数字): " + firstname)

    //2人目の名前を数値化
    for (i = 0; i < secondname.length; i++) {
        if (adan.includes(secondname[i])) {
            secondname[i] = 1;
        } else if (idan.includes(secondname[i])) {
            secondname[i] = 2;
        } else if (udan.includes(secondname[i])) {
            secondname[i] = 3;
        } else if (edan.includes(secondname[i])) {
            secondname[i] = 4;
        } else if (odan.includes(secondname[i])) {
            secondname[i] = 5;
        }
    }
    console.log("二人目の名前(数字): " + secondname)

    //二人の名前を結合
    let calcnum = firstname.concat(secondname);
    let nextnum = [];
    console.log("結合したもの" + calcnum)
    let finishcode;
    //足し算
    for (n = calcnum.length; n > 2; n--) {
        if (false) {
        } else {
            for (i = 0; i < calcnum.length - 1; i++) {
                nextnum.push((calcnum[i] + calcnum[i + 1]) % 10);
                console.log(i + "回目の代入" + nextnum)
            }
            if (nextnum.length <= 2) {
                console.log("result: " + nextnum);
                return String(nextnum[0]) + String(nextnum[1]);
            }
            calcnum.length = 0;

            for (i = 0; i < nextnum.length - 1; i++) {
                calcnum.push((nextnum[i] + nextnum[i + 1]) % 10);
                console.log(i + "回目の代入(next)" + calcnum + " (インデックス) " + calcnum.length)
            }
            nextnum.length = 0;
            if (calcnum.length <= 2) {
                console.log("result: " + calcnum);
                return String(calcnum[0]) + String(calcnum[1]);
            }
        }

    }
}
function standalone() {
    let firstname = document.getElementById('firstname').value;
    let secondname = document.getElementById('secondname').value;
    let num = fortune(firstname, secondname);
    document.getElementById('result').innerText = "相性は" + num + "%です。"
}
