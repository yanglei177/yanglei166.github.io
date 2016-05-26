    /**
     * 获得base64
     * @param {Object} o
     * @param {Number} [o.width] 图片需要压缩的宽度
     * @param {Number} [o.height] 图片需要压缩的高度，为空则会跟随宽度调整
     * @param {Number} [o.quality=0.8] 压缩质量，不压缩为1
     * @param {Number} [o.mixsize] 上传图片大小限制
     * @param {Number} [o.type] 上传图片格式限制
     * @param {Function} [o.before(blob)] 处理前函数,this指向的是input:file
     * @param {Function} o.success(obj) 处理后函数
     * @param {Function} o.error(obj) 处理后函数
     * @example
     *
     */


    $.fn.UploadImg = function(o){
        var sendfileName=null;
        this.change(function(){	
            var file = this.files[0];
            var fileType = file.name.substring(file.name.lastIndexOf("."), file.name.length);

            var today = new Date();
            var monther = parseInt(today.getMonth()) + 1;
            var currentTime = today.getFullYear() + "" + monther + "" + today.getDate() + "" + today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
            var fileName = currentTime + "" + Math.floor(Math.random() * 10 + 1) + fileType;
            sendfileName=fileName;
             
            if ($(".img_box li").length >= o.pictureCount) {
            		o.error("最多上传两张图片");
                     this.value='';
             } 
            else if(!checkSize(file)){
                 o.error("附件大小不能大于" + o.mixsize + "M！并且不能小于0M");
                this.value='';
            }else if(!checkType(fileType)){
                o.error('不接受此文件类型！支持的文件类型 .jpg .png .JPG .PNG');
                this.value='';
            }else{
                var URL =window.URL || window.webkitURL;
                var blob = URL.createObjectURL(file);
				var that = this;
                o.before(blob,fileName,that);
                $("#loading").show();
                _compress(blob,file);
                this.value='';
            }
        });				

        function checkSize(file) {
            var filemaxsize = 1024 * 2.5 * o.mixsize; //2M 
            var fileSize = file.size;
            var size = fileSize / 1024;
            if (size > filemaxsize) {
                return false;
            }
            if (size <= 0) {
                return false;
            }
            return true;
      }

function checkType(type) {
    var filetypes = o.type;
    var isnext = 0;
    if (filetypes && filetypes.length > 0) {
        for (var i = 0; i < filetypes.length; i++) {
            if (filetypes[i] == type) {
                isnext = 1;
                break;
            }
        }

    }
    if (isnext == 0) {
        return false;
    } else {
        return true;
    }

}

        function _compress(blob,file){
            var img = new Image();
            img.src = blob;
            img.onload = function(){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                if(!o.width && !o.height && o.quality == 1){
                    var w = this.width;
                    var h = this.height;
                }else{
                    var w = o.width || this.width;
                    var h = o.height || w/this.width*this.height;

                }
                $(canvas).attr({width : w, height : h});
                ctx.drawImage(this, 0, 0, w, h);
                var base64 = canvas.toDataURL(file.type, (o.quality || 0.8)*1 );
                if( navigator.userAgent.match(/iphone/i) ) {
                    var mpImg = new MegaPixImage(img);
                    mpImg.render(canvas, { maxWidth: w, maxHeight: h, quality: o.quality || 0.8});
                    base64 = canvas.toDataURL(file.type, o.quality || 0.8 );
                }

                // 修复android
                if( navigator.userAgent.match(/Android/i) ) {
                    var encoder = new JPEGEncoder();
                    base64 = encoder.encode(ctx.getImageData(0,0,w,h), o.quality * 100 || 80 );
                }

                _ajaximg(base64,file.type);
            };
        }

        function _ajaximg(base64,type,file){			
            $.post(o.url,{base64:base64,type:type,pictureName:sendfileName,bussinessType:o.bussinessType},function(res){
                var res = res;
                o.success(res);
                $("#loading").hide();
            });

        }
    };

