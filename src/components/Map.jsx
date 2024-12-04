import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon, Stroke } from "ol/style";
import { fromLonLat } from "ol/proj";

const MapOl = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-66.1723873, -17.415782]), // Centrar en las coordenadas
        zoom: 13,
      }),
    });

    // Coordenadas de inicio y fin
    const start = [-66.1723873, -17.415782]; // Coordenadas iniciales (longitud, latitud)
    const end = [-66.180, -17.420]; // Coordenadas finales

    // Añadir marcadores
    const addMarker = (coords) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat(coords)),
      });

      // Estilo del marcador
      marker.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
            scale: 0.1,
          }),
        })
      );

      return marker;
    };

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [addMarker(start), addMarker(end)],
      }),
    });

    map.addLayer(markerLayer);

    // Llamar a la API de OSRM para obtener la ruta
    fetch(
      `http://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes.length > 0) {
          const routeCoordinates = data.routes[0].geometry.coordinates.map((coord) =>
            fromLonLat(coord)
          );

          // Crear la línea de la ruta
          const routeFeature = new Feature({
            geometry: new LineString(routeCoordinates),
          });

          // Estilo de la línea
          const routeStyle = new Style({
            stroke: new Stroke({
              color: "blue",
              width: 4,
            }),
          });
          routeFeature.setStyle(routeStyle);

          // Crear capa de la ruta
          const routeLayer = new VectorLayer({
            source: new VectorSource({
              features: [routeFeature],
            }),
          });

          // Agregar la capa de la ruta al mapa
          map.addLayer(routeLayer);
        }
      })
      .catch((error) => console.error("Error al obtener la ruta:", error));

    return () => map.setTarget(null); // Limpieza del mapa al desmontar el componente
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
};

export default MapOl;
