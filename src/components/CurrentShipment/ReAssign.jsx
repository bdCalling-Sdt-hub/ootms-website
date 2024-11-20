import { Button } from "antd";
import { useRouter } from "next/navigation";

const ReAssign = (props) => {
  const router = useRouter();
  const { setIsOpen } = props;
  return (
    <div
      onClick={() => setIsOpen(!open)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-4 rounded shadow-md w-1/2">
        <div className="max-w-6xl mx-auto p-6  ">
          <h1 className="text-2xl font-bold mb-6 ms-4">Current Shipment</h1>
          <hr className="my-6 ms-4  opacity-60" />

          <div className="  p-6 mb-6">
            <div className="   grid md:grid-cols-2 grid-cols-1 gap-4 ">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Driver&#39;s Information
                </h2>
                <hr className="my-6 border-[#9D9D9D] opacity-60" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Driver Name</p>

                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {"★".repeat(1)}
                      </div>
                      <span>4.65 NR Shakib</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Driver Phone</p>
                    <p>123-456-789</p>
                  </div>
                  <div>
                    <p className="font-semibold">Driver Email</p>
                    <p>example@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Driver Address</p>
                    <p>Rupgonj, Banshol</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Truck Information
                </h2>
                <hr className="my-6 border-[#9D9D9D] opacity-60" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Truck Number</p>
                    <p>DHK METRO HA 64-8549</p>
                  </div>
                  <div>
                    <p className="font-semibold">Trailer size</p>
                    <p>48-foot trailer</p>
                  </div>
                  <div>
                    <p className="font-semibold">Pallet Spaces</p>
                    <p>24 pallets</p>
                  </div>
                  <div>
                    <p className="font-semibold">Availability</p>
                    <p>Fully Available</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 md:mt-10">
              Load Information
            </h2>
            <hr className="my-6 border-[#9D9D9D] opacity-60" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Load Type</p>
                <p>Dry Load</p>
              </div>
              <div>
                <p className="font-semibold">Trailer size</p>
                <p>48-foot trailer—24 pallets</p>
              </div>
              <div>
                <p className="font-semibold">Weight</p>
                <p>120 kg</p>
              </div>
              <div>
                <p className="font-semibold">HazMat</p>
                <p>Flammable Gas 2, Corrosive, Danger</p>
              </div>
              <div>
                <p className="font-semibold">Pickup</p>
                <p>12-12-2024</p>
                <p className="">Address: Rupgonj, Bonshol</p>
              </div>
              <div>
                <p className="font-semibold">Delivery</p>
                <p>13-12-2024</p>
                <p className="">Address: Banasree, Dhaka</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="mt-8 text-center">
              <Button
                onClick={() => router.push("/map-truck")}
                type="primary"
                size="large"
                className="bg-[#2B4257] px-4 rounded-lg"
              >
                Find A New Driver
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReAssign;
