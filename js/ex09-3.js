var map = new BMap.Map("map");
var point = new BMap.Point(120.015015,30.296074);
map.centerAndZoom(point, 17);
map.enableScrollWheelZoom();
map.addControl(new BMap.OverviewMapControl({
    isOpen: true
}));
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");
function setsContent(name,score,review,price,imgname){
    return "<div class=\"ui-info\"> \
              <div class=\"container-fluid\"> \
                  <div class=\"fir-row\"> \
                      <div class=\"ui-img\"><img src=\"images/"+imgname+"\" id=\"img\"></div> \
                  </div> \
                  <div class=\"sec-row\"> \
                      <div class=\"col-sm-8\"> \
                          <div class=\"ui-info-left\"> \
                              <div class=\"ui-info-name\">" + name+ "</div> \
                              <div class=\"ui-info-star\">\
                                <i class=\"fa fa-star\"></i>\
                                <i class=\"fa fa-star\"></i>\
                                <i class=\"fa fa-star\"></i>\
                              </div>\
                              <span class=\"ui-info-score\">" + score + "</span> \
                              <span class=\"ui-info-review\">" + review + "</span> \
                          </div> \
                      </div> \
                      <div class=\"col-sm-4\"> \
                          <div class=\"ui-info-right\"> \
                              <div class=\"ui-info-price\">" + price + "</div> \
                              <div class=\"ui-info-more\">查看详情</div> \
                          </div> \
                      </div> \
                  </div> \
              </div> \
            </div>";
}
var data_info =[
                        [120.01232, 30.296261,"杭州师范大学篮球场"," "," "," ","school.jpg"],
						[120.014314, 30.295139,"体育场"," "," "," ","school.jpg"],
						[120.016794, 30.293564,"博文印象"," "," "," ","school.jpg"],
						[120.01625, 30.294784,"博文苑3号楼"," "," "," ","school.jpg"],
						[120.016165, 30.295037,"博文苑4号楼"," "," "," ","school.jpg"],
						[120.016479, 30.295704,"博文苑5号楼"," "," "," ","school.jpg"],
						[120.016246, 30.295867,"博文苑6号楼"," "," "," ","school.jpg"],
						[120.015181, 30.29639,"博文苑8号楼"," "," "," ","school.jpg"],
						[120.015756, 30.296514,"博文苑9号楼"," "," "," ","school.jpg"],
						[120.016214, 30.296635,"学生事务服务中心"," "," "," ","school.jpg"],
						[120.016803, 30.296253,"菜鸟驿站"," "," "," ","school.jpg"],
						[120.016987, 30.295376,"超市"," "," "," ","school.jpg"],
						[120.01683, 30.295497,"帮帮数码"," "," "," ","school.jpg"],
						[120.019138, 30.296401,"一鸣真鲜奶吧"," "," "," ","school.jpg"],
						[120.017723, 30.29667,"恕园19号楼"," "," "," ","school.jpg"],
						[120.017494, 30.296889,"恕园24号楼"," "," "," ","school.jpg"],
						[120.018168, 30.296417,"外国语学院"," "," "," ","school.jpg"],
						[120.019336, 30.29669,"恕园14号楼"," "," "," ","school.jpg"],
						[120.019816, 30.296398,"恕园11号楼"," "," "," ","school.jpg"],
						[120.019825, 30.296791,"恕园12号楼"," "," "," ","school.jpg"],
						[120.019736, 30.297095,"恕园17号楼"," "," "," ","school.jpg"],
						[120.019538, 30.297388,"恕园21号楼"," "," "," ","school.jpg"],
						[120.020441, 30.296955,"恕园10号楼"," "," "," ","school.jpg"],
						[120.020594, 30.296791,"恕园9号楼"," "," "," ","school.jpg"],
						[120.0208,  30.297165,"恕园15号楼"," "," "," ","school.jpg"],
						[120.020589, 30.297372,"恕园16号楼"," "," "," ","school.jpg"],
						[120.020104, 30.297754,"恕园20号楼"," "," "," ","school.jpg"],
						[120.020351, 30.297941,"恕园27号楼"," "," "," ","school.jpg"],
						[120.019772, 30.298019,"恕园28号楼"," "," "," ","school.jpg"],
						[120.019313, 30.29791,"恕园29号楼"," "," "," ","school.jpg"],
						[120.018375, 30.297949,"恕园30号楼"," "," "," ","school.jpg"],
						[120.017494, 30.297976,"恕园35号楼"," "," "," ","school.jpg"],
						[120.020814, 30.297162,"恕园15号楼"," "," "," ","school.jpg"],
						[120.019004, 30.295252,"恕园7号楼"," "," "," ","school.jpg"],
						[120.020418, 30.295715,"恕园2号楼"," "," "," ","school.jpg"],
						[120.022197, 30.298725,"图书馆"," "," "," ","school.jpg"],
						[120.018316, 30.29745,"公共艺术教育部"," "," "," ","school.jpg"],
						[120.020032, 30.294846,"阿里巴巴商学院"," "," "," ","school.jpg"]
		               ];
		for(var i=0;i<data_info.length;i++)
		{
			//设置标注
			var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));
			map.addOverlay(marker);

			 // 创建信息窗口对象
			marker.addEventListener("click", function(){
                var infoWindow;
                for(var i=0;i<data_info.length;i++){
                    if(this.getPosition().equals(new BMap.Point(data_info[i][0],data_info[i][1])))
                    {
                        infoWindow= new BMap.InfoWindow(setsContent(data_info[i][2],data_info[i][3],data_info[i][4],data_info[i][5],data_info[i][6]));
                        break;
                    }
                }
			   this.openInfoWindow(infoWindow);
			   document.getElementById('img').onload = function (){
			   infoWindow.redraw(); 
			}
	       });
		};
	

