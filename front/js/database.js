function Send(method,dic,callback){
    dic['sid']='hack1'

    loader=document.getElementById('loader')
    if(loader){
      loader.style.display = 'block'
    }
    if (method=='add'){
      dic['time']=Date.now()
    }
    
    $(function () {
      $.ajax({
        url: 'https://sdyzrnc9i1.execute-api.us-east-2.amazonaws.com/default/'+method+'/' + Dic2ParamString(dic),
        type: 'GET',
        //data:JSON.stringify(dic),
        contentType: 'application/json',
      })
        .done((res) => {
          console.log(res)
          loader=document.getElementById('loader')
          if(loader){
            loader.style.display = 'none'
          }
          if(callback){
            callback(res)
          }
        })
        .fail((res) => {
          if(loader){
            loader.style.display = 'none'
          }
          window.alert('通信に失敗しました')
          console.log(res);
        })
    });
  }
  
  function Dic2ParamString(obj) {
    let str = "?";
    for (var key in obj) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str
  }
  
  function randint(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  