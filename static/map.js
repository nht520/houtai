var list = [{Long:106.652024,Lat:26.617221},{Long:106.652024,Lat:26.614221},{Long:106.654024,Lat:26.612221},{Long:106.657024,Lat:26.612221}];
var listLast = list.length-1;
// љ׈֘ͼAPI٦Ŝ
var map = new BMap.Map("allmap");    // ԴݨMapʵ}
map.centerAndZoom(new BMap.Point(list[0].Long,list[0].Lat), 15);  // Եʼۯ֘ͼ,ʨ׃אф֣ظҪۍ֘ͼܶҰ
map.addControl(new BMap.MapTypeControl());   //ͭݓ֘ͼ`э࠘ݾ
map.enableScrollWheelZoom(true);     //ߪǴ˳ҪڶÖ̵؅
setTimeout(drawIcon,500);
var carMk;
var myBeginIcon = new BMap.Icon("http://e.hiphotos.baidu.com/image/pic/item/7e3e6709c93d70cfaf72bca2f0dcd100bba12b90.jpg", new BMap.Size(25,37), {imageOffset: new BMap.Size(0, 0)});//ɋ
var myEndIcon = new BMap.Icon("http://b.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01f534c096ae8fe9925bd317dc0.jpg", new BMap.Size(25,37), {imageOffset: new BMap.Size(0, 0)});//ɋ
function drawGreenLine(i){
  var polyline = new BMap.Polyline([
    new BMap.Point(list[i].Long,list[i].Lat),//ǰʼ֣քޭγ׈
    new BMap.Point(list[i+1].Long,list[i+1].Lat)//ו֣քޭγ׈
  ], {strokeColor:"green",//ʨ׃ҕɫ
    strokeWeight:4, //࠭׈
    strokeOpacity:1});//͸ķ׈
  map.addOverlay(polyline);
}

function drawIcon(){
  if(carMk){
    map.removeOverlay(carMk);
  }
  carMk2 = new BMap.Marker(
    new BMap.Point(list[0].Long,list[0].Lat),//ǰʼ֣քޭγ׈
    {icon:myBeginIcon});
  map.addOverlay(carMk2);
  carMk3 = new BMap.Marker(
    new BMap.Point(list[listLast].Long,list[listLast].Lat),//ו֣քޭγ׈
    {icon:myEndIcon});
  map.addOverlay(carMk3);
  carMk = new BMap.Marker(
    new BMap.Point(list[listLast].Long,list[listLast].Lat),//ו֣քޭγ׈
    {icon:myEndIcon});
  map.addOverlay(carMk);

  for(var i=0;i<list.length-1;i++){
    drawGreenLine(i);
  }

}
