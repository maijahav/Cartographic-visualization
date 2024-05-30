ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3035").setExtent([4979880.891944, 4139828.342916, 5293464.371390, 4312212.631341]);
var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Yearofsighting_1 = new ol.format.GeoJSON();
var features_Yearofsighting_1 = format_Yearofsighting_1.readFeatures(json_Yearofsighting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_Yearofsighting_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yearofsighting_1.addFeatures(features_Yearofsighting_1);
var lyr_Yearofsighting_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yearofsighting_1, 
                style: style_Yearofsighting_1,
                popuplayertitle: "Year of sighting",
                interactive: true,
    title: 'Year of sighting<br />\
    <img src="styles/legend/Yearofsighting_1_0.png" /> 1853 - 1911<br />\
    <img src="styles/legend/Yearofsighting_1_1.png" /> 1911 - 1996<br />\
    <img src="styles/legend/Yearofsighting_1_2.png" /> 1996 - 2008<br />\
    <img src="styles/legend/Yearofsighting_1_3.png" /> 2008 - 2016<br />\
    <img src="styles/legend/Yearofsighting_1_4.png" /> 2016 - 2024<br />'
        });

lyr_Basemap_0.setVisible(true);lyr_Yearofsighting_1.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_Yearofsighting_1];
lyr_Yearofsighting_1.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', });
lyr_Yearofsighting_1.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', });
lyr_Yearofsighting_1.set('fieldLabels', {'fid': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'team': 'no label', 'year': 'inline label - always visible', });
lyr_Yearofsighting_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});