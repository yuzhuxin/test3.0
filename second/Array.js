//1
let arr = [];
let newarr = new Set(arr);
console.log(newarr);//数组对象
//console.log(Array.from(newarr));//数组

/*2
Array.prototype.distinct = function (){
 var arr = this,
  result = [],
  len = arr.length;
 arr.forEach(function(v, i ,arr){
  var bool = arr.indexOf(v,i+1);
  if(bool === -1){
   result.push(v);
  }
 })
 return result;
};
var a = [];
var b = a.distinct();
console.log(b.toString());*/

/*3
Array.prototype.distinct = function (){
 var arr = this,
  i,
  obj = {},
  result = [],
  len = arr.length;
 for(i = 0; i< arr.length; i++){
  if(!obj[arr[i]]){ 
   obj[arr[i]] = 1;
   result.push(arr[i]);
  }
 }
 return result;
};
var a = [];
var b = a.distinct();
console.log(b.toString());*/
