//zoom view of basemap
var map = L.map('map').setView([ 30, -90], 4);
var street = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',  {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//variable that inserts high temperature layers show opacity of 0.35. the next 3 variables are all completing the same task.
var hightemps = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
	layers: '1',
	format: 'image/png',
	transparent: true,
	attribution: "NOAA",
opacity: 0.35

}).addTo(map);
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
	layers: '1',
	format: 'image/png',
	transparent: true,
	attribution: "NOAA"
}).addTo(map);
var windspeed = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_windspeed_offsets/MapServer/WmsServer", {
	layers: '1',
	format: 'image/png',
	transparent: true,
	attribution: "NOAA",
opacity: 0.35
}).addTo(map);

var baseLayers = {
"street": street

};

//feature that allows title to show in right had top corner tool bar.
var overlays= {
"High Temp": hightemps,
"Lightning": lightning,
"Windspeed": windspeed

};
L.control.layers(baseLayers, overlays).addTo(map);
