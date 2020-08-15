$(function(){
	// var p = $("p").text();
	// if(p==''||p==null){
	// 	remove($(this));
	// }
	$.ajax({
		url:'./inc/news.php',
		type:'post',
		data:{method:'ready'},
		success:function(res){
			res = $.parseJSON(res);
			console.log(res);
			for(var i = 0;i<res.length;i++){
				var html = '';
				html+='<div  class="news_content_list fl clear" >';
				html+='<div class="content_list_time fl">';
				html+='<dd>'+res[i]['time'].substring(5,11)+'</dd>';
				html+='<dt class="iconfont"><span></span></dt>';
				html+='</div>';
				html+='<div class="content_list_txt fl">';
				html+='<dd><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" target="_blank">'+res[i]['title']+'</a></dd>';
				html+='<div><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" target="_blank">'+res[i]['content']+'</a></div>';
				html+='</div>';
				html+='<div class="content_list_img fl"><a style="width:100%" href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['type']+'"><img style="width:100%" src="admin/upload/'+eval(res[i]['file'])+'" alt="'+res[i]['title']+'" class="tra"></a></div>';
				html+='<div class="btn  fl">TAG：</div>';
				html+='</div>';
				$(".news_content").append(html);
			}
		}
	})
})



				
					
					
				
				
					
					
				
				
				
			

$(function(){
	$(".news_type").click(function(){
		var type=$(this).attr('typename');
		console.log(type);
		$(".content_right_list").remove();
		$(".IndexNews_content_right").text('');
		$.ajax({
			url:'./inc/news.php',
			type:'post',
			data:{method:'newstype',type:type},
			success:function(res){
			res = $.parseJSON(res);
			console.log(res);
			for(var i = 0;i<res.length;i++){
				var html = '';

				html+='<div  class="news_content_list fl clear" >';
				html+='<div class="content_list_time fl">';
				html+='<dd>'+res[i]['time'].substring(5,11)+'</dd>';
				html+='<dt class="iconfont"><span></span></dt>';
				html+='</div>';
				html+='<div class="content_list_txt fl">';
				html+='<dd><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" target="_blank">'+res[i]['title']+'</a></dd>';
				html+='<div><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" target="_blank">'+res[i]['content']+'</a></div>';
				html+='</div>';
				html+='<div class="content_list_img fl"><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'"><img src="admin/upload/'+eval(res[i]['file'])+'" alt="'+res[i]['title']+'" class="tra"></a></div>';
				html+='<div class="btn  fl">TAG：</div>';
				html+='</div>';
				$(".news_content").append(html);
			}
		}
		})
	})
	
})



