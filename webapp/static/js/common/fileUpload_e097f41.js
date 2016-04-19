!function(){"use strict";var e=function(t){return this instanceof e?(this.fileFilter=[],this.fileLen=0,void this.init(t)):new e(t)};e.prototype={constructor:"FileUpload",init:function(e){var t=this;t.config=$.extend({fileElem:$('input[type="file"]'),FORMAT:"jpg,jpeg,png,gif",MAX_IMAGE_SIZE:2097152,url:"",onReader:function(){},onProgress:function(){},onSuccess:function(){},onFailure:function(){},onComplete:function(){}},e||{}),this._$file=t.config.fileElem,this._$file.parent().on("change",this._$file,function(e){e.stopPropagation(),t.funGetFile(e,$(this).find("input"))})},updateInput:function(e){e[0].outerHTML=e[0].outerHTML.replace(/(value=\").+\"/i,'$1"')},funGetFile:function(e,t){function i(){var e=n.fileFilter[l];if(e){var o=new FileReader;o.onload=function(o){e.timeStamp=o.timeStamp,e.result=o.target.result,n.config.onReader.call(n,o,e),n.funUploadFile(e,t),l++,i()},o.readAsDataURL(e)}}var n=this,o=e.target.files,l=0;this.fileFilter=this.fileFilter.concat(this.filter(o,t)),this.fileLen=this.fileFilter.length,i()},funUploadFile:function(e,t){var i=this,n=new XMLHttpRequest,o=new FormData;n.upload&&(n.upload.addEventListener("progress",function(t){var n=t.loaded/t.total*100;i.config.onProgress.call(i,e,n)},!1),n.onreadystatechange=function(){4==n.readyState&&(200==n.status?(i.config.onSuccess.call(i,e,$.parseJSON(n.responseText)),i.fileLen--,i.fileLen<=0&&(i.config.onComplete.call(i),i.fileFilter=[],i.updateInput(t))):(i.config.onFailure.call(i,e,$.parseJSON(n.responseText)),i.fileFilter=[],i.updateInput(t)))},o.append("file",e),n.open("POST",i.config.url,!0),n.send(o))},filter:function(e,t){for(var i,n=[],o=0;i=e[o];o++){if(!this.formatRegExp(i.name))return alert("亲，您上传文件的格式不符合规则哦！！！"),this.updateInput(t),[];if(i.size>this.config.MAX_IMAGE_SIZE)return alert("亲，您上传的文件太大了！！！"),this.updateInput(t),[];n.push(i)}return n},formatRegExp:function(e){var t=this.config.FORMAT.split(",").join("|");return new RegExp(".("+t+")$","i").test(e)}},window.FileUpload=e}();