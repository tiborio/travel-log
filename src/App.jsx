import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl: icon, shadowUrl: shadow })

const places = [
  { id: 1, name: 'Miami', position: [25.7617, -80.1918] },
  { id: 2, name: 'Paris', position: [48.8566, 2.3522] },
]

export default function App() {
  return (
    <MapContainer center={[25, -40]} zoom={2} style={{ height: '100vh' }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {places.map((p) => (
        <Marker key={p.id} position={p.position}>
          <Popup>{p.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}