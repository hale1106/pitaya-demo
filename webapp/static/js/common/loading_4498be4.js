var imageLoad=new ImageLoad,imageUrls=[],$loading=$("#loading");$(document.body).find("img").each(function(){imageUrls.push($(this).attr("src"))}),imageLoad.queueImage(imageUrls).queueImage(loadImgArr).preLoad(function(a){$loading.find(".progress span").html(a+"%"),$loading.find(".progress_bar span").css({width:a+"%"})},function(){$("#loading").remove();(new Main).init();this.loadImages()});