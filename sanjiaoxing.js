var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        // 1x2=2
        str += j + 'X' + i + '=' + i * j + '\t';
    }
    str += '\n'
}
console.log(str);