import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useIsMobile } from "@/hooks/use-mobile";

interface ReferralCluster {
  id: number;
  city: string;
  coordinates: [number, number];
  color: string;
  earnings: number;
  referrals: number;
}

const clusters: ReferralCluster[] = [
  {
    id: 1,
    city: "Nairobi",
    coordinates: [-1.2921, 36.8219],
    color: "#00FF88",
    earnings: 3,
    referrals: 12,
  },
  {
    id: 2,
    city: "Mombasa",
    coordinates: [-4.0435, 39.6682],
    color: "#FF00FF",
    earnings: 2.5,
    referrals: 8,
  },
];

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { weight: 2 }],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#00ff88" }, { weight: 1 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#00ff88" }, { weight: 0.2 }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
];

export function ReferralMap() {
  const [selectedCluster, setSelectedCluster] = useState<ReferralCluster | null>(null);
  const isMobile = useIsMobile();

  const mapContainerStyle = {
    width: "100%",
    height: isMobile ? "250px" : "300px",
    borderRadius: "0.5rem",
  };

  const center = {
    lat: 0.0236,
    lng: 37.9062,
  };

  return (
    <div className="cyber-card group">
      <h2 className="mb-4 text-lg font-semibold text-cyber-teal">Network Map</h2>
      
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={isMobile ? 5 : 6}
          center={center}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            backgroundColor: '#000000',
          }}
        >
          {clusters.map((cluster) => (
            <Marker
              key={cluster.id}
              position={{
                lat: cluster.coordinates[0],
                lng: cluster.coordinates[1],
              }}
              onClick={() => setSelectedCluster(cluster)}
              icon={{
                path: "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                fillColor: cluster.color,
                fillOpacity: 0.9,
                strokeWeight: 1,
                strokeColor: "#FFFFFF",
                scale: isMobile ? 1.2 : 1.5,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedCluster && (
        <div className="mt-4 rounded-lg border border-cyber-green/20 bg-cyber-black/50 p-4">
          <h3 className="mb-2 text-base md:text-lg font-semibold" style={{ color: selectedCluster.color }}>
            {selectedCluster.city} Cluster
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Hourly Earnings</p>
              <p className="cyber-text-glow text-base md:text-lg font-semibold text-cyber-green">
                +{selectedCluster.earnings} KSH/hr
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Active Referrals</p>
              <p className="text-base md:text-lg font-semibold text-cyber-teal">
                {selectedCluster.referrals}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}