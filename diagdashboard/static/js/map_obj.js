//Mapbox related functionalities

function DiagMap(){
  //This is the object definition of the DiagMap type
  //DiagMap provides all upper level functionalities to operate map object in dashboard

  this.addMap = addMap;
  function addMap(_dom, _mapID, _accessToken){
    L.mapbox.accessToken = _accessToken;
    var map = L.mapbox.map(_dom, _mapID, {zoomControl:false})
              .setView([40,-74.50],9);
  }

}
