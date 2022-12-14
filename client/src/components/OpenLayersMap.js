import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import MousePosition from 'ol/control/MousePosition'
import { createStringXY } from 'ol/coordinate'

const OpenLayersMap = (props) => {
  const [map, setMap] = useState()
  const [featuresLayer, setFeaturesLayer] = useState()
  const mapElement = useRef()
  mapElement.current = map

  useEffect(() => {
    const mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(6),
      projection: 'EPSG:4326',
      target: document.getElementById('mouse-position')
    })

    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    })

    const initialMap = new Map({
      controls: [mousePositionControl],
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}'
          })
        }),
        initalFeaturesLayer
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2
      })
    })

    setMap(initialMap)
    setFeaturesLayer(initalFeaturesLayer)
  }, [])

  useEffect(() => {
    if (props.features.length) {
      featuresLayer.setSource(
        new VectorSource({
          features: props.features
        })
      )
      map.getView().fit(featuresLayer.getSource().getExtent(), {})
    }
  }, [props.features])

  return (
    <div className="container-fluid" style={{ height: '100vh', padding: 0, margin: 0, overflow: 'hidden' }} ref={mapElement}>
    </div>
  )
}

OpenLayersMap.propTypes = {
  features: PropTypes.any
}

export default OpenLayersMap
