var tacc = new Array(81);   //紀錄整個數獨
var bug = 0;                //抓蟲子用
var getanum = 0;            //用來去除重複
var getNum = new Array(9);  //同上
// var bc;                  //後來沒用到的變數
var checkCa = 0;

var a1 = Array("0", "1", "2", "9", "10", "11", "18", "19", "20");       //a1 ID
var a2 = Array("27", "28", "29", "36", "37", "38", "45", "46", "47");   //a2 ID
var a3 = Array("54", "55", "56", "63", "64", "65", "72", "73", "74");   //a3 ID
var b1 = Array("3", "4", "5", "12", "13", "14", "21", "22", "23");      //b1 ID
var b2 = Array("30", "31", "32", "39", "40", "41", "48", "49", "50");   //b2 ID
var b3 = Array("57", "58", "59", "66", "67", "68", "75", "76", "77");   //b3 ID
var c1 = Array("6", "7", "8", "15", "16", "17", "24", "25", "26");      //c1 ID
var c2 = Array("33", "34", "35", "42", "43", "44", "51", "52", "53");   //c2 ID
var c3 = Array("60", "61", "62", "69", "70", "71", "78", "79", "80");   //c3 ID

var p1 = new Array(9);      //橫行第1行
var p2 = new Array(9);      //   |
var p3 = new Array(9);      //   |
var p4 = new Array(9);      //   |
var p5 = new Array(9);      //   |
var p6 = new Array(9);      //   |
var p7 = new Array(9);      //   |
var p8 = new Array(9);      //   |
var p9 = new Array(9);      //橫行第9行

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

var s1 = new Array(9);      //直列第1列
var s2 = new Array(9);      //   |
var s3 = new Array(9);      //   |
var s4 = new Array(9);      //   |
var s5 = new Array(9);      //   |
var s6 = new Array(9);      //   |
var s7 = new Array(9);      //   |
var s8 = new Array(9);      //   |
var s9 = new Array(9);      //直列第9行

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

var aaa = new Array(9);     //存第一行的數讀
var aab = new Array(9);     //存第二行的數獨
var aac = new Array(9);     //存第三行的數獨

var baa = new Array(9);     //存第一列的數獨
var bab = new Array(9);     //存第二列的數獨
var bac = new Array(9);     //存第三列的數獨

var bba = new Array(9);     //存第四列的數獨
var bbb = new Array(9);     //存第五列的數獨
var bbc = new Array(9);     //存第六列的數獨

var aba = new Array(9);     //存第四行的數獨
var abb = new Array(9);     //存第五行的數獨
var abc = new Array(9);     //存第六行的數獨

var aca = new Array(9);     //存第七行的數獨
var acb = new Array(9);     //存第八行的數獨
var acc = new Array(9);     //存第九行的數獨

var bca = new Array(9);     
var bcb = new Array(9);     
var bcc = new Array(9);     

var cca = new Array(9);     //存第七列的數獨
var ccb = new Array(9);     //存第八列的數獨
var ccc = new Array(9);     //存第九列的數獨

var cou01 = new Array(9);                 //存取第一格中是1-9都有瑱入
    for(let i=0; i<cou01.length; i++){
        cou01[i]= "n";
        // console.log(cou01[i]);
    }

    var cou02 = new Array(9);
    for(let i=0; i<cou02.length; i++){
        cou02[i]= "n";
        // console.log(cou02[i]);
    }

    var cou03 = new Array(9);
    for(let i=0; i<cou03.length; i++){
        cou03[i]= "n";
        // console.log(cou02[i]);
    }

    var cou04 = new Array(9);
    for(let i=0; i<cou04.length; i++){
        cou04[i]= "n";
        // console.log(cou02[i]);
    }

    var cou05 = new Array(9);
    for(let i=0; i<cou05.length; i++){
        cou05[i]= "n";
        // console.log(cou02[i]);
    }

    var cou06 = new Array(9);
    for(let i=0; i<cou06.length; i++){
        cou06[i]= "n";
        // console.log(cou02[i]);
    }

    var cou07 = new Array(9);
    for(let i=0; i<cou07.length; i++){
        cou07[i]= "n";
        // console.log(cou02[i]);
    }

    var cou08 = new Array(9);
    for(let i=0; i<cou08.length; i++){
        cou08[i]= "n";
        // console.log(cou02[i]);
    }

    var cou09 = new Array(9);
    for(let i=0; i<cou09.length; i++){
        cou09[i]= "n";
        // console.log(cou02[i]);
    }

function getta()            //生成格子
{
    alert("這版本大約50次能成功一次。");
var acc = new Array(81);
for(let i=0; i<tacc.length; i++){
    tacc[i]="n";
    console.log(tacc[i]);
    var gri = document.createElement('div');
    gri.setAttribute("id", i);
    gri.setAttribute("class", "chos");
    gri.setAttribute("style", "border-color :black; border-width: 1px; border-style:solid;");
    acc[i] = document.createTextNode(" ");
    gri.appendChild(acc[i]);
    document.getElementById("container").appendChild(gri);
    }
    creat();
}

var str1 = 0;    //存取第一行累積到第幾個
var str2 = 0;
var str3 = 0;
var str4 = 0;
var str5 = 0;
var str6 = 0;
var str7 = 0;
var str8 = 0;
var str9 = 0;

var row1 = 0;   //存取第一列累積到第幾個
var row2 = 0;
var row3 = 0;
var row4 = 0;
var row5 = 0;
var row6 = 0;
var row7 = 0;
var row8 = 0;
var row9 = 0;

var sig;   //隨機產生的數

function creat(){   //制造數獨
    //////---第一層判斷---//////

    
    var a01 = new Array(9);
    for(let i=0; i<a1.length; i++){
        a01[a1[i]]= "n";
    }

    ran();

    for(let i=0; i<p1.length; i++){
        // alert("start" + i);
        // console.log(i);
        if(cou01[sig-1]!=sig){
            var di = document.getElementById(a1[i]);  //取得格子
            // di.className = sig;
            di.innerText = sig;   //填入數字
            cou01[sig-1]= sig;    //紀錄填入的數字
            a01[a1[i]]= sig;      //紀錄數字
            if(a1[i]<9){
                aaa[str1]= a01[a1[i]]; 
                str1 = str1 + 1;
            }else if(a1[i]<12){
                aab[str2]= a01[a1[i]];
                str2 = str2 +1;
            }else{
                aac[str3]= a01[a1[i]];
                str3 = str3 +1;
            }

            if(a1[i]== 0||a1[i]== 9||a1[i]== 18){
                baa[row1] = a01[a1[i]];
                row1 = row1 + 1;
            }else if(a1[i]== 1||a1[i]== 10||a1[i]== 19){
                bab[row2] = a01[a1[i]];
                row2 = row2 + 1;
            }else{
                bac[row3] = a01[a1[i]];
                row3 = row3 + 1;
            }
            // console.log(a01[a1[i]]);
            // console.log(cou01[sig-1]);
            ran();
        }else{
            i =i-1;
            ran();
        }
    }

    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

       ///////-------[a2]------///////

   var bc = 1;
   ran();
   for(let i=0; i<p1.length; i++){
       bug = bug + 1;
       // if(bug>200){
       //     alert("a2 bug");
       // }
       // console.log(i);
       if(cou02[sig-1]!=sig){
           var di = document.getElementById(a2[i]);
           if(a2[i] == 27|| a2[i] == 36|| a2[i] == 45){
               if(baa[0]!=sig && baa[1]!=sig && baa[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                //    bc = bc + 9;
                   cou02[sig-1]= sig;
                   baa[row1]= sig;
                   row1 = row1 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = i - 1;
                   ran();
               }

           }else if(a2[i] == 28|| a2[i] == 37|| a2[i] == 46){
               if(bab[0]!=sig && bab[1]!=sig && bab[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                //    bc = bc + 9;
                   cou02[sig-1]= sig;
                   bab[row3]= sig;
                   row2 = row2 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = i - 1;
                   ran();
               }
           }else{
               if(bac[0]!=sig && bac[1]!=sig && bac[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                //    bc = bc + 9;
                   cou02[sig-1]= sig;
                   bac[row3]= sig;
                   row3 = row3 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = -1;
                   for(let j=0; j<cou02.length; j++){
                       cou02[j]= "n";
                       di.innerText ="";
                   }

                   baa[3] ="";
                   baa[4] ="";
                   baa[5] ="";
                   bab[3] ="";
                   bab[4] ="";
                   bab[5] ="";
                   bac[3] ="";
                   bac[4] ="";
                   bac[5] ="";

                   row1 = 3;
                   row2 = 3;
                   row3 = 3;

                   getanum = 0;
                   for(let s=0; s<getNum.length; s++){
                       getNum[s] = "";
                   }
                   ran();
               }
           }
           
       }else{
           i = i-1;
           ran();
       }
       
       if(bug>200){
            for(let j=0; j<cou02.length; j++){
                cou02[j]= "n";
                di.innerText ="";
            }

            i = -1;
            bug = 0;
            row1 = 3;
            row2 = 3;
            row3 = 3;
        }
   }

   for(let s=0; s<bba.length; s++){
       var ge = document.getElementById(a2[s]);
       if(s<3){
           aba[str4] = parseInt(ge.innerText);
           str4 = str4 + 1;
       }else if(s<6){
           abb[str5] = parseInt(ge.innerText);
           str5 = str5 + 1;
       }else{
           abc[str6] = parseInt(ge.innerText);
           str6 = str6 + 1;
       }
   }

   getanum = 0;
   for(let s=0; s<getNum.length; s++){
       getNum[s] = "";
   }

            //////-------[a3]------///////

            var bc = 1;
    

            ran();
            for(let u=0; u<p1.length; u++){
                // bug = bug + 1;
                // if(bug>200){
                //     alert("a3 bug");
                // }
                // console.log(i);
                if(cou04[sig-1]!=sig){
                    var di = document.getElementById(a3[u]);
                    if(a3[u] == 54|| a3[u] == 63|| a3[u] == 72){
                        if(baa[0]!=sig && baa[1]!=sig && baa[2]!=sig && baa[3]!=sig && baa[4]!=sig && baa[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou04[sig-1]= sig;
                            baa[row1]= sig;
                            row1 = row1 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            u = u - 1;
                            ran();
                        }
        
                    }else if(a3[u] == 55|| a3[u] == 64|| a3[u] == 73){
                        if(bab[0]!=sig && bab[1]!=sig && bab[2]!=sig && bab[3]!=sig && bab[4]!=sig && bab[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou04[sig-1]= sig;
                            bab[row3]= sig;
                            row2 = row2 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            u = u - 1;
                            ran();
                        }
                    }else{
                        if(bac[0]!=sig && bac[1]!=sig && bac[2]!=sig && bac[3]!=sig && bac[4]!=sig && bac[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou04[sig-1]= sig;
                            bac[row3]= sig;
                            row3 = row3 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            u = 0;
                            for(let j=0; j<cou04.length; j++){
                                cou04[j]= "n";
                                var no1 = document.getElementById(a3[j]);
                                no1.innerText ="";
                            }
                            bug = 0;
        
                            u = u - 1;
        
                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }
                    }
                    
                }else{
                    u = u-1;
                    ran();
                }
        
               
            }
        
    for(let i=0; i<acc.length; i++){
        var ge = document.getElementById(a3[i]);
        if(i<3){
            aca[str7] = parseInt(ge.innerText);
            str7 = str7 + 1;
        }else if(i<6){
            acb[str8] = parseInt(ge.innerText);
            str8 = str8 + 1;
        }else{
            acc[str9] = parseInt(ge.innerText);
            str9 = str9 + 1;
        }
    }
        
        getanum = 0;
        for(let s=0; s<getNum.length; s++){
            getNum[s] = "";
        }

    //---------[b1]----------//
    ran();
    for(let i=0; i<p1.length; i++){
        // bug = bug + 1;
        // if(bug>200){
        // alert("b1 bug");
        // }
        // console.log(i);
        if(cou03[sig-1]!=sig){
            if(b1[i]<9){
                if(aaa[0]!=sig && aaa[1]!=sig && aaa[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aaa[str1]= sig;
                    str1 = str1 + 1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b1[i]<15){
                if(aab[0]!=sig && aab[1]!=sig && aab[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aab[str2]= sig;
                    str2 = str2 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else{
                if(aac[0]!=sig && aac[1]!=sig && aac[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aac[str3]= sig;
                    str3 = str3 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = -1;
                    for(let j=0; j<cou03.length; j++){
                        var di = document.getElementById(b1[j]);
                        di.innerText = "";

                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }

                    aaa[3] ="";
                    aaa[4] ="";
                    aaa[5] ="";
                    aab[3] ="";
                    aab[4] ="";
                    aab[5] ="";
                    aac[3] ="";
                    aac[4] ="";
                    aac[5] ="";

                    str1 = 3;
                    str2 = 3;
                    str3 = 3;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
        }else{
            i =i-1;
            ran();
        }
        
    }
    // bug = 0;

    for(let i=0; i<bba.length; i++){
        var ge = document.getElementById(b1[i]);
        if(i==0|| i==3|| i==6){
            bba[row4] = parseInt(ge.innerText);
            row4 = row4 + 1;
        }else if(i==1|| i==4|| i==7){
            bbb[row5] = parseInt(ge.innerText);
            row5 = row5 + 1;
        }else{
            bbc[row6] = parseInt(ge.innerText);
            row6 = row6 + 1;
        }
    }

    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

        //---------[b2]----------//

    // var bc = 1;
    

    ran();
    for(let i=0; i<cou06.length; i++){
        bug = bug + 1;
        // if(bug>200){
            // alert("b2 bug");
        // }
        // alert(i);
        if(cou06[sig-1]!=sig){
            var di = document.getElementById(b2[i]);
            if(b2[i]<33){
                if(aba[0]!=sig&&aba[1]!=sig&&aba[2]!=sig){
                    if(i == 0|| i == 3|| i ==6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou06[sig-1]= sig;
                            bba[row4]= sig;
                            row4 = row4 + 1;

                            aba[str4] = sig;
                            str4 = str4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou06[sig-1]= sig;
                            bbb[row5]= sig;
                            row5 = row5 + 1;

                            aba[str4] = sig;
                            str4 = str4 + 1;
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                             bc = bc + 9;
                             cou06[sig-1]= sig;
                             bbc[row6]= sig;
                             row6 = row6 + 1;
                             // console.log(cou02[sig-1]);

                             aba[str4] = sig;
                             str4 = str4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else{
                        // alert("someting wrong!");
                        i = i-1;
                        ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b2[i]<42){
                if(abb[0]!=sig&&abb[1]!=sig&&abb[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){
                            di.innerText = sig;
                            bc = bc + 9;
                            cou06[sig-1]= sig;
                            bba[row4]= sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);

                            abb[str5] = sig;
                            str5 = str5 + 1;
                        ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou06[sig-1]= sig;
                            bbb[row5]= sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);

                            abb[str5] = sig;
                            str5 = str5 + 1;
                            ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }

                    }else if(i == 2|| i == 5|| i ==8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbc[row6]= sig;
                                row6 = row6 + 1;
                                // console.log(cou02[sig-1]);

                                abb[str5] = sig;
                                str5 = str5 + 1;
                            ran();
                            }else{
                                // alert("someting wrong!");
                                i = i - 1;
                                ran();
                            }
                    }else{
                        i = i - 1;
                        ran();
                    }
                    
            }else{
                i = i - 1;
                ran();
            }
        }else{
                if(abc[0]!=sig&&abc[1]!=sig&&abc[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                bc = bc + 9;
                                cou06[sig-1]= sig;
                                bba[row4]= sig;
                                row4 = row4 + 1;

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                        }

                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbb[row5]= sig;
                                row5 = row5 + 1;
                                // console.log(cou02[sig-1]);

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                            }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbc[row6]= sig;
                                row6 = row6 + 1;

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                            }
                        
                    }else{
                        i = i - 1;
                            ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i - 1;
                    ran();
                }
            }
    }else if(cou06.indexOf("n")+1 == bbc[0]||cou06.indexOf("n")+1 == bbc[1]||cou06.indexOf("n")+1 == bbc[2]||cou06.indexOf("n")+1 == abc[0]||cou06.indexOf("n")+1 == abc[1]||cou06.indexOf("n")+1 == abc[2]){
        i = 0;
        for(let j=0; j<cou06.length; j++){
            var gg = document.getElementById(b2[j]);
            gg.innerText = "";
            cou06[j]= "n";
            // console.log(cou02[i]);
        }
        i = i - 1;

        bba[3] = "";
        bba[4] = "";
        bba[5] = "";
        bbb[3] = "";
        bbb[4] = "";
        bbb[5] = "";
        bbc[3] = "";
        bbc[4] = "";
        bbc[5] = "";

        aba[3] = "";
        aba[4] = "";
        aba[5] = "";
        abb[3] = "";
        abb[4] = "";
        abb[5] = "";
        abc[3] = "";
        abc[4] = "";
        abc[5] = "";


        str4 = 3;
        str5 = 3;
        str6 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;

        getanum = 0;
        for(let s=0; s<getNum.length; s++){
            getNum[s] = "";
        }
        ran();
    }else{
        i = i - 1;
        ran();
    }
    if(bug>200){    //當蟲子超過200的時候，重新跑一次b2
        i = -1;
        bug = 0;
        str4 = 3;
        str5 = 3;
        str6 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;
        // alert("System Error!");

        for(let j=0; j<cou08.length; j++){
            var gg = document.getElementById(b2[j]);
            gg.innerText = "";
            cou06[j]= "n";
            // console.log(cou02[i]);
        }
        // break;
    }
    
}
            bug = 0;
            getanum = 0;
            for(let s=0; s<getNum.length; s++){
                getNum[s] = "";
            }

         //---------[b3]----------//

    // var bc = 1;
    

    ran();
    for(let i=0; i<p1.length; i++){
        bug = bug + 1;
        // if(bug>200){
            // alert("b3 bug");
        //     break;
        // }
        // alert("[b3]" + i);
        if(cou07[sig-1]!=sig){
            var di = document.getElementById(b3[i]);
            if(b3[i]<60){
                if(aca[0]!=sig&&aca[1]!=sig&&aca[2]!=sig){
                    if(i == 0|| i == 3|| i ==6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bba[row4] = sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else{
                        // alert("someting wrong!");
                        i = i-1;
                        ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b3[i]<69){
                if(acb[0]!=sig&&acb[1]!=sig&&acb[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){
                        // di.className = sig;
                        di.innerText = sig;
                        bc = bc + 9;
                        cou07[sig-1]= sig;
                        acb[str8]= sig;
                        str8 = str8 +1;

                        bba[row4] = sig;
                        row4 = row4 + 1;
                        // console.log(cou02[sig-1]);
                        ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acb[str8]= sig;
                            str8 = str8 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }

                    }else if(i == 2|| i == 5|| i ==8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acb[str8]= sig;
                            str8 = str8 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                            }else{
                                // alert("someting wrong!");
                                i = i - 1;
                                ran();
                            }
                    }else{
                        i = i - 1;
                        ran();
                    }
                    
            }else{
                i = i - 1;
                ran();
            }
        }else{
                if(acc[0]!=sig&&acc[1]!=sig&&acc[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bba[row4] = sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }

                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }
                    }else if(i == 2|| i == 5 || i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }
                    }
                }else{
                    i = i - 1;
                    ran();
                }

            }
        }else{
            i = i - 1;
            ran();
    }

    if(bug>200){
        str4 = 3;
        str5 = 3;
        str6 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;

        for(let j=0; j<cou07.length; j++){
            var gg = document.getElementById(b3[j]);
            gg.innerText = "";
            cou07[j]= "n";
        }

        i = -1;
        bug = 0;

        for(let j=0; j<cou08.length; j++){
            var gg = document.getElementById(b2[j]);
            gg.innerText = "";
            cou06[j]= "n";
            // console.log(cou02[i]);
        }

        ba2();
    }
    console.log(i);
}
bug = 0;


    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

            //---------[c1]----------//

    // var bc = 1;
    

    ran();
    for(let i=0; i<p1.length; i++){
        // bug = bug + 1;
        // if(bug>200){
        //     alert("C1 bug");
        // }
        // console.log(i);
        if(cou05[sig-1]!=sig){
            var di = document.getElementById(c1[i]);
            if(c1[i]<9){
                if(aaa[0]!=sig && aaa[1]!=sig && aaa[2]!=sig && aaa[3]!=sig && aaa[4]!=sig && aaa[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou05[sig-1]= sig;
                    aaa[str1]= sig;
                    str1 = str1 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(c1[i]<18){
                if(aab[0]!=sig && aab[1]!=sig && aab[2]!=sig && aab[3]!=sig && aab[4]!=sig && aab[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou05[sig-1]= sig;
                    aab[str2]= sig;
                    str2 = str2 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else{
                if(aac[0]!=sig && aac[1]!=sig && aac[2]!=sig && aac[3]!=sig && aac[4]!=sig && aac[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou05[sig-1]= sig;
                    aac[str3]= sig;
                    str3 = str3 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = 0;
                    for(let j=0; j<cou05.length; j++){
                        var gg = document.getElementById(c1[j]);
                        gg.innerText = "";
                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }
                    i = i - 1;

                    aaa[6] ="";
                    aaa[7] ="";
                    aaa[8] ="";
                    aab[6] ="";
                    aab[7] ="";
                    aab[8] ="";
                    aac[6] ="";
                    aac[7] ="";
                    aac[8] ="";

                    str1 = 6;
                    str2 = 6;
                    str3 = 6;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
        }else{
            i =i-1;
            ran();
        }
        
    }

    // bug = 0;
    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

    for(let i=0; i<acc.length; i++){
        var ge = document.getElementById(c1[i]);
        if(i==0||i==3||i==6){
            cca[row7] = parseInt(ge.innerText);
            row7 = row7 + 1;
        }else if(i==1||i==4||i==7){
            ccb[row8] = parseInt(ge.innerText);
            row8 = row8 + 1;
        }else{
            ccc[row9] = parseInt(ge.innerText);
            row9 = row9 + 1;
        }
    }


    //---------[c2]----------//

    ran();
    for(let i=0; i<p1.length; i++){
        // alert(i);
        bug = bug + 1;
        // if(bug>200){
            // alert("c2 bug");
        // }
        if(cou08[sig-1]!=sig){
            var di = document.getElementById(c2[i]);
            if(i == 0){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 1){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 2){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 3){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 4){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 5){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 6){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 7){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 8){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = 0;
                    for(let j=0; j<cou05.length; j++){
                        var gg = document.getElementById(c1[j]);
                        gg.innerText = "";
                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }
                    i = i - 1;

                    aba[3] = "";
                    aba[4] = "";
                    aba[5] = "";
                    abb[3] = "";
                    abb[4] = "";
                    abb[5] = "";
                    abc[3] = "";
                    abc[4] = "";
                    abc[5] = "";

                    cca[6] = "";
                    cca[7] = "";
                    cca[8] = "";
                    ccb[6] = "";
                    ccb[7] = "";
                    ccb[8] = "";
                    ccc[6] = "";
                    ccc[7] = "";
                    ccc[8] = "";

                    str4 = 6;
                    str5 = 6;
                    str6 = 6;

                    row7 = 3;
                    row8 = 3;
                    row9 = 3;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
    }else{
        i = i - 1;
        ran();
    }

    if(bug>200){
        str4 = 6;
        str5 = 6;
        str6 = 6;
    
        row7 = 0;
        row8 = 0;
        row9 = 0;
    
        for(let j=0; j<cou08.length; j++){
            var gg = document.getElementById(c2[j]);
            gg.innerText = "";
            cou08[j]= "n";
            // console.log(cou02[i]);
        }
    
        ca1();
    
        // alert("系統維護中，請重新整理及等待系統修復。");
    }else{
    
    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }
    }
}

    var del01 = 0;
    var del02 = 0;
    var del03 = 0;
    var del04 = 0;
    var del05 = 0;
    var del06 = 0;
    var del07 = 0;
    var del08 = 0;
    var del09 = 0;

    var arr01 = new Array(9);
    arr01 = aba.concat(cca);
    arr01.sort();
    var arr02 = new Array(9);
    arr02 = aba.concat(ccb);
    arr02.sort();
    var arr03 = new Array(9);
    arr03 = aba.concat(ccc);
    arr03.sort();
    var arr04 = new Array(9);
    arr04 = abb.concat(cca);
    arr04.sort();
    var arr05 = new Array(9);
    arr05 = abb.concat(ccb);
    arr05.sort();
    var arr06 = new Array(9);
    arr06 = abb.concat(ccc);
    arr06.sort();
    var arr07 = new Array(9);
    arr07 = abc.concat(cca);
    arr07.sort();
    var arr08 = new Array(9);
    arr08 = abc.concat(ccb);
    arr08.sort();
    var arr09 = new Array(9);
    arr09 = abc.concat(ccc);
    arr09.sort();

    for(u=0; u<arr01.length; u++){
        if(arr01[u] == u+1){
            del01 = del01 + 1;
        }
        if(arr02[u] == u+1){
            del02 = del02 + 1;
        }
        if(arr03[u] == u+1){
            del03 = del03 + 1;
        }
        if(arr04[u] == u+1){
            del04 = del04 + 1;
        }
        if(arr05[u] == u+1){
            del05 = del05 + 1;
        }
        if(arr06[u] == u+1){
            del06 = del06 + 1;
        }
        if(arr07[u] == u+1){
            del07 = del07 + 1;
        }
        if(arr08[u] == u+1){
            del08 = del08 + 1;
        }
        if(arr09[u] == u+1){
            del09 = del09 + 1;
        }
    }
    bug = 0;

        //---------[c3]----------//

    // var bc = 1;

    ran();
    for(let i=0; i<p1.length; i++){
        bug = bug + 1;   
        if(cou09[sig-1]!=sig){
            var di = document.getElementById(c3[i]);
            if(i == 0){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && cca[3]!=sig && cca[4]!=sig && cca[5]!=sig && aca[0]!=sig && aca[1]!=sig && aca[2]!=sig && aca[3]!=sig && aca[4]!=sig && aca[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    cca[row7]= sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 1){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && ccb[3]!=sig && ccb[4]!=sig && ccb[5]!=sig && aca[0]!=sig && aca[1]!=sig && aca[2]!=sig && aca[3]!=sig && aca[4]!=sig && aca[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccb[row8]= sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 2){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && ccc[3]!=sig && ccc[4]!=sig && ccc[5]!=sig && aca[0]!=sig && aca[1]!=sig && aca[2]!=sig && aca[3]!=sig && aca[4]!=sig && aca[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccc[row9]= sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 3){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && cca[3]!=sig && cca[4]!=sig && cca[5]!=sig && acb[0]!=sig && acb[1]!=sig && acb[2]!=sig && acb[3]!=sig && acb[4]!=sig && acb[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    cca[row7]= sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 4){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && ccb[3]!=sig && ccb[4]!=sig && ccb[5]!=sig && acb[0]!=sig && acb[1]!=sig && acb[2]!=sig && acb[3]!=sig && acb[4]!=sig && acb[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccb[row8]= sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 5){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && ccc[3]!=sig && ccc[4]!=sig && ccc[5]!=sig && acb[0]!=sig && acb[1]!=sig && acb[2]!=sig && acb[3]!=sig && acb[4]!=sig && acb[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccc[row9]= sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 6){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && cca[3]!=sig && cca[4]!=sig && cca[5]!=sig && acc[0]!=sig && acc[1]!=sig && acc[2]!=sig && acc[3]!=sig && acc[4]!=sig && acc[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    cca[row7]= sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 7){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && ccb[3]!=sig && ccb[4]!=sig && ccb[5]!=sig && acc[0]!=sig && acc[1]!=sig && acc[2]!=sig && acc[3]!=sig && acc[4]!=sig && acc[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccb[row8]= sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 8){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && ccc[3]!=sig && ccc[4]!=sig && ccc[5]!=sig && acc[0]!=sig && acc[1]!=sig && acc[2]!=sig && acc[3]!=sig && acc[4]!=sig && acc[5]!=sig){
                    di.innerText = sig;
                    cou09[sig-1]= sig;
                    ccc[row9]= sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = 0;
                    for(let j=0; j<cou09.length; j++){
                        var gg = document.getElementById(c3[j]);
                        gg.innerText = "";
                        cou09[j]= "n";
                        // console.log(cou02[i]);
                    }
                    i = i - 1;

                    aca[6] = "";
                    aca[7] = "";
                    aca[8] = "";
                    acb[6] = "";
                    acb[7] = "";
                    acb[8] = "";
                    acc[6] = "";
                    acc[7] = "";
                    acc[8] = "";

                    cca[6] = "";
                    cca[7] = "";
                    cca[8] = "";
                    ccb[6] = "";
                    ccb[7] = "";
                    ccb[8] = "";
                    ccc[6] = "";
                    ccc[7] = "";
                    ccc[8] = "";


                    str7 = 6;
                    str8 = 6;
                    str9 = 6;

                    row7 = 6;
                    row8 = 6;
                    row9 = 6;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";

                    }
                }
            }
if(bug>200){
    for(let j=0; j<cou09.length; j++){
        var gg = document.getElementById(c3[j]);
        gg.innerText = "";
        cou09[j]= "n";
        // console.log(cou02[i]);
    }

    for(let j=0; j<cou08.length; j++){
        var gg = document.getElementById(c2[j]);
        gg.innerText = "";
        cou08[j]= "n";
    }

    ca2();

    str7 = 6;
    str8 = 6;
    str9 = 6;

    row7 = 6;
    row8 = 6;
    row9 = 6;

    bug = 0;
    i = -1;
}
}else{
    i = i -1;
    ran();
}
}
bug = 0;

console.log(cca);
console.log(ccb);
console.log(ccc);

console.log(aca);
console.log(acb);
console.log(acc);
}
function aa1(){

    //////---第一層判斷---//////

    
    var a01 = new Array(9);
    for(let i=0; i<a1.length; i++){
        a01[a1[i]]= "n";
    }

    ran();

    for(let i=0; i<p1.length; i++){
        // alert("start" + i);
        // console.log(i);
        if(cou01[sig-1]!=sig){
            var di = document.getElementById(a1[i]);
            // di.className = sig;
            di.innerText = sig;
            cou01[sig-1]= sig;
            a01[a1[i]]= sig;
            if(a1[i]<9){
                aaa[str1]= a01[a1[i]];
                str1 = str1 + 1;
            }else if(a1[i]<12){
                aab[str2]= a01[a1[i]];
                str2 = str2 +1;
            }else{
                aac[str3]= a01[a1[i]];
                str3 = str3 +1;
            }

            if(a1[i]== 0||a1[i]== 9||a1[i]== 18){
                baa[row1] = a01[a1[i]];
                row1 = row1 + 1;
            }else if(a1[i]== 1||a1[i]== 10||a1[i]== 19){
                bab[row2] = a01[a1[i]];
                row2 = row2 + 1;
            }else{
                bac[row3] = a01[a1[i]];
                row3 = row3 + 1;
            }
            // console.log(a01[a1[i]]);
            // console.log(cou01[sig-1]);
            ran();
        }else{
            i =i-1;
            ran();
        }
    }

    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }
}

function aa2(){
   ///////-------[a2]------///////

   var bc = 1;
   ran();
   for(let i=0; i<p1.length; i++){
       // bug = bug + 1;
       // if(bug>200){
       //     alert("a2 bug");
       // }
       // console.log(i);
       if(cou02[sig-1]!=sig){
           var di = document.getElementById(a2[i]);
           if(a2[i] == 27|| a2[i] == 36|| a2[i] == 45){
               if(baa[0]!=sig && baa[1]!=sig && baa[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                   bc = bc + 9;
                   cou02[sig-1]= sig;
                   baa[row1]= sig;
                   row1 = row1 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = i - 1;
                   ran();
               }

           }else if(a2[i] == 28|| a2[i] == 37|| a2[i] == 46){
               if(bab[0]!=sig && bab[1]!=sig && bab[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                   bc = bc + 9;
                   cou02[sig-1]= sig;
                   bab[row3]= sig;
                   row2 = row2 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = i - 1;
                   ran();
               }
           }else{
               if(bac[0]!=sig && bac[1]!=sig && bac[2]!=sig){
                   // di.className = sig;
                   di.innerText = sig;
                   bc = bc + 9;
                   cou02[sig-1]= sig;
                   bac[row3]= sig;
                   row3 = row3 + 1;
                   // console.log(cou02[sig-1]);
                   ran();
               }else{
                   i = -1;
                   for(let j=0; j<cou02.length; j++){
                       cou02[j]= "n";
                       di.innerText ="";
                   }

                   baa[3] ="";
                   baa[4] ="";
                   baa[5] ="";
                   bab[3] ="";
                   bab[4] ="";
                   bab[5] ="";
                   bac[3] ="";
                   bac[4] ="";
                   bac[5] ="";

                   row1 = 3;
                   row2 = 3;
                   row3 = 3;

                   getanum = 0;
                   for(let s=0; s<getNum.length; s++){
                       getNum[s] = "";
                   }
                   ran();
               }
           }
           
       }else{
           i = i-1;
           ran();
       }
   }

   for(let s=0; s<bba.length; s++){
       var ge = document.getElementById(a2[s]);
       if(s<3){
           aba[str4] = parseInt(ge.innerText);
           str4 = str4 + 1;
       }else if(s<6){
           abb[str5] = parseInt(ge.innerText);
           str5 = str5 + 1;
       }else{
           abc[str6] = parseInt(ge.innerText);
           str6 = str6 + 1;
       }
   }

   getanum = 0;
   for(let s=0; s<getNum.length; s++){
       getNum[s] = "";
   }
}

function ba1(){
        //---------[b1]----------//

    // var bc = 1;
    

    ran();
    for(let i=0; i<p1.length; i++){
        // bug = bug + 1;
        // if(bug>200){
        // alert("b1 bug");
        // }
        // console.log(i);
        if(cou03[sig-1]!=sig){
            if(b1[i]<9){
                if(aaa[0]!=sig && aaa[1]!=sig && aaa[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aaa[str1]= sig;
                    str1 = str1 + 1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b1[i]<15){
                if(aab[0]!=sig && aab[1]!=sig && aab[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aab[str2]= sig;
                    str2 = str2 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else{
                if(aac[0]!=sig && aac[1]!=sig && aac[2]!=sig){
                    var di = document.getElementById(b1[i]);
                    // di.className = sig;
                    di.innerText = sig;
                    bc = bc + 9;
                    cou03[sig-1]= sig;
                    aac[str3]= sig;
                    str3 = str3 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = -1;
                    for(let j=0; j<cou03.length; j++){
                        var di = document.getElementById(b1[j]);
                        di.innerText = "";

                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }

                    aaa[3] ="";
                    aaa[4] ="";
                    aaa[5] ="";
                    aab[3] ="";
                    aab[4] ="";
                    aab[5] ="";
                    aac[3] ="";
                    aac[4] ="";
                    aac[5] ="";

                    str1 = 3;
                    str2 = 3;
                    str3 = 3;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
        }else{
            i =i-1;
            ran();
        }
        
    }
    // bug = 0;

    for(let i=0; i<bba.length; i++){
        var ge = document.getElementById(b1[i]);
        if(i==0|| i==3|| i==6){
            bba[row4] = parseInt(ge.innerText);
            row4 = row4 + 1;
        }else if(i==1|| i==4|| i==7){
            bbb[row5] = parseInt(ge.innerText);
            row5 = row5 + 1;
        }else{
            bbc[row6] = parseInt(ge.innerText);
            row6 = row6 + 1;
        }
    }

    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

    // alert("b1 fin");
    aa3();
}

function aa3(){
         //////-------[a3]------///////

         var bc = 1;
    

         ran();
         for(let u=0; u<p1.length; u++){
             // bug = bug + 1;
             // if(bug>200){
             //     alert("a3 bug");
             // }
             // console.log(i);
             if(cou04[sig-1]!=sig){
                 var di = document.getElementById(a3[u]);
                 if(a3[u] == 54|| a3[u] == 63|| a3[u] == 72){
                     if(baa[0]!=sig && baa[1]!=sig && baa[2]!=sig && baa[3]!=sig && baa[4]!=sig && baa[5]!=sig){
                         // di.className = sig;
                         di.innerText = sig;
                         bc = bc + 9;
                         cou04[sig-1]= sig;
                         baa[row1]= sig;
                         row1 = row1 + 1;
                         // console.log(cou02[sig-1]);
                         ran();
                     }else{
                         u = u - 1;
                         ran();
                     }
     
                 }else if(a3[u] == 55|| a3[u] == 64|| a3[u] == 73){
                     if(bab[0]!=sig && bab[1]!=sig && bab[2]!=sig && bab[3]!=sig && bab[4]!=sig && bab[5]!=sig){
                         // di.className = sig;
                         di.innerText = sig;
                         bc = bc + 9;
                         cou04[sig-1]= sig;
                         bab[row3]= sig;
                         row2 = row2 + 1;
                         // console.log(cou02[sig-1]);
                         ran();
                     }else{
                         u = u - 1;
                         ran();
                     }
                 }else{
                     if(bac[0]!=sig && bac[1]!=sig && bac[2]!=sig && bac[3]!=sig && bac[4]!=sig && bac[5]!=sig){
                         // di.className = sig;
                         di.innerText = sig;
                         bc = bc + 9;
                         cou04[sig-1]= sig;
                         bac[row3]= sig;
                         row3 = row3 + 1;
                         // console.log(cou02[sig-1]);
                         ran();
                     }else{
                         u = 0;
                         for(let j=0; j<cou04.length; j++){
                             cou04[j]= "n";
                             var no1 = document.getElementById(a3[j]);
                             no1.innerText ="";
                         }
                         bug = 0;
     
                         u = u - 1;
     
                         getanum = 0;
                         for(let s=0; s<getNum.length; s++){
                             getNum[s] = "";
                         }
                         ran();
                     }
                 }
                 
             }else{
                 u = u-1;
                 ran();
             }
     
            
         }
     
         // bug = 0;
     
         for(let i=0; i<acc.length; i++){
             var ge = document.getElementById(a3[i]);
             if(i<3){
                 aca[str7] = parseInt(ge.innerText);
                 str7 = str7 + 1;
             }else if(i<6){
                 acb[str8] = parseInt(ge.innerText);
                 str8 = str8 + 1;
             }else{
                 acc[str9] = parseInt(ge.innerText);
                 str9 = str9 + 1;
             }
         }
     
         getanum = 0;
         for(let s=0; s<getNum.length; s++){
             getNum[s] = "";
         }
}

function ca1(){
    //---------[c1]----------//

    ran();
    for(let i=0; i<p1.length; i++){
        bug = bug + 1;
        // if(bug>200){
        //     alert("C1 bug");
        // }
        // console.log(i);
        if(cou05[sig-1]!=sig){
            var di = document.getElementById(c1[i]);
            if(c1[i]<9){
                if(aaa[0]!=sig && aaa[1]!=sig && aaa[2]!=sig && aaa[3]!=sig && aaa[4]!=sig && aaa[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou05[sig-1]= sig;
                    aaa[str1]= sig;
                    str1 = str1 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(c1[i]<18){
                if(aab[0]!=sig && aab[1]!=sig && aab[2]!=sig && aab[3]!=sig && aab[4]!=sig && aab[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou05[sig-1]= sig;
                    aab[str2]= sig;
                    str2 = str2 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else{
                if(aac[0]!=sig && aac[1]!=sig && aac[2]!=sig && aac[3]!=sig && aac[4]!=sig && aac[5]!=sig){
                    // di.className = sig;
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou05[sig-1]= sig;
                    aac[str3]= sig;
                    str3 = str3 +1;
                    // console.log(cou02[sig-1]);
                    ran();
                }else{
                    // alert("someting wrong!");
                    i = 0;
                    for(let j=0; j<cou05.length; j++){
                        var gg = document.getElementById(c1[j]);
                        gg.innerText = "";
                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }
                    i = i - 1;

                    aaa[6] ="";
                    aaa[7] ="";
                    aaa[8] ="";
                    aab[6] ="";
                    aab[7] ="";
                    aab[8] ="";
                    aac[6] ="";
                    aac[7] ="";
                    aac[8] ="";

                    str1 = 6;
                    str2 = 6;
                    str3 = 6;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
        }else{
            i =i-1;
            ran();
        }
        if(bug > 200){
            bug = 0;
            i = -1;
    
            str1 = 6;
            str2 = 6;
            str3 = 6;
    
            for(let j=0; j<cou05.length; j++){
                var gg = document.getElementById(c1[j]);
                gg.innerText = "";
                cou05[j]= "n";
                // console.log(cou02[i]);
            }
        }   
    }

    // bug = 0;
    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

    for(let i=0; i<acc.length; i++){
        var ge = document.getElementById(c1[i]);
        if(i==0||i==3||i==6){
            cca[row7] = parseInt(ge.innerText);
            row7 = row7 + 1;
        }else if(i==1||i==4||i==7){
            ccb[row8] = parseInt(ge.innerText);
            row8 = row8 + 1;
        }else{
            ccc[row9] = parseInt(ge.innerText);
            row9 = row9 + 1;
        }
    }
}

function ba2(){
    //---------[b2]----------//

    ran();
    for(let i=0; i<cou06.length; i++){
        bug = bug + 1;
        // if(bug>200){
            // alert("b2 bug");
        // }
        // alert(i);
        if(cou06[sig-1]!=sig){
            var di = document.getElementById(b2[i]);
            if(b2[i]<33){
                if(aba[0]!=sig&&aba[1]!=sig&&aba[2]!=sig){
                    if(i == 0|| i == 3|| i ==6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            // bc = bc + 9;
                            cou06[sig-1]= sig;
                            bba[row4]= sig;
                            row4 = row4 + 1;

                            aba[str4] = sig;
                            str4 = str4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            // bc = bc + 9;
                            cou06[sig-1]= sig;
                            bbb[row5]= sig;
                            row5 = row5 + 1;

                            aba[str4] = sig;
                            str4 = str4 + 1;
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            //  bc = bc + 9;
                             cou06[sig-1]= sig;
                             bbc[row6]= sig;
                             row6 = row6 + 1;
                             // console.log(cou02[sig-1]);

                             aba[str4] = sig;
                             str4 = str4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else{
                        // alert("someting wrong!");
                        i = i-1;
                        ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b2[i]<42){
                if(abb[0]!=sig&&abb[1]!=sig&&abb[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){
                            di.innerText = sig;
                            // bc = bc + 9;
                            cou06[sig-1]= sig;
                            bba[row4]= sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);

                            abb[str5] = sig;
                            str5 = str5 + 1;
                        ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                            // bc = bc + 9;
                            cou06[sig-1]= sig;
                            bbb[row5]= sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);

                            abb[str5] = sig;
                            str5 = str5 + 1;
                            ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }

                    }else if(i == 2|| i == 5|| i ==8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                // bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbc[row6]= sig;
                                row6 = row6 + 1;
                                // console.log(cou02[sig-1]);

                                abb[str5] = sig;
                                str5 = str5 + 1;
                            ran();
                            }else{
                                // alert("someting wrong!");
                                i = i - 1;
                                ran();
                            }
                    }else{
                        i = i - 1;
                        ran();
                    }
                    
            }else{
                i = i - 1;
                ran();
            }
        }else{
                if(abc[0]!=sig&&abc[1]!=sig&&abc[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                // bc = bc + 9;
                                cou06[sig-1]= sig;
                                bba[row4]= sig;
                                row4 = row4 + 1;

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                        }

                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                // bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbb[row5]= sig;
                                row5 = row5 + 1;
                                // console.log(cou02[sig-1]);

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                            }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig){// di.className = sig;
                            di.innerText = sig;
                                // bc = bc + 9;
                                cou06[sig-1]= sig;
                                bbc[row6]= sig;
                                row6 = row6 + 1;

                                abc[str6] = sig;
                                str6 = str6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i - 1;
                            ran();
                            }
                        
                    }else{
                        i = i - 1;
                            ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i - 1;
                    ran();
                }
            }
    }else if(cou06.indexOf("n")+1 == bbc[0]||cou06.indexOf("n")+1 == bbc[1]||cou06.indexOf("n")+1 == bbc[2]||cou06.indexOf("n")+1 == abc[0]||cou06.indexOf("n")+1 == abc[1]||cou06.indexOf("n")+1 == abc[2]){
        i = 0;
        for(let j=0; j<cou06.length; j++){
            var gg = document.getElementById(b2[j]);
            gg.innerText = "";
            cou06[j]= "n";
            // console.log(cou02[i]);
        }
        i = i - 1;

        str4 = 3;
        str5 = 3;
        str6 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;

        getanum = 0;
        for(let s=0; s<getNum.length; s++){
            getNum[s] = "";
        }
        ran();
    }else{
        i = i - 1;
        ran();
    }
    if(bug>200){
        i = -1;

        for(let j=0; j<cou06.length; j++){
            var gg = document.getElementById(b2[j]);
            gg.innerText = "";
            cou06[j]= "n";
            // console.log(cou02[i]);
        }

        str4 = 3;
        str5 = 3;
        str6 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;

        bug = 0;
    }
    
}
            bug = 0;
            getanum = 0;
            for(let s=0; s<getNum.length; s++){
                getNum[s] = "";
            }

            // alert("c2" + aba);
}

function ba3(){
     //---------[b3]----------//

    // var bc = 1;
    

    ran();
    for(let i=0; i<p1.length; i++){
        bug = bug + 1;
        // if(bug>200){
            // alert("b3 bug");
        //     break;
        // }
        // alert("[b3]" + i);
        if(cou07[sig-1]!=sig){
            var di = document.getElementById(b3[i]);
            if(b3[i]<60){
                if(aca[0]!=sig&&aca[1]!=sig&&aca[2]!=sig){
                    if(i == 0|| i == 3|| i ==6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bba[row4] = sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else if(i == 2|| i == 5|| i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){
                            // di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            aca[str7] = sig;
                            str7 = str7 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = i-1;
                            ran();
                        }
                    }else{
                        // alert("someting wrong!");
                        i = i-1;
                        ran();
                    }
                }else{
                    // alert("someting wrong!");
                    i = i-1;
                    ran();
                }
            }else if(b3[i]<69){
                if(acb[0]!=sig&&acb[1]!=sig&&acb[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){
                        // di.className = sig;
                        di.innerText = sig;
                        bc = bc + 9;
                        cou07[sig-1]= sig;
                        acb[str8]= sig;
                        str8 = str8 +1;

                        bba[row4] = sig;
                        row4 = row4 + 1;
                        // console.log(cou02[sig-1]);
                        ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }
                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acb[str8]= sig;
                            str8 = str8 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            // alert("someting wrong!");
                            i = i-1;
                            ran();
                        }

                    }else if(i == 2|| i == 5|| i ==8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acb[str8]= sig;
                            str8 = str8 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                            }else{
                                // alert("someting wrong!");
                                i = i - 1;
                                ran();
                            }
                    }else{
                        i = i - 1;
                        ran();
                    }
                    
            }else{
                i = i - 1;
                ran();
            }
        }else{
                if(acc[0]!=sig&&acc[1]!=sig&&acc[2]!=sig){
                    if(i == 0|| i == 3 || i == 6){
                        if(bba[0]!=sig && bba[1]!=sig && bba[2]!=sig && bba[3]!=sig && bba[4]!=sig && bba[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bba[row4] = sig;
                            row4 = row4 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }

                    }else if(i == 1|| i == 4|| i == 7){
                        if(bbb[0]!=sig && bbb[1]!=sig && bbb[2]!=sig && bbb[3]!=sig && bbb[4]!=sig && bbb[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bbb[row5] = sig;
                            row5 = row5 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }
                    }else if(i == 2|| i == 5 || i == 8){
                        if(bbc[0]!=sig && bbc[1]!=sig && bbc[2]!=sig && bbc[3]!=sig && bbc[4]!=sig && bbc[5]!=sig){// di.className = sig;
                            di.innerText = sig;
                            bc = bc + 9;
                            cou07[sig-1]= sig;
                            acc[str9]= sig;
                            str9 = str9 +1;

                            bbc[row6] = sig;
                            row6 = row6 + 1;
                            // console.log(cou02[sig-1]);
                            ran();
                        }else{
                            i = 0;
                            for(let j=0; j<cou07.length; j++){
                            var gg = document.getElementById(b3[j]);
                            gg.innerText = "";
                            cou07[j]= "n";
                            // console.log(cou02[i]);
                            }
                            i = i - 1;

                            bba[6] = "";
                            bba[7] = "";
                            bba[8] = "";
                            bbb[6] = "";
                            bbb[7] = "";
                            bbb[8] = "";
                            bbc[6] = "";
                            bbc[7] = "";
                            bbc[8] = "";

                            aca[3] = "";
                            aca[4] = "";
                            aca[5] = "";
                            acb[3] = "";
                            acb[4] = "";
                            acb[5] = "";
                            acc[3] = "";
                            acc[4] = "";
                            acc[5] = "";


                            str7 = 3;
                            str8 = 3;
                            str9 = 3;

                            row4 = 6;
                            row5 = 6;
                            row6 = 6;

                            getanum = 0;
                            for(let s=0; s<getNum.length; s++){
                                getNum[s] = "";
                            }
                            ran();
                        }
                    }
                }else{
                    i = i - 1;
                    ran();
                }

            }
        }else{
            i = i - 1;
            ran();
    }

    if(bug>200){
        bug = 0;
        i = 0;
        str7 = 3;
        str8 = 3;
        str9 = 3;

        row4 = 6;
        row5 = 6;
        row6 = 6;
        break;
    }
    console.log(i);
}
bug = 0;

if(checkCa > 0){
    ca2();
}

    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }

    // alert("b3" + aba);
}

function ca2(){
    //---------[c2]----------//

    ran();
    for(let i=0; i<p1.length; i++){
        // alert(i);
        bug = bug + 1;
        // if(bug>200){
            // alert("c2 bug");
        // }
        if(cou08[sig-1]!=sig){
            var di = document.getElementById(c2[i]);
            if(i == 0){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 1){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 2){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && aba[0]!=sig && aba[1]!=sig && aba[2]!=sig && aba[3]!=sig && aba[4]!=sig && aba[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    aba[str4] = sig;
                    str4 = str4 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 3){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 4){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 5){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && abb[0]!=sig && abb[1]!=sig && abb[2]!=sig && abb[3]!=sig && abb[4]!=sig && abb[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abb[str5] = sig;
                    str5 = str5 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 6){
                if(cca[0]!=sig && cca[1]!=sig && cca[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    cca[row7] = sig;
                    row7 = row7 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 7){
                if(ccb[0]!=sig && ccb[1]!=sig && ccb[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    ccb[row8] = sig;
                    row8 = row8 + 1;
                    ran();
                }else{
                    i = i-1;
                    ran();
                }
            }else if(i == 8){
                if(ccc[0]!=sig && ccc[1]!=sig && ccc[2]!=sig && abc[0]!=sig && abc[1]!=sig && abc[2]!=sig && abc[3]!=sig && abc[4]!=sig && abc[5]!=sig){
                    di.innerText = sig;
                    // bc = bc + 9;
                    cou08[sig-1]= sig;
                    abc[str6] = sig;
                    str6 = str6 +1;

                    ccc[row9] = sig;
                    row9 = row9 + 1;
                    ran();
                }else{
                    i = 0;
                    for(let j=0; j<cou05.length; j++){
                        var gg = document.getElementById(c1[j]);
                        gg.innerText = "";
                        cou03[j]= "n";
                        // console.log(cou02[i]);
                    }
                    i = i - 1;

                    aba[3] = "";
                    aba[4] = "";
                    aba[5] = "";
                    abb[3] = "";
                    abb[4] = "";
                    abb[5] = "";
                    abc[3] = "";
                    abc[4] = "";
                    abc[5] = "";

                    cca[6] = "";
                    cca[7] = "";
                    cca[8] = "";
                    ccb[6] = "";
                    ccb[7] = "";
                    ccb[8] = "";
                    ccc[6] = "";
                    ccc[7] = "";
                    ccc[8] = "";

                    str4 = 6;
                    str5 = 6;
                    str6 = 6;

                    row7 = 3;
                    row8 = 3;
                    row9 = 3;

                    getanum = 0;
                    for(let s=0; s<getNum.length; s++){
                        getNum[s] = "";
                    }
                    ran();
                }
            }
    }else{
        i = i - 1;
        ran();
    }

    if(bug>200){
        str4 = 6;
        str5 = 6;
        str6 = 6;
    
        row7 = 3;
        row8 = 3;
        row9 = 3;

        row4 = 3;
        row5 = 3;
        row6 = 3;
    
        for(let j=0; j<cou08.length; j++){
            var gg = document.getElementById(c2[j]);
            gg.innerText = "";
            cou08[j]= "n";
            // console.log(cou02[i]);
        }

        checkCa = checkCa + 1;

        i = - 1;
    
        // ca1();
    
        // alert("系統維護中，請重新整理及等待系統修復。");
    }else{
    
    getanum = 0;
    for(let s=0; s<getNum.length; s++){
        getNum[s] = "";
    }
    }
}

// alert("c2" + aba);
}

function cac3(){
    //---------[c3]----------//

    var cc = new Array(9);

    ran();
    for(let i=0; i<p1.length; i++){
        bug = bug + 1;
        if(cou09[sig-1]!=sig){
            var di = document.getElementById(c3[i]);
            if(i == 0){
                var check = new Array(9);
                cc = aca.concat(cca);
                cc.sort();
                console.log(cc);
            }


        i = 0;
       for(let j=0; j<cou09.length; j++){
        var gg = document.getElementById(c3[j]);
            gg.innerText = "";
            cou09[j]= "n";
        }
        i = i - 1;

        aca[6] = "";
        aca[7] = "";
        aca[8] = "";
        acb[6] = "";
        acb[7] = "";
        acb[8] = "";
        acc[6] = "";
        acc[7] = "";
        acc[8] = "";

        cca[6] = "";
        cca[7] = "";
        cca[8] = "";
        ccb[6] = "";
        ccb[7] = "";
        ccb[8] = "";
        ccc[6] = "";
        ccc[7] = "";
        ccc[8] = "";


        str7 = 6;
        str8 = 6;
        str9 = 6;

        row7 = 6;
        row8 = 6;
        row9 = 6;

        getanum = 0;
        for(let s=0; s<getNum.length; s++){
            getNum[s] = "";
        }
    }

    if(bug>200){
        alert("系統忙碌！");
    }
}

}

function ran(){
    var b = Math.floor((Math.random() * 9) + 1);
    // console.log(b);
    sig = b;

    // getNum[getanum] = sig;
    // if(getNum.indexOf(sig) != -1) {
    //     getNum[getanum] = "";
    //     getanum = getanum - 1;
    // }

    // console.log(getNum.indexOf(sig));
    // console.log(getNum[getanum]);

    getanum = getanum + 1;
}