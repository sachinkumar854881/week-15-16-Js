// array in javascript
var arr = [1,2,"sachin",undefined,"javascript"]
console.log(arr)
console.log(arr[2])
let arr1 = []
console.log("an empty array",arr1)
//various way copy  array elements in another array
let copyarr = arr/*simple way*/
console.log("copy arr is ",copyarr)
console.log("arr is ",arr)
console.log("add element by push method")
arr.push('sandeep')
console.log("copy arr is ",copyarr)
console.log("arr is ",arr)
/*Array.from()*/
let arr4 = Array.from(arr)
arr.push('111')
arr4.push('222')
console.log("arr4 is ",arr4)
console.log("arr is ",arr)
/*Slice()*/
let arr5 = arr.slice()
console.log("arr5 is ",arr5)
/* [...arr] */
let arr6 = [...arr]
arr.push("221")
console.log("arr is",arr)
console.log("arr6 is ",arr6)

// MultiDimension Array
var multi = [['car',2000],['truck',4000],['bike',1000]]
console.log("multi array is: ",multi)
console.log("multi[0]",multi[0])
console.log("multi[1]",multi[1])
console.log("multi[2]",multi[2])
console.log("multi[0][0]",multi[0][0])
console.log("multi[0][1]",multi[0][1])
console.log("multi[1][0]",multi[1][0])
console.log("multi[1][1]",multi[1][1])
console.log("multi[2][0]",multi[2][0])
console.log("multi[2][1]",multi[2][1])
var new_row = ['scotter',1000]
multi.push(new_row)
console.log("multi after add new row",multi) 
// how access multi array in short code
var multiDim =  [['Sachin','faridabad',27],
                ['Sandeep','faridabad',27],
                ['ved','faridabad',24]]
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            console.log(multiDim[i][j])
        }
    }


/* Array methods
    callback()
    filter()
    map()
    reduce()    
*/
// callback function
function sum(n1,n2,multi){
    console.log("n1 value is ",n1)
    console.log("n2 value is ",n2)
    console.log("multi",multi)
    let res = n1+n2
    let endres = multiply10(res)
    return endres
}
function multiply10(n){
    return n*10;
}
let result = sum(2,5,multiply10)
console.log("result is ",result)

// filter() examples
const names = ['sachin','sandeep','shivam','ankita','sinduri','raj']
function cb(element,index,array){
    return element.length>6
}
const resfilter = names.filter(cb,this)
console.log("resfilter is ",resfilter)

const numList = [1,2,3,4,44,55,66,76,43,2,3]
const numRes = numList.filter((element,index,array)=>{
    console.log(element,index,array)
    return element>10
})
console.log("numlist is--",numList)
console.log("numres is---",numRes)
// map()
const numResMap = numList.map((element,index,array)=>{
    console.log(element,index,array)
    return element*10
})
console.log("numlist is---",numList)
console.log("numResMap is---",numResMap)
// reduce()
var numRed = [10,20,30,40]
let initialValue = 0;
numredRes = numRed.reduce((acc,cv,ci,arr)=>{
    console.log(acc,cv,ci,arr)
    return acc+cv
},initialValue) 
console.log("numredRes is ",numredRes)
