function showData1() {
    var data1Div = document.getElementsByClassName('panel1')[0];
    var data2Div = document.getElementsByClassName('panel2')[0];
    var data3Div = document.getElementsByClassName('panel3')[0];    
    data1Div.style.display = 'block';
    data2Div.style.display = 'none';
    data3Div.style.display = 'none';
}
function showData2() {
    var data2Div = document.getElementsByClassName('panel2')[0];
    var data1Div = document.getElementsByClassName('panel1')[0];
    var data3Div = document.getElementsByClassName('panel3')[0];
    data2Div.style.display = 'block';
    data1Div.style.display = 'none';
    data3Div.style.display = 'none';
}
function showData3() {
    var data3Div = document.getElementsByClassName('panel3')[0];
    var data1Div = document.getElementsByClassName('panel1')[0];
    var data2Div = document.getElementsByClassName('panel2')[0];
    data3Div.style.display = 'block';
    data1Div.style.display = 'none';
    data2Div.style.display = 'none';
}
