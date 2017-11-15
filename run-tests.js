let a = 0;
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.execute();
function gapFilling() {
    var result = 0;

    var uml = document.getElementById("exampleInputName4");
    result += uml.value === "统一建模语言" ? 5 : 0;

    var obj1 = document.getElementById("exampleInputName5");
    result += obj1.value === "封装性" ? 5 : 0;

    var obj2 = document.getElementById("exampleInputName6");
    result += obj2.value === "继承性" ? 5 : 0;

    var obj3 = document.getElementById("exampleInputName7");
    result += obj3.value === "多态性" ? 5 : 0;

    return result;

}
function singleChoice() {
    var result = 0;
    var uml1 = document.getElementsByName("optionsRadios");

    for (var i = 0; i < uml1.length; i++) {
        if (uml1[i].checked === true) {
            result += uml1[i].value === "2" ? 10 : 0;
        }
    }
    var uml2 = document.getElementsByName("optionsRadios1");

    for (var i = 0; i < uml2.length; i++) {
        if (uml2[i].checked === true) {
            result += uml2[i].value === "1" ? 10 : 0;
        }
    }

    return result;
}
function multipleChoice() {
    var check1 = document.getElementsByName("check");
    var result = 0;

    if (check1[0].checked === true && check1[1].checked === true &&
        check1[3].checked === true && check1[2].checked === false) {
        result += 10;
    }

    var check = document.getElementsByName("check1");
    if (check[0].checked === true && check[1].checked === true &&
        check[2].checked === true && check[3].checked === false) {
        result += 10;
    }

    return result;
}
function trueOrFalse() {
    var result = 0;
    var judge = document.getElementsByName("inlineRadioOptions");

    if (judge[0].checked === true) {
        result += 10;
    }
    var judge1 = document.getElementsByName("inlineRadioOptions1");
    if (judge1[1].checked === true) {
        result += 10;
    }
    return result;
}
function shortAnswer() {
    var result = 0;
    var short = document.getElementById("short");

    if (short.value === '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、失误或概念的一种表达形式。' +
        '可以是物理实体；也可以是某种图形；或者是一种教学表达式。') {
        result += 20;
    }

    return result;
}
function main() {
    var gapFillingScore = gapFilling();
    var singleChoiceScore = singleChoice();
    var multipleChoiceScore = multipleChoice();
    var trueOrFalseScore = trueOrFalse();
    var shortAnswerScore = shortAnswer();

    alert(gapFillingScore + singleChoiceScore + multipleChoiceScore + trueOrFalseScore + shortAnswerScore);

}