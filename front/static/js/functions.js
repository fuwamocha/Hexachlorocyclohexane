function GE(str){
    return document.getElementById(str)
}
function GetCookie(str){
    return document.cookie.split('; ').find(row => row.startsWith('test2')).split('=')[1];
}
function AddCookie(key,val){
    document.cookie = key+"="+val
}