import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet default markers in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom prominent marker icon - Google Maps style (smaller)
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker-google-style',
    html: `
      <div class="google-pin">
        <div class="google-pin-head">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div class="google-pin-shadow"></div>
      </div>
    `,
    iconSize: [28, 25],
    iconAnchor: [14, 25],
    popupAnchor: [0, -25]
  })
}

export default function LeafletMapEmbed({ 
  lat = -6.301161198648552, 
  lng = 106.69354578147998, 
  className = "", 
  googleMapsLink,
  mapStyle = 'cartodb',
  width = '160px',
  height = '80px'
}) {
  const [customIcon, setCustomIcon] = useState(null)

  // Tile layer options
  const tileProviders = {
    cartodb: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution: "",
      subdomains: "abcd"
    },
    esri: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      attribution: "",
      subdomains: ""
    },
    voyager: {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      attribution: "",
      subdomains: "abcd"
    },
    google_like: {
      url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      attribution: "",
      subdomains: "abcd"
    }
  }

  const selectedProvider = tileProviders[mapStyle] || tileProviders.cartodb

  useEffect(() => {
    const icon = createCustomIcon()
    setCustomIcon(icon)
  }, [])

  const handleMapClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const url = googleMapsLink || `https://maps.google.com/?q=${lat},${lng}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleMarkerClick = () => {
    const url = googleMapsLink || `https://maps.google.com/?q=${lat},${lng}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="map-embed-wrapper" style={{ position: 'relative', width, height }}>
      {/* Map Container - CLICKABLE untuk buka Google Maps */}
      <div
        className={`${className} cursor-pointer`}
        onClick={handleMapClick}
        title="Click to open in Google Maps"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          overflow: 'visible',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Inner map container dengan overflow hidden untuk map saja */}
        <div style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px'
        }}>
          <MapContainer
            center={[lat, lng]}
            zoom={16}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
            dragging={true}
            doubleClickZoom={true}
            touchZoom={true}
            boxZoom={true}
            keyboard={true}
            zoomControl={false}
            attributionControl={false}
            className="clean-map"
          >
            <TileLayer
              url={selectedProvider.url}
              attribution={selectedProvider.attribution}
              maxZoom={19}
              subdomains={selectedProvider.subdomains}
            />

            {customIcon && (
              <Marker
                position={[lat, lng]}
                icon={customIcon}
                eventHandlers={{ click: handleMarkerClick }}
              >
                <Popup closeButton={false} className="clean-popup">
                  <div className="text-center py-2">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-800">H'okky Upholstery</p>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 leading-tight">
                      Jl. Ir H. Juanda No.88<br />
                      Cireundeu, Ciputat Tim.<br />
                      Tangerang Selatan, Banten
                    </p>
                    <button
                      onClick={handleMarkerClick}
                      className="text-xs bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                    >
                      🗺️ View on Google Maps
                    </button>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}