import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import { transform } from 'ol/proj'
import { toStringXY } from 'ol/coordinate'

const OpenLayersMap = (props) => {
  const [map, setMap] = useState()
  const [featuresLayer, setFeaturesLayer] = useState()
  const [selectedCoord, setSelectedCoord] = useState()
  const mapElement = useRef()
  mapElement.current = map

  const handleMapClick = (event) => {
    const clickedCoord = mapElement.current.getCoordinateFromPixel(event.pixel)
    const transormedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')
    setSelectedCoord(transormedCoord)
  }

  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    })

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        // USGS Topo
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
      }),
      controls: []
    })

    setMap(initialMap)
    setFeaturesLayer(initalFeaturesLayer)
    initialMap.on('click', handleMapClick)
  }, [])

  useEffect(() => {
    if (props.features.length) {
      featuresLayer.setSource(
        new VectorSource({
          features: props.features // make sure features is an array
        })
      )
      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        // padding: [100, 100, 100, 100]
      })
    }
  }, [props.features])

  return (
    <div className="container-fluid" style={{ height: '100vh', padding: 0, margin: 0, overflow: 'hidden' }} ref={mapElement}>
      <div>
        <p style={{ position: 'absolute', right: 5, bottom: 0, zIndex: 1 }}>{ (selectedCoord) ? toStringXY(selectedCoord, 5) : '' }</p>
      </div>
    </div>
  )
}

OpenLayersMap.propTypes = {
  features: PropTypes.any
}

export default OpenLayersMap
