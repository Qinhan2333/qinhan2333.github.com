var map = new BMap.Map("map");    
var point = new BMap.Point(120.141375,30.257806);    
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom();
map.addControl(new BMap.OverviewMapControl({
    isOpen: true
}));
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 
map.setCurrentCity("杭州");       
var marker = new BMap.Marker(point);   
map.addOverlay(marker); 
var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "resultlist"
  }
});
 local.searchNearby("宾馆", point);