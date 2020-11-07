var rows = prompt('请输入行数');
var cols = prompt('请输入列数');
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        str += '★ ';
    }
    str += '\n';
}
console.log(str);