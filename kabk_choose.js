var sig = 0;     //紀錄選到第幾個
var che = 0;     //避免格子重複產生
var score = 0;   //計分

var iMadeIt = [ 4, 5, 6, 9, 3, 8, 1, 7, 2,
    7, 1, 2, 6, 5, 4, 3, 9, 8,
    3, 8, 9, 1, 2, 7, 5, 4, 6,
    8, 9, 3, 7, 4, 1, 6, 2, 5,
    6, 2, 1, 8, 9, 5, 7, 3, 4,
    5, 7, 4, 2, 6, 3, 8, 1, 9,
    9, 6, 7, 5, 1, 2, 4, 8, 3,
    2, 3, 8, 4, 7, 6, 9, 5, 1,
    1, 4, 5, 3, 8, 9, 2, 6, 7];           //我生成版難得成功兩次之一的數獨

var tacc = new Array(81);
var tacc01 = [1,4,7,2,5,3,9,6,8,2,3,8,4,6,9,1,7,5,6,9,5,7,8,1,2,3,4,4,5,6,1,3,8,7,2,9,3,7,9,6,2,4,5,8,1,8,1,2,5,9,7,3,4,6,9,2,3,8,1,6,4,5,7,5,6,4,9,7,2,8,1,3,7,8,1,3,4,5,6,9,2];

var tacc02 = [6,    1,  5,  2,  3,	4,	7,	9,	8,
              4,	3,	2,	8,	7,	9,	6,	1,	5,
              8,	7,	9,	1,	5,	6,	2,	4,	3,
              2,	9,	7,	4,	8,	1,	3,	5,	6,
              1,	8,	3,	6,	2,	5,	9,	7,	4,
              5,	4,	6,	3,	9,	7,	8,	2,	1,
              7,	2,	8,	5,	1,	3,	4,	6,	9,
              9,	5,	4,	7,	6,	8,	1,	3,	2,
              3,	6,	1,	9,	4,	2,	5,	8,	7];

var tacc03 = [5,	1,	3,	2,	6,	4,	7,	9,	8,
                7,	6,	4,	8,	1,	9,	2,	3,	5,
                2,	9,	8,	7,	3,	5,	1,	4,	6,
                1,	4,	6,	3,	7,	2,	8,	5,	9,
                3,	8,	2,	5,	9,	6,	4,	7,	1,
                9,	5,	7,	1,	4,	8,	6,	2,	3,
                4,	7,	1,	9,	8,	3,	5,	6,	2,
                6,	3,	5,	4,	2,	1,	9,	8,	7,
                8,	2,	9,	6,	5,	7,	3,	1,	4];

var tacc04 = [7,	5,	6,	1,	2,	3,	8,	9,	4,
                2,	1,	4,	6,	8,	9,	7,	3,	5,
                8,	9,	3,	4,	5,	7,	1,	6,	2,
                3,	4,	9,	8,	1,	2,	6,	5,	7,
                6,	2,	7,	5,	3,	4,	9,	1,	8,
                1,	8,	5,	9,	7,	6,	2,	4,	3,
                5,	3,	1,	2,	6,	8,	4,	7,	9,
                4,	7,	8,	3,	9,	1,	5,	2,	6,
                9,	6,	2,	7,	4,	5,	3,	8,	1];

var tacc05 = [2,	9,	8,	3,	1,	6,	4,	5,	7,
                7,	3,	1,	4,	5,	2,	6,	9,	8,
                5,	6,	4,	7,	8,	9,	2,	3,	1,
                3,	5,	9,	1,	2,	8,	7,	4,	6,
                1,	7,	6,	9,	3,	4,	8,	2,	5,
                4,	8,	2,	6,	7,	5,	3,	1,	9,
                6,	4,	3,	8,	9,	1,	5,	7,	2,
                9,	2,	7,	5,	6,	3,	1,	8,	4,
                8,	1,	5,	2,	4,	7,	9,	6,	3];

var tacc06 = [2,	6,	3,	1,	4,	7,	5,	9,	8,
                7,	4,	8,	2,	5,	9,	6,	1,	3,
                9,	5,	1,	8,	3,	6,	2,	4,	7,
                3,	2,	7,	6,	1,	4,	9,	8,	5,
                1,	8,	5,	7,	9,	2,	4,	3,	6,
                4,	9,	6,	3,	8,	5,	7,	2,	1,
                5,	3,	2,	9,	7,	8,	1,	6,	4,
                6,	1,	4,	5,	2,	3,	8,	7,	9,
                8,	7,	9,	4,	6,	1,	3,	5,	2];

var acc01 = [,4,,2,5,,,,8,,3,,4,,9,1,7,,,,,,8,1,2,,,,,6,,,,7,2,,,,,6,,4,,,,,1,2,,,,3,,,,,3,8,1,,,,,,6,4,9,,2,,1,,7,,,,4,5,,9,];
var acc02 = [,1,,2,3,,7,,8,,,,8,,,6,,5,,,9,1,,,,4,,,9,,,8,1,,5,6,,,,,,,,,,5,4,,3,9,,,2,,,2,,,,3,4,,,9,,4,,,8,,,,3,,1,,4,2,,8,];
var acc03 = [,1,3,2,,,7,,,7,,,,,,9,,3,5,2,,,,,,1,,6,,4,,,7,2,,,9,,,2,,,,4,,,9,,,1,4,,,2,,4,,1,,,,,,2,6,3,,4,,,,,7,,,9,,,7,3,1,];
var acc04 = [,,,1,,,8,,4,,,4,,,,7,3,,,,3,,5,7,1,6,,3,4,9,8,,2,,5,,6,,,,,,,,8,,8,,9,,6,2,4,3,,3,1,2,6,,4,,,,7,8,,,,5,,,9,,2,,,5,,,];
var acc05 = [2,,8,3,,,,,,,3,1,,,,,9,8,,6,,7,,,,,1,3,5,,1,2,8,,,6,,7,6,,,,8,2,,4,,,6,7,5,,1,9,6,,,,,1,,7,,9,2,,,,,1,8,,,,,,,7,9,,3]
var acc06 = [,,,1,4,,,9,,,4,8,2,,,6,1,,,,,8,,,2,,,3,,7,,,,9,,,1,8,5,7,,2,4,3,6,,,6,,,,7,,1,,,2,,,8,,,,,1,4,,,3,8,7,,,7,,,6,1,,,];

var acc11 = new Array(81);
var acc12 = new Array(81);
var acc13 = new Array(81);
var acc14 = new Array(81);
var acc15 = new Array(81);
var acc16 = new Array(81);

for(let i = 0; i < acc01.length; i++){
    acc11[i] = acc01[i];
    acc12[i] = acc02[i];
    acc13[i] = acc03[i];
    acc14[i] = acc04[i];
    acc15[i] = acc05[i];
    acc16[i] = acc06[i];
}

var p1 = new Array(9);
var p2 = new Array(9);
var p3 = new Array(9);
var p4 = new Array(9);
var p5 = new Array(9);
var p6 = new Array(9);
var p7 = new Array(9);
var p8 = new Array(9);
var p9 = new Array(9);

for(let i=0; i<p1.length; i++){
    p1[i] = i;
    p2[i] = i+9;
    p3[i] = i+18;
    p4[i] = i+27;
    p5[i] = i+36;
    p6[i] = i+45;
    p7[i] = i+54;
    p8[i] = i+63;
    p9[i] = i+72;
}

var s1 = new Array(9);
var s2 = new Array(9);
var s3 = new Array(9);
var s4 = new Array(9);
var s5 = new Array(9);
var s6 = new Array(9);
var s7 = new Array(9);
var s8 = new Array(9);
var s9 = new Array(9);

var a =0;
for(let i=0; i<p1.length; i++){
    s1[i] = a;
    s2[i] = a+ 1;
    s3[i] = a+ 2;
    s4[i] = a+ 3;
    s5[i] = a+ 4;
    s6[i] = a+ 5;
    s7[i] = a+ 6;
    s8[i] = a+ 7;
    s9[i] = a+ 8;
    a = a+ 9;
}

function alrea()
{
    if(che == 0){
// var gri01 = document.createElement('div');
// gri01.setAttribute("style", "margin-left: 2em;");
// gri01.setAttribute("id", "conn");
// document.getElementById("container").appendChild(gri01);

var acc = new Array(81);
for(let i=0; i<tacc.length; i++){
    tacc[i]="n";
    console.log(tacc[i]);
    var gri = document.createElement('div');
    gri.setAttribute("id", i);
    gri.setAttribute("class", "chos");
    gri.setAttribute("onclick", "keyin()")
    gri.setAttribute("style", "border-color :black; border-width: 1px; border-style:solid;");
    acc[i] = document.createTextNode(" ");
    gri.appendChild(acc[i]);
    document.getElementById("container").appendChild(gri);
    }
    che = che + 1;
}else{
    for(let i=0; i<tacc.length; i++){
        var stupid = document.getElementById(i);
        stupid.innerText = "";
    }
}
var tryy = document.getElementById("easy01");
tryy.style.display = "none";

for(let q = 0; q<s1.length; q++){
    var no01 = document.getElementById(p3[q]);
    var no02 = document.getElementById(p6[q]);
    var no03 = document.getElementById(s3[q]);
    var no04 = document.getElementById(s6[q]);
    var no05 = document.getElementById(20);
    var no06 = document.getElementById(23);
    var no07 = document.getElementById(47);
    var no08 = document.getElementById(50);

    no03.style.borderColor = "black";
    no03.style.borderWidth = "1px";
    no03.style.borderRightWidth = "3px";
    no03.style.borderStyle = "solid";
    no04.style.borderColor = "black";
    no04.style.borderWidth = "1px";
    no04.style.borderRightWidth = "3px";
    no04.style.borderStyle = "solid";
    no01.style.borderColor = "black";
    no01.style.borderWidth = "1px";
    no01.style.borderBottomWidth = "3px";
    no01.style.borderStyle = "solid";
    no02.style.borderColor = "black";
    no02.style.borderWidth = "1px";
    no02.style.borderBottomWidth = "3px";
    no02.style.borderStyle = "solid";
    no05.style.borderColor = "black";
    no05.style.borderWidth = "1px";
    no05.style.borderRightWidth = "3px";
    no05.style.borderBottomWidth = "3px";
    no05.style.borderStyle = "solid";
    no06.style.borderColor = "black";
    no06.style.borderWidth = "1px";
    no06.style.borderRightWidth = "3px";
    no06.style.borderBottomWidth = "3px";
    no06.style.borderStyle = "solid";
    no07.style.borderColor = "black";
    no07.style.borderWidth = "1px";
    no07.style.borderRightWidth = "3px";
    no07.style.borderBottomWidth = "3px";
    no07.style.borderStyle = "solid";
    no08.style.borderColor = "black";
    no08.style.borderWidth = "1px";
    no08.style.borderRightWidth = "3px";
    no08.style.borderBottomWidth = "3px";
    no08.style.borderStyle = "solid";
}

chooses();
}

function chooses(){
    var b = Math.floor((Math.random() * 6) + 1);     //隨機選取題庫1~6的題目
    sig = b;
    
    if(b == 1){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc05[i]!=undefined){
                ss.innerText = tacc01[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(b == 2){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc02[i]!=undefined){
                ss.innerText = tacc02[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(b == 3){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc03[i]!=undefined){
                ss.innerText = tacc03[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
        }
    }
    }else if(b == 4){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc04[i]!=undefined){
            ss.innerText = tacc04[i];
            ss.style.fontWeight = "bolder";
            ss.style.color = "#e800e8";
        }
    }
    }else if(b == 5){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc05[i]!=undefined){
                ss.innerText = tacc05[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(b == 6){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc06[i]!=undefined){
                ss.innerText = tacc06[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }

    var non = document.getElementsByTagName("ol")
    // non.style.visibility = "hidden";
}

var chi;         //所選到格子的ID
var gta = 0;
var geee;
function keyin(e){
	e = e || window.event;
	
	if ( e.button == 2 ) {
		$(window).on('contextmenu', function(e)
        {
        var x = e.clientX;
        var y = e.clientY;
        $('#contextmenu').show();
        $('#contextmenu').css({
            left : x,
            top : y
        });
        });
    }

    if(gta == 0){
        geee = document.getElementById(event.target.id);
        geee.style.backgroundColor = "#ffa6ff";
        gta = gta + 1;
    }else{
        geee.style.backgroundColor = "#FFECF5";
        geee = document.getElementById(event.target.id);
        geee.style.backgroundColor = "#ffa6ff";
    }
    
    chi = event.target.id;
}

if (window.addEventListener) {
	window.addEventListener("keydown", keyin);
} else if (window.attachEvent) {
 	// IE8 doesn't support key events on the window.
	document.attachEvent("onkeydown", keyin);
} else {
	window.onkeydown=keyDownHandler;
}

function a001(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 1;
    if(sig == 1){
        acc01[chi] = 1;
    }else if(sig == 2){
        acc02[chi] = 1;
    }else if(sig == 3){
        acc03[chi] = 1;
    }else if(sig == 4){
        acc04[chi] = 1;
    }else if(sig == 5){
        acc05[chi] = 1;
    }else if(sig == 6){
        acc06[chi] = 1;
    }
    score01()
}

function a002(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 2;

    if(sig == 1){
        acc01[chi] = 2;
    }else if(sig == 2){
        acc02[chi] = 2;
    }else if(sig == 3){
        acc03[chi] = 2;
    }else if(sig == 4){
        acc04[chi] = 2;
    }else if(sig == 5){
        acc05[chi] = 2;
    }else if(sig == 6){
        acc06[chi] = 2;
    }
    score01()
}

function a003(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 3;

    if(sig == 1){
        acc01[chi] = 3;
    }else if(sig == 2){
        acc02[chi] = 3;
    }else if(sig == 3){
        acc03[chi] = 3;
    }else if(sig == 4){
        acc04[chi] = 3;
    }else if(sig == 5){
        acc05[chi] = 3;
    }else if(sig == 6){
        acc06[chi] = 3;
    }
    score01()
}

function a004(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 4;

    if(sig == 1){
        acc01[chi] = 4;
    }else if(sig == 2){
        acc02[chi] = 4;
    }else if(sig == 3){
        acc03[chi] = 4;
    }else if(sig == 4){
        acc04[chi] = 4;
    }else if(sig == 5){
        acc05[chi] = 4;
    }else if(sig == 6){
        acc06[chi] = 4;
    }
    score01()
}

function a005(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 5;

    if(sig == 1){
        acc01[chi] = 5;
    }else if(sig == 2){
        acc02[chi] = 5;
    }else if(sig == 3){
        acc03[chi] = 5;
    }else if(sig == 4){
        acc04[chi] = 5;
    }else if(sig == 5){
        acc05[chi] = 5;
    }else if(sig == 6){
        acc06[chi] = 5;
    }
    score01()
}

function a006(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 6;

    if(sig == 1){
        acc01[chi] = 6;
    }else if(sig == 2){
        acc02[chi] = 6;
    }else if(sig == 3){
        acc03[chi] = 6;
    }else if(sig == 4){
        acc04[chi] = 6;
    }else if(sig == 5){
        acc05[chi] = 6;
    }else if(sig == 6){
        acc06[chi] = 6;
    }
    score01()
}

function a007(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 7;

    if(sig == 1){
        acc01[chi] = 7;
    }else if(sig == 2){
        acc02[chi] = 7;
    }else if(sig == 3){
        acc03[chi] = 7;
    }else if(sig == 4){
        acc04[chi] = 7;
    }else if(sig == 5){
        acc05[chi] = 7;
    }else if(sig == 6){
        acc06[chi] = 7;
    }
    score01()
}

function a008(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 8;

    if(sig == 1){
        acc01[chi] = 8;
    }else if(sig == 2){
        acc02[chi] = 8;
    }else if(sig == 3){
        acc03[chi] = 8;
    }else if(sig == 4){
        acc04[chi] = 8;
    }else if(sig == 5){
        acc05[chi] = 8;
    }else if(sig == 6){
        acc06[chi] = 8;
    }
    score01()
}

function a009(){
    var ggg = document.getElementById(chi);
    ggg.innerText = 9;

    if(sig == 1){
        acc01[chi] = 9;
    }else if(sig == 2){
        acc02[chi] = 9;
    }else if(sig == 3){
        acc03[chi] = 9;
    }else if(sig == 4){
        acc04[chi] = 9;
    }else if(sig == 5){
        acc05[chi] = 9;
    }else if(sig == 6){
        acc06[chi] = 9;
    }
    score01()
}

function a010(){
    var ggg = document.getElementById(chi);
    ggg.innerText = "";

    if(sig == 1){
        acc01[chi] = "";
    }else if(sig == 2){
        acc02[chi] = "";
    }else if(sig == 3){
        acc03[chi] ="";
    }else if(sig == 4){
        acc04[chi] = "";
    }else if(sig == 5){
        acc05[chi] = "";
    }else if(sig == 6){
        acc06[chi] = "";
    }
}

function nonono(){
var cheArr = new Array(81);
for(let i = 0; i < cheArr.length; i++){
    var ele = document.getElementById(i);
    cheArr[i]= ele.innerText;
}

var account = 1;
for(let i = 0; i<tacc.length; i++){
    if(sig == 1){
        if(cheArr[i] == tacc01[i]){
            account = account + 1;
        }
    }

    if(sig == 2){
        if(cheArr[i] == tacc02[i]){
            account = account + 1;
        }
    }

    if(sig == 3){
        if(cheArr[i] == tacc03[i]){
            account = account + 1;
        }
    }

    if(sig == 4){
        if(cheArr[i] == tacc04[i]){
            account = account + 1;
        }
    }

    if(sig == 5){
        if(cheArr[i] == tacc05[i]){
            account = account + 1;
        }
    }

    if(sig == 6){
        if(cheArr[i] == tacc06[i]){
            account = account + 1;
        }
    }

    if(sig == 7){
        if(cheArr[i] == iMadeIt[i]){
            account = account + 1;
        }
    }

    if(account == 81){
        alert("Congradulation!");
        var tryy = document.getElementById("easy01");
        tryy.style.display = "";
    }
}
}

function retry(){
    for(let i=0; i<tacc.length; i++){
        var stupid = document.getElementById(i);
        stupid.innerText = "";
    }

    if(sig == 1){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc11[i]!=undefined){
                ss.innerText = tacc01[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(sig == 2){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc12[i]!=undefined){
                ss.innerText = tacc02[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(sig == 3){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc13[i]!=undefined){
                ss.innerText = tacc03[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
        }
    }
    }else if(sig == 4){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc14[i]!=undefined){
            ss.innerText = tacc04[i];
            ss.style.fontWeight = "bolder";
            ss.style.color = "#e800e8";
        }
    }
    }else if(sig == 5){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc15[i]!=undefined){
                ss.innerText = tacc05[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }else if(sig == 6){
        for(let i = 0; i < tacc.length; i++){
            var ss = document.getElementById(i);
            if(acc16[i]!=undefined){
                ss.innerText = tacc06[i];
                ss.style.fontWeight = "bolder";
                ss.style.color = "#e800e8";
            }
        }
    }
    score = 0;
    document.getElementById("score").innerText = "Current Score: ";
}


function score01(){
    var sc = document.getElementById(chi).innerText;
    var sco = parseInt(sc);
    if(sig == 1){
        if(sco == tacc01[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }

    }else if(sig == 2){
        if(sco == tacc02[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }else if(sig == 3){
        if(sco == tacc03[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }else if(sig == 4){
        if(sco == tacc04[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }else if(sig == 5){
        if(sco == tacc05[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }else if(sig == 6){
        if(sco == tacc06[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }else if(sig == 7){
        if(sco == iMadeIt[chi]){
            score = score + parseInt(sco);
        }else{
            score = score - parseInt(sco);
        }
    }

    document.getElementById("score").innerText = "Current Score: " + score;
}




var mmak = 0;

var hjp6;

function make(){
    if(che == 0){

        var acc = new Array(81);
        for(let i=0; i<tacc.length; i++){
            tacc[i]="n";
            console.log(tacc[i]);
            var gri = document.createElement('div');
            gri.setAttribute("id", i);
            gri.setAttribute("class", "chos");
            gri.setAttribute("onclick", "keyin()")
            gri.setAttribute("style", "border-color :black; border-width: 1px; border-style:solid;");
            acc[i] = document.createTextNode(" ");
            gri.appendChild(acc[i]);
            document.getElementById("container").appendChild(gri);
            }
            che = che + 1;
        }else{
            for(let i=0; i<tacc.length; i++){
                var stupid = document.getElementById(i);
                stupid.innerText = "";
            }
        }
        var tryy = document.getElementById("easy01");
        tryy.style.display = "none";
    
        for(let q = 0; q<s1.length; q++){
            var no01 = document.getElementById(p3[q]);
            var no02 = document.getElementById(p6[q]);
            var no03 = document.getElementById(s3[q]);
            var no04 = document.getElementById(s6[q]);
            var no05 = document.getElementById(20);
            var no06 = document.getElementById(23);
            var no07 = document.getElementById(47);
            var no08 = document.getElementById(50);
    
            no03.style.borderColor = "black";
            no03.style.borderWidth = "1px";
            no03.style.borderRightWidth = "3px";
            no03.style.borderStyle = "solid";
            no04.style.borderColor = "black";
            no04.style.borderWidth = "1px";
            no04.style.borderRightWidth = "3px";
            no04.style.borderStyle = "solid";
            no01.style.borderColor = "black";
            no01.style.borderWidth = "1px";
            no01.style.borderBottomWidth = "3px";
            no01.style.borderStyle = "solid";
            no02.style.borderColor = "black";
            no02.style.borderWidth = "1px";
            no02.style.borderBottomWidth = "3px";
            no02.style.borderStyle = "solid";
            no05.style.borderColor = "black";
            no05.style.borderWidth = "1px";
            no05.style.borderRightWidth = "3px";
            no05.style.borderBottomWidth = "3px";
            no05.style.borderStyle = "solid";
            no06.style.borderColor = "black";
            no06.style.borderWidth = "1px";
            no06.style.borderRightWidth = "3px";
            no06.style.borderBottomWidth = "3px";
            no06.style.borderStyle = "solid";
            no07.style.borderColor = "black";
            no07.style.borderWidth = "1px";
            no07.style.borderRightWidth = "3px";
            no07.style.borderBottomWidth = "3px";
            no07.style.borderStyle = "solid";
            no08.style.borderColor = "black";
            no08.style.borderWidth = "1px";
            no08.style.borderRightWidth = "3px";
            no08.style.borderBottomWidth = "3px";
            no08.style.borderStyle = "solid";
        }

    hjp6  = [ 4, 5, 6, 9, 3, 8, 1, 7, 2,
        7, 1, 2, 6, 5, 4, 3, 9, 8,
        3, 8, 9, 1, 2, 7, 5, 4, 6,
        8, 9, 3, 7, 4, 1, 6, 2, 5,
        6, 2, 1, 8, 9, 5, 7, 3, 4,
        5, 7, 4, 2, 6, 3, 8, 1, 9,
        9, 6, 7, 5, 1, 2, 4, 8, 3,
        2, 3, 8, 4, 7, 6, 9, 5, 1,
        1, 4, 5, 3, 8, 9, 2, 6, 7];

    for(let i=0; i<45; i++){
        if(hjp6[mmak] != ""){
            random81();
            hjp6[mmak] = "";
        }else{
            random81();
            i = i - 1;
        }
    }

    for(let i=0; i<iMadeIt.length; i++){
        var ss = document.getElementById(i);
        ss.innerText = hjp6[i];
        if(hjp6[i]!=""){
            ss.style.color = "#E800E8";
            ss.style.fontWeight = "bolder";
        }
    }

    sig = 7;

    console.log(iMadeIt);
    console.log(hjp6);
}


function random81(){
    var a = Math.floor((Math.random() * 81));
    mmak = a;
}