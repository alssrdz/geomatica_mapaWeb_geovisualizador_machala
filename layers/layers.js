var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_red_vial_1 = new ol.format.GeoJSON();
var features_red_vial_1 = format_red_vial_1.readFeatures(json_red_vial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_1.addFeatures(features_red_vial_1);
var lyr_red_vial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_1, 
                style: style_red_vial_1,
                popuplayertitle: 'red_vial',
                interactive: true,
                title: '<img src="styles/legend/red_vial_1.png" /> red_vial'
            });
var format_buffer_equipamiento_500m_2 = new ol.format.GeoJSON();
var features_buffer_equipamiento_500m_2 = format_buffer_equipamiento_500m_2.readFeatures(json_buffer_equipamiento_500m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_equipamiento_500m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_equipamiento_500m_2.addFeatures(features_buffer_equipamiento_500m_2);
var lyr_buffer_equipamiento_500m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_equipamiento_500m_2, 
                style: style_buffer_equipamiento_500m_2,
                popuplayertitle: 'buffer_equipamiento_500m',
                interactive: true,
                title: '<img src="styles/legend/buffer_equipamiento_500m_2.png" /> buffer_equipamiento_500m'
            });
var format_lotes_urbanos_3 = new ol.format.GeoJSON();
var features_lotes_urbanos_3 = format_lotes_urbanos_3.readFeatures(json_lotes_urbanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_urbanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_3.addFeatures(features_lotes_urbanos_3);
var lyr_lotes_urbanos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_3, 
                style: style_lotes_urbanos_3,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
    title: 'lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_3_0.png" /> Area verde<br />\
    <img src="styles/legend/lotes_urbanos_3_1.png" /> Equipamiento<br />\
    <img src="styles/legend/lotes_urbanos_3_2.png" /> Mixto<br />\
    <img src="styles/legend/lotes_urbanos_3_3.png" /> Residencial<br />' });
var format_mapa_valor_suelo_4 = new ol.format.GeoJSON();
var features_mapa_valor_suelo_4 = format_mapa_valor_suelo_4.readFeatures(json_mapa_valor_suelo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_valor_suelo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_valor_suelo_4.addFeatures(features_mapa_valor_suelo_4);
var lyr_mapa_valor_suelo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_valor_suelo_4, 
                style: style_mapa_valor_suelo_4,
                popuplayertitle: 'mapa_valor_suelo',
                interactive: true,
    title: 'mapa_valor_suelo<br />\
    <img src="styles/legend/mapa_valor_suelo_4_0.png" /> 40 - 40<br />\
    <img src="styles/legend/mapa_valor_suelo_4_1.png" /> 40 - 90<br />\
    <img src="styles/legend/mapa_valor_suelo_4_2.png" /> 90 - 120<br />\
    <img src="styles/legend/mapa_valor_suelo_4_3.png" /> 120 - 180<br />\
    <img src="styles/legend/mapa_valor_suelo_4_4.png" /> 180 - 250<br />' });
var format_Parcelas_5 = new ol.format.GeoJSON();
var features_Parcelas_5 = format_Parcelas_5.readFeatures(json_Parcelas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_5.addFeatures(features_Parcelas_5);
var lyr_Parcelas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_5, 
                style: style_Parcelas_5,
                popuplayertitle: 'Parcelas',
                interactive: true,
    title: 'Parcelas<br />\
    <img src="styles/legend/Parcelas_5_0.png" /> Comercial<br />\
    <img src="styles/legend/Parcelas_5_1.png" /> Suelo vacante<br />\
    <img src="styles/legend/Parcelas_5_2.png" /> Equipamiento<br />\
    <img src="styles/legend/Parcelas_5_3.png" /> Residencial<br />\
    <img src="styles/legend/Parcelas_5_4.png" /> Area verde<br />' });
var format_hidrografia_6 = new ol.format.GeoJSON();
var features_hidrografia_6 = format_hidrografia_6.readFeatures(json_hidrografia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_6.addFeatures(features_hidrografia_6);
var lyr_hidrografia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_6, 
                style: style_hidrografia_6,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_6.png" /> hidrografia'
            });
var format_equipamientos_7 = new ol.format.GeoJSON();
var features_equipamientos_7 = format_equipamientos_7.readFeatures(json_equipamientos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_7.addFeatures(features_equipamientos_7);
var lyr_equipamientos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_7, 
                style: style_equipamientos_7,
                popuplayertitle: 'equipamientos',
                interactive: true,
                title: '<img src="styles/legend/equipamientos_7.png" /> equipamientos'
            });
var format_Buffer_de_educacion_300m_8 = new ol.format.GeoJSON();
var features_Buffer_de_educacion_300m_8 = format_Buffer_de_educacion_300m_8.readFeatures(json_Buffer_de_educacion_300m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_de_educacion_300m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_de_educacion_300m_8.addFeatures(features_Buffer_de_educacion_300m_8);
var lyr_Buffer_de_educacion_300m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_de_educacion_300m_8, 
                style: style_Buffer_de_educacion_300m_8,
                popuplayertitle: 'Buffer_de_educacion_300m',
                interactive: true,
                title: '<img src="styles/legend/Buffer_de_educacion_300m_8.png" /> Buffer_de_educacion_300m'
            });
var format_ZonadeRiesgoCota45msnm_9 = new ol.format.GeoJSON();
var features_ZonadeRiesgoCota45msnm_9 = format_ZonadeRiesgoCota45msnm_9.readFeatures(json_ZonadeRiesgoCota45msnm_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeRiesgoCota45msnm_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeRiesgoCota45msnm_9.addFeatures(features_ZonadeRiesgoCota45msnm_9);
var lyr_ZonadeRiesgoCota45msnm_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeRiesgoCota45msnm_9, 
                style: style_ZonadeRiesgoCota45msnm_9,
                popuplayertitle: 'Zona de Riesgo Cota <=4.5msnm',
                interactive: true,
    title: 'Zona de Riesgo Cota <=4.5msnm<br />\
    <img src="styles/legend/ZonadeRiesgoCota45msnm_9_0.png" /> cota <= 4.5<br />\
    <img src="styles/legend/ZonadeRiesgoCota45msnm_9_1.png" /> cota > 5.5<br />\
    <img src="styles/legend/ZonadeRiesgoCota45msnm_9_2.png" /> 4.5 < cota < 5.5 <br />' });
var format_Buffer_de_salud_600m_10 = new ol.format.GeoJSON();
var features_Buffer_de_salud_600m_10 = format_Buffer_de_salud_600m_10.readFeatures(json_Buffer_de_salud_600m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_de_salud_600m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_de_salud_600m_10.addFeatures(features_Buffer_de_salud_600m_10);
var lyr_Buffer_de_salud_600m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_de_salud_600m_10, 
                style: style_Buffer_de_salud_600m_10,
                popuplayertitle: 'Buffer_de_salud_600m',
                interactive: true,
                title: '<img src="styles/legend/Buffer_de_salud_600m_10.png" /> Buffer_de_salud_600m'
            });
var format_areas_verdes_11 = new ol.format.GeoJSON();
var features_areas_verdes_11 = format_areas_verdes_11.readFeatures(json_areas_verdes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_11.addFeatures(features_areas_verdes_11);
var lyr_areas_verdes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_11, 
                style: style_areas_verdes_11,
                popuplayertitle: 'areas_verdes',
                interactive: true,
    title: 'areas_verdes<br />\
    <img src="styles/legend/areas_verdes_11_0.png" /> Cancha<br />\
    <img src="styles/legend/areas_verdes_11_1.png" /> Parque<br />' });
var format_buffer_inundacion_300m_12 = new ol.format.GeoJSON();
var features_buffer_inundacion_300m_12 = format_buffer_inundacion_300m_12.readFeatures(json_buffer_inundacion_300m_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_inundacion_300m_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_inundacion_300m_12.addFeatures(features_buffer_inundacion_300m_12);
var lyr_buffer_inundacion_300m_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_inundacion_300m_12, 
                style: style_buffer_inundacion_300m_12,
                popuplayertitle: 'buffer_inundacion_300m',
                interactive: true,
                title: '<img src="styles/legend/buffer_inundacion_300m_12.png" /> buffer_inundacion_300m'
            });
var format_area_de_estudio_13 = new ol.format.GeoJSON();
var features_area_de_estudio_13 = format_area_de_estudio_13.readFeatures(json_area_de_estudio_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_de_estudio_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_de_estudio_13.addFeatures(features_area_de_estudio_13);
var lyr_area_de_estudio_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_de_estudio_13, 
                style: style_area_de_estudio_13,
                popuplayertitle: 'area_de_estudio',
                interactive: true,
                title: '<img src="styles/legend/area_de_estudio_13.png" /> area_de_estudio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_red_vial_1.setVisible(true);lyr_buffer_equipamiento_500m_2.setVisible(false);lyr_lotes_urbanos_3.setVisible(false);lyr_mapa_valor_suelo_4.setVisible(false);lyr_Parcelas_5.setVisible(true);lyr_hidrografia_6.setVisible(false);lyr_equipamientos_7.setVisible(true);lyr_Buffer_de_educacion_300m_8.setVisible(false);lyr_ZonadeRiesgoCota45msnm_9.setVisible(false);lyr_Buffer_de_salud_600m_10.setVisible(false);lyr_areas_verdes_11.setVisible(false);lyr_buffer_inundacion_300m_12.setVisible(false);lyr_area_de_estudio_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_red_vial_1,lyr_buffer_equipamiento_500m_2,lyr_lotes_urbanos_3,lyr_mapa_valor_suelo_4,lyr_Parcelas_5,lyr_hidrografia_6,lyr_equipamientos_7,lyr_Buffer_de_educacion_300m_8,lyr_ZonadeRiesgoCota45msnm_9,lyr_Buffer_de_salud_600m_10,lyr_areas_verdes_11,lyr_buffer_inundacion_300m_12,lyr_area_de_estudio_13];
lyr_red_vial_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', });
lyr_buffer_equipamiento_500m_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', });
lyr_lotes_urbanos_3.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2': 'area_m2', });
lyr_mapa_valor_suelo_4.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', });
lyr_Parcelas_5.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', });
lyr_hidrografia_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_equipamientos_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', });
lyr_Buffer_de_educacion_300m_8.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', });
lyr_ZonadeRiesgoCota45msnm_9.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', '_cota_msnmmean': '_cota_msnmmean', });
lyr_Buffer_de_salud_600m_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', });
lyr_areas_verdes_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', });
lyr_buffer_inundacion_300m_12.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_area_de_estudio_13.set('fieldAliases', {'id': 'id', });
lyr_red_vial_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', });
lyr_buffer_equipamiento_500m_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_lotes_urbanos_3.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_mapa_valor_suelo_4.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': '', });
lyr_Parcelas_5.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', });
lyr_hidrografia_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_equipamientos_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_Buffer_de_educacion_300m_8.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_ZonadeRiesgoCota45msnm_9.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', '_cota_msnmmean': 'TextEdit', });
lyr_Buffer_de_salud_600m_10.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_areas_verdes_11.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_buffer_inundacion_300m_12.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_area_de_estudio_13.set('fieldImages', {'id': 'TextEdit', });
lyr_red_vial_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo_via': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', });
lyr_buffer_equipamiento_500m_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo (educacion/salud)': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_lotes_urbanos_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_lote': 'inline label - visible with data', 'manzana': 'inline label - visible with data', 'uso': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_mapa_valor_suelo_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'no label', });
lyr_Parcelas_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', });
lyr_hidrografia_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_equipamientos_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo (educacion/salud)': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_Buffer_de_educacion_300m_8.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo (educacion/salud)': 'no label', 'capacidad': 'no label', });
lyr_ZonadeRiesgoCota45msnm_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', '_cota_msnmmean': 'inline label - visible with data', });
lyr_Buffer_de_salud_600m_10.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo (educacion/salud)': 'no label', 'capacidad': 'no label', });
lyr_areas_verdes_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_buffer_inundacion_300m_12.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - always visible', 'tipo': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_area_de_estudio_13.set('fieldLabels', {'id': 'no label', });
lyr_area_de_estudio_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});