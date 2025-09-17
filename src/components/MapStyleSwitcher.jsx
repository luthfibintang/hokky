import { useState } from 'react'
import LeafletMapEmbed from './LeafletMapEmbed'

export default function MapStyleSwitcher({ 
  lat = -6.301161198648552, 
  lng = 106.69354578147998, 
  googleMapsLink, 
  className = "",
  width = '160px',
  height = '80px'
}) {
  const [currentStyle, setCurrentStyle] = useState('cartodb')

  const mapStyles = {
    cartodb: {
      name: 'Clean (Google-like)',
      description: 'Mirip Google Maps'
    },
    esri: {
      name: 'ESRI Street',
      description: 'Detailed street view'
    },
    voyager: {
      name: 'Voyager',
      description: 'Modern style'
    },
    google_like: {
      name: 'Minimal',
      description: 'Ultra clean'
    }
  }

  return (
    <div className="relative">
      {/* Map */}
      <LeafletMapEmbed
        lat={lat}
        lng={lng}
        googleMapsLink={googleMapsLink}
        mapStyle={currentStyle}
        className={className}
        width={width}
        height={height}
      />

      {/* Style Switcher - Made transparent */}
      <div
        className="absolute top-1 left-1"
        style={{ zIndex: 1000 }}
      >
        <select
          value={currentStyle}
          onChange={(e) => setCurrentStyle(e.target.value)}
          className="bg-transparent backdrop-blur-sm border-none rounded px-1 py-0.5 text-xs font-medium shadow-none focus:outline-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          {Object.entries(mapStyles).map(([key, style]) => (
            <option key={key} value={key}>
              {style.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}