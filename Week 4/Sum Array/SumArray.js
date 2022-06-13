function sumArray()
        {
var m=0;
    m=parseInt(document.getElementById("suma").value);
const num = [...Array(m).keys()];
let sum = 0;
for (let i=0; i<num.length; i++)
        {
        sum += num[i]
}
console.log(sum)
alert(sum)
}