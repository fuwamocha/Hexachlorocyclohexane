function GE(str){
    return document.getElementById(str)
}
function CE(str){
    return document.createElement(str)
}
function GetCookie(str){
    return document.cookie.split('; ').find(row => row.startsWith('test2')).split('=')[1];
}
function AddCookie(key,val){
    document.cookie = key+"="+val
}

function RandomStr(N){
    S="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    return Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')
}