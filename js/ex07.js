var map = new BMap.Map("mymap");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(point,15);
var marker = new BMap.Marker(point);
map.addOverlay(marker);
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("北京"); 
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
local.search("中关村");
