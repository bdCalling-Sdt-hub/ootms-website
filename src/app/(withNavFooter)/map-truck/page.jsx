import Map from "@/components/map-truck/Map";
import MyLoad from "@/components/map-truck/MyLoad";
import Trucks from "@/components/map-truck/Trucks";

const MapTruck = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-20">
      <div className="col-span-1 md:col-span-1">
        <Trucks />
      </div>

      {/* Map Component */}
      <div className="col-span-1">
        <Map />
      </div>

      {/* MyLoad Component */}
      <div className="col-span-1 md:col-span-1">
        <MyLoad />
      </div>
    </div>
  );
};

export default MapTruck;
