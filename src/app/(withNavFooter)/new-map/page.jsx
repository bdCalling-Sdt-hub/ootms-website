import Container from "@/components/ui/Container";
import Image from "next/image";
import { AllImages } from "../../../../public/assets/AllImages";

export default function Map() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div>
            <div className="">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Driver’s Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Name</p>
                <p>
                  <span className="font-semibold">:</span>Steve Jobs
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Truck Number</p>
                <p>
                  <span className="font-semibold">:</span>ABC 123456
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Email</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>example@gmail.com
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Contact Number</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>123 456 789
                </p>
              </div>
            </div>{" "}
            <div className="mt-6">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Shipper’s Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Name</p>
                <p>
                  <span className="font-semibold">:</span>Elon Musk
                </p>
              </div>

              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Email</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>example@gmail.com
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Contact Number</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>123 456 789
                </p>
              </div>
            </div>{" "}
            <div className=" mt-6">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Load Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Load Type</p>
                <p>
                  <span className="font-semibold">:</span>Dry Load.
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Trailer size</p>
                <p>
                  <span className="font-semibold">:</span>48-foot-trailer — 24
                  pallets
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Pickup</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>Address
                  <span className="font-semibold">:</span> Rupatoli, Barishal
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Delivery</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>Address
                  <span className="font-semibold">:</span> Banashree, Dhaka
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Wirght</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>120 kg
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Hazmat</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>Flammable Gas 2,
                  Corrosive, Danger
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2  xl:col-span-3">
            <Image className="w-full h-auto" src={AllImages.Map} alt="map" />
          </div>
        </div>
      </Container>
      <div className="text-right ml-8">
        <p>sdfdsfg</p>
      </div>
    </div>
  );
}
