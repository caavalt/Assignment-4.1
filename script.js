require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90.3, 38.64],
        zoom: 11
      });

      var template = { // autocasts as new PopupTemplate()
        title: "Neighborhood: {NHD_NAME}",
        content: [{
        
          type: "fields",
          fieldInfos: [{
            fieldName: "NHD_NAME",
            label: "Name: ",
            visible: true
          }, {
            fieldName: "NHD_NUM",
            label: "Number: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          
          }
                      ]
        }]
      };

     var symbol = {
      type: "picture-marker",  
      url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hockey-240-984443.png",
      width: "64px",
      height: "64px"
};
  var renderer = {
      type: "simple",  
      symbol: symbol
    };
  
 
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
      });
  
      map.add(featureLayer);
  
featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 10,
        color: "blue",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "gray"
        }
      }
    };
    });
