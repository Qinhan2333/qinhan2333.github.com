var map = new BMap.Map("map");
var point = new BMap.Point(120.156,30.249);
map.centerAndZoom(point, 15);
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());  
map.enableScrollWheelZoom();  
map.setCurrentCity("杭州"); 
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);
var transit = new BMap.TransitRoute(map, {
	renderOptions: {
		 map: map,
		 panel: "resultlist"
		  }
		});
transit.search("杭州师范大学仓前新校区", "宾馆");