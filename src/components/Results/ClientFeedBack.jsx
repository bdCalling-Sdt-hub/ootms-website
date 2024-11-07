import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { allIcons, AllResults } from "../../../public/assets/AllImages";

const ClientFeedBack = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-8">
            Real Results from Real Clients
          </h1>
          <h2 className="w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-medium text-base-color text-center mb-8">
            See how Clinivea has helped clients navigate their healthcare and
            achieve better outcomes.
          </h2>
        </div>

        {/* Feedback Card */}
        <div
          className="w-full p-5 sm:p-7 lg:p-10 rounded-xl bg-white mb-16"
          style={{ boxShadow: "0px 0px 10px 10px #00000014" }}
        >
          <h2 className="w-full sm:w-[90%] lg:w-[70%]  xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-color text-center mb-8">
            Sarah’s Journey:Navigating a Complex Cancer Diagnosis
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3 ">
            {/* Left - Image */}
            <div className="md:w-1/3">
              <Image
                src={AllResults.clientFeedbackUser1} // Update this with your actual image path
                alt="Profile"
                width={0}
                height={0}
                className="rounded-lg  max-h-96 md:w-full md:h-full mx-auto object-cover"
              />
            </div>

            {/* Right - Text Content */}
            <div className="md:w-2/3 md:pl-3 lg:pl-6">
              <div className="mb-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Outcome
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Clinivea’s MVR helped Sarah find the right oncologist,
                  coordinated her appointments, and explained every step of her
                  treatment plan.
                </p>
              </div>

              <hr className="w-full border-t border-red-500 my-5 xl:my-10" />

              <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Result
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Sarah felt empowered to make informed decisions about her
                  healthcare and saved over $2,000 by optimizing her insurance
                  claims.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full p-5 sm:p-7 lg:p-10 rounded-xl bg-white "
          style={{ boxShadow: "0px 0px 10px 10px #00000014" }}
        >
          <h2 className="w-full sm:w-[90%] lg:w-[70%]  xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-color text-center mb-8">
            Mark’s Story: Managing Diabetes and Reducing Healthcare Costs
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Left - Image */}
            <div className="md:w-1/3 order-first md:order-last">
              <Image
                src={AllResults.clientFeedbackUser2} // Update this with your actual image path
                alt="Profile"
                width={0}
                height={0}
                className="rounded-lg  max-h-96 md:w-full md:h-full mx-auto object-cover"
              />
            </div>

            {/* Right - Text Content */}
            <div className="md:w-2/3 md:pr-3 lg:pr-6">
              <div className="mb-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Outcome
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Mark’s MVR guided him through a new diabetes management plan,
                  helped him track his blood sugar using health monitoring
                  devices, and reduced his out-of-pocket costs by working with
                  his insurance
                </p>
              </div>

              <hr className="w-full border-t border-red-500 my-5 xl:my-10" />

              <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Result
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Mark gained better control over his diabetes and saved 15% on
                  his annual healthcare expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* State Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-5 my-16">
          {/* card 1  */}
          <div className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl">
            <Image
              src={allIcons.resultIcon1}
              alt="Profile"
              width={0}
              height={0}
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
            />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
              87%
            </h3>
            <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
              Clients report lower healthcare costs.
            </p>
          </div>
          {/* card 2  */}
          <div className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl">
            <Image
              src={allIcons.resultIcon2}
              alt="Profile"
              width={0}
              height={0}
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
            />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
              92%
            </h3>
            <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
              Clients gain control over healthcare.
            </p>
          </div>
          {/* card 3  */}
          <div className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl">
            <Image
              src={allIcons.resultIcon3}
              alt="Profile"
              width={0}
              height={0}
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
            />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
              96%
            </h3>
            <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
              Client satisfaction rate for MVR services.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientFeedBack;
