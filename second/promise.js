var ajaxOptions = {
    url: 'url',
    method: 'GET',//POST
    async: true,//false
    data: null,
    dataType: 'text',
}
 
function ajax(protoOptions) {
    var options = {};

    for(var i in ajaxOptions){
        options[i] = protoOptions[i] || ajaxOptions[i];
    }
     
 
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
         
        xhr.open(options.method, options.url, options.async);
 
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText, this);
            } else {
                var resJson = {
                    code: this.status,
                    response: this.response
                }
                reject(resJson, this)
            }
        }
 
        xhr.send()
 
    })
}