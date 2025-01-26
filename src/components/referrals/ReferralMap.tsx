import { useState } from "react";
import { MapPin } from "lucide-react";

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

export function ReferralMap() {
  const [selectedCluster, setSelectedCluster] = useState<ReferralCluster | null>(null);

  // Convert geographic coordinates to SVG viewport coordinates
  const getClusterPosition = (coordinates: [number, number]) => {
    // Kenya's approximate bounding box
    const kenyaMinLat = -4.678;
    const kenyaMaxLat = 5.506;
    const kenyaMinLon = 33.908;
    const kenyaMaxLon = 41.899;

    // Calculate position as percentage within Kenya's bounds
    const x = ((coordinates[1] - kenyaMinLon) / (kenyaMaxLon - kenyaMinLon)) * 100;
    const y = ((coordinates[0] - kenyaMinLat) / (kenyaMaxLat - kenyaMinLat)) * 100;

    return { x, y };
  };

  return (
    <div className="cyber-card group relative min-h-[400px]">
      <h2 className="mb-4 text-lg font-semibold text-cyber-teal">Network Map</h2>
      
      <div className="relative h-[300px] w-full rounded-lg border border-cyber-green/20 bg-[url('/kenya-map.svg')] bg-contain bg-center bg-no-repeat">
        {clusters.map((cluster) => {
          const position = getClusterPosition(cluster.coordinates);
          return (
            <button
              key={cluster.id}
              onClick={() => setSelectedCluster(cluster)}
              className="group absolute inline-flex items-center justify-center"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
            >
              <div
                className="absolute -inset-2 animate-pulse rounded-full opacity-20 transition-all group-hover:opacity-40"
                style={{ backgroundColor: cluster.color }}
              />
              <MapPin
                className="h-6 w-6 transition-all group-hover:scale-110"
                style={{ color: cluster.color }}
              />
            </button>
          );
        })}
      </div>

      {selectedCluster && (
        <div className="mt-4 rounded-lg border border-cyber-green/20 bg-cyber-black/50 p-4">
          <h3 className="mb-2 text-lg font-semibold" style={{ color: selectedCluster.color }}>
            {selectedCluster.city} Cluster
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Hourly Earnings</p>
              <p className="cyber-text-glow text-lg font-semibold text-cyber-green">
                +{selectedCluster.earnings} KSH/hr
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Referrals</p>
              <p className="text-lg font-semibold text-cyber-teal">
                {selectedCluster.referrals}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyber-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}