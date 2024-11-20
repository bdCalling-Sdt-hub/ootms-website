"use client";
import { useState } from "react";
import map from "./truckOnMap.png"
import ReAssign from "./ReAssign";
import Image from "next/image";

const CurrentShipment = () => {
    const [open, setOpen] = useState(false);    
    const [isOpen, setIsOpen] = useState(false);    
    return (
        <div className='bg-[#F3F3F3]'>
        <div className="max-w-6xl mx-auto p-6  bg-[#F3F3F3]">
        <h1 className="text-2xl font-bold mb-6 ms-4">Current Shipment</h1>
        <hr className="my-6 ms-4 border-[#9D9D9D] opacity-60" />
  
        <div className="  p-6 mb-6">




        <div className="   grid md:grid-cols-2 grid-cols-1 gap-4 ">

        <div>
            <h2 className="text-xl font-semibold mb-4">Driver&#39;s Information</h2>
          <hr className="my-6 border-[#9D9D9D] opacity-60" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Driver Name</p>
              
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {'★'.repeat(1)}
                </div>
                <span>4.65  NR Shakib</span>
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
    <h2 className="text-xl font-semibold mb-4">Truck Information</h2>
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

          



  
          <h2 className="text-xl font-semibold mb-4 md:mt-10">Load Information</h2>
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
  
        <div className="flex gap-4 justify-center pb-10">
          <button onClick={()=>setOpen(!open)} className=" bg-[#BDC4CB] lg:px-44 md:px-10 px-8  text-gray-800 py-2 font-semibold  rounded flex items-center justify-center">
            
            Track On Map
          </button>
          <button onClick={()=>setIsOpen(!isOpen)} className=" font-semibold bg-[#2B4257] lg:px-44 md:px-10 px-8  text-white py-2  rounded">
            Re-Assign
          </button>
        </div>

      </div>
      {
        open && (

          <div onClick={()=>setOpen(!open)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded-xl p-10  w-1/2 flex items-center justify-center">
              {/* <h2 className="text-lg font-semibold mb-4">Assign Driver</h2>  */}
              <div className="">                                            
                {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="driver">Driver</label>                                    */}
                <Image src={map} alt="map" className="rounded-xl" />
                    </div>
                    </div>
                    </div>
        )

      }
         {
        isOpen && (
          <ReAssign setIsOpen={setIsOpen}/>
    )
}

        </div>
    );
};

export default CurrentShipment;