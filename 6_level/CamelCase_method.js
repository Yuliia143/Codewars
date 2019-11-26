// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
String.prototype.camelCase=function(){
    let str = this.trim().split(' ');
    return str.map((item)=> item = item.charAt(0).toUpperCase() + item.substring(1)).join('');
};
console.log('hello case'.camelCase());