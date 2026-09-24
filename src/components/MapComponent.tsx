import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
  height?: string;
  showBanks?: boolean;
  showMarkets?: boolean;
  userLocation?: { lat: number; lng: number; address: string };
}

export default function MapComponent({
  center = [20.5937, 78.9629], // Default to India center
  zoom = 5,
  height = '400px',
  showBanks = true,
  showMarkets = true,
  userLocation,
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView(center, zoom);
    mapInstanceRef.current = map;

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add user location marker if available
    if (userLocation) {
      const userIcon = L.divIcon({
        html: '<div style="background: #10b981; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
        className: 'user-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(map)
        .bindPopup(`<b>Your Location</b><br/>${userLocation.address}`)
        .openPopup();

      // Adjust center and zoom to user location
      map.setView([userLocation.lat, userLocation.lng], 12);
    }

    // Add sample bank locations (for demo)
    if (showBanks) {
      const bankIcon = L.divIcon({
        html: '<div style="background: #3b82f6; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>',
        className: 'bank-marker',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      // Sample bank locations (will be replaced with real data)
      const banks = [
        { lat: 28.6139, lng: 77.2090, name: 'State Bank of India', type: 'Public Bank' },
        { lat: 19.0760, lng: 72.8777, name: 'Punjab National Bank', type: 'Public Bank' },
        { lat: 13.0827, lng: 80.2707, name: 'Canara Bank', type: 'Public Bank' },
        { lat: 22.5726, lng: 88.3639, name: 'India Post Payments Bank', type: 'Payments Bank' },
      ];

      banks.forEach((bank) => {
        L.marker([bank.lat, bank.lng], { icon: bankIcon })
          .addTo(map)
          .bindPopup(`<b>${bank.name}</b><br/>${bank.type}`);
      });
    }

    // Add sample market locations (for demo)
    if (showMarkets) {
      const marketIcon = L.divIcon({
        html: '<div style="background: #f59e0b; width: 16px; height: 16px; border-radius: 4px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>',
        className: 'market-marker',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      // Sample market locations (will be replaced with real data)
      const markets = [
        { lat: 28.6200, lng: 77.2100, name: 'Sadar Bazaar', type: 'Wholesale Market' },
        { lat: 19.0800, lng: 72.8800, name: 'Crawford Market', type: 'Retail Market' },
        { lat: 13.0900, lng: 80.2800, name: 'Koyambedu Market', type: 'Vegetable Market' },
      ];

      markets.forEach((market) => {
        L.marker([market.lat, market.lng], { icon: marketIcon })
          .addTo(map)
          .bindPopup(`<b>${market.name}</b><br/>${market.type}`);
      });
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, userLocation, showBanks, showMarkets]);

  return (
    <div className="relative">
      <div ref={mapRef} style={{ height, width: '100%', borderRadius: '12px' }} />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 text-xs">
        <div className="font-semibold mb-2">Map Legend</div>
        {userLocation && (
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            <span>Your Location</span>
          </div>
        )}
        {showBanks && (
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
            <span>Banks</span>
          </div>
        )}
        {showMarkets && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500 border-2 border-white"></div>
            <span>Markets</span>
          </div>
        )}
      </div>
    </div>
  );
}
