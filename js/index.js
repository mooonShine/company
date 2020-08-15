$(function(){
	var p = $("p").text();
	if(p==''||p==null){
		remove($(this));
	}
	$.ajax({
		url:'./inc/index.php',
		type:'post',
		data:{method:'ready'},
		success:function(res){
			res = $.parseJSON(res);
			console.log(res);
			for(var i = 0;i<res.length;i++){
				var html = '';
				html+='<div class="content_right_list clear fl">';
				html+='<div class="right_list_img fl"><a style="width:100%" href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" ><img style="width:100%" src="admin/upload/'+eval(res[i]['file'])+'" class="tra" alt="'+res[i]['title']+'"></a></div>';
				html+='<div class="right_list_content fr clear">';
				html+='<div class="list_content_title clear">';
				html+='<dd class="fl"><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'">'+res[i]['title']+'</a></dd>';
				html+='<dt class="fr">'+res[i]['time'].substring(5,11)+'</dt>';
				html+='</div>';
				html+='<div>'+res[i]['content']+'</div>';
				html+='</div>';
				html+='</div>';
				$(".IndexNews_content_right").append(html);
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
			url:'./inc/index.php',
			type:'post',
			data:{method:'newstype',type:type},
			success:function(res){
				res = $.parseJSON(res);
				console.log(res);
				if(res){
					for(var i = 0;i<res.length;i++){
						var html = '';
						html+='<div class="content_right_list clear fl">';
						html+='<div class="right_list_img fl"><a style="width:100%" href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'" ><img style="width:100%" src="admin/upload/'+eval(res[i]['file'])+'" class="tra" alt="'+res[i]['title']+'"></a></div>';
						html+='<div class="right_list_content fr clear">';
						html+='<div class="list_content_title clear">';
						html+='<dd class="fl"><a href="newsinfo.html?newsid='+res[i]['id']+'&type='+res[i]['id']+'">'+res[i]['title']+'</a></dd>';
						html+='<dt class="fr">'+res[i]['time'].substring(5,11)+'</dt>';
						html+='</div>';
						html+='<div>'+res[i]['content']+'</div>';
						html+='</div>';
						html+='</div>';
						$(".IndexNews_content_right").append(html);
					}
				}else if(res==''||res==null){
					$(".IndexNews_content_right").text('当前分类下没有文章');
				}
			}
		})
	})
	
})



