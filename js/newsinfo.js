$(function(){
	//获取get参数
	function GetQueryString(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
		if(r!=null)return  unescape(r[2]); return null;
	}



	// 调用方法 查询商品详情
	var newsid = GetQueryString("newsid");
	var type = GetQueryString("type");
	console.log(newsid);
	console.log(type);

	$.ajax({
		url:'./inc/newsinfo.php',
		type:'post',
		data:{method:'newsinfo',type:type,newsid:newsid},
		success:function(res){
			res = $.parseJSON(res);
			console.log(res);
			var html = '';
			html += '<div class="NewsDetails_title">';
			html += '<h1>'+res[0]['title']+'</h1>';
			html += '<div class="NewsDetails_title_sort clear vertical">';
			html += '<span class="fl">发布时间：'+res[0]['time']+'</span>';
			html += '<span class="fl">浏览：<script src=e/public/ViewClick/?classid=6&id=1566&addclick=1></script></span>';
			html += '</div>';
			html += '</div>';
			html += '<div class="NewsDetails_content">';
			html += '<div class="NewsDetails_content_top">';
			html += '<p style="width:100%;display:flex;justify-content: space-around;"><img src="admin/upload/'+eval(res[0]['file'])+'" width="500" height="300" /></p>';
			html += '<p>'+res[0]['content']+'</p>';
			html += '</div>';
			html += '<div class="NewsDetails_content_bottom clear">';
			html += '<div class="content_bottom_left fl">';
			html += '<div class="bottom_left_copyright">此内容来源于网络，如涉及版权问题请与我们联系。</div>';
			html += '<div class="bottom_left_TAG clear">';
			html += '<dd class="fl">TAG</dd>';
			html += '<dt class="fl clear">';
			html += '</dt>';
			html += '</div>';
			html += '</div>';
			html += '<div class="content_bottom_help fl">';
			html += '<a href="javascript:;">';
			html += '<dd class="iconfont">&#xe605;</dd>';
			html += '<dt>0</dt>';
			html += '</a>';
			html += '<div class="bottom_help_content">该内容对我有帮助</div>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			$(".IndexService_content").prepend(html);
			
		}
	})
})