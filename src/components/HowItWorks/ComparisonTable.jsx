import React from "react";
import Container from "../ui/Container";
import { FaRegCircleDot } from "react-icons/fa6";

const ComparisonTable = () => {
  return (
    <div className="relative py-20">
      <Container>
        <div className="p-6 lg:p-10">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-[#F76056] text-[#FDFDFD] w-[200px] text-left px-5 text-lg sm:text-xl lg:text-2xl py-3 font-semibold sm:w-1/2">
                    Traditional Healthcare Provider
                  </th>
                  <th className="bg-[#F76056] text-[#FDFDFD] w-[200px] text-left px-5 text-lg sm:text-xl lg:text-2xl py-3 font-semibold sm:w-1/2">
                    MedicoVigilance Representative (MVR)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#EDE9E9]">
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Diagnose and treat medical conditions</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Interpret medical information, explain diagnoses and
                        treatments
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Prescribe medications and therapies</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Review treatment plans to ensure patient understanding
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#EDE9E9]">
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Perform medical procedures</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Guide patients through healthcare decisions and
                        insurance processes
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Responsible for clinical outcomes</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Responsible for patient understanding and informed
                        decisions
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#EDE9E9]">
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Provide direct medical interventions</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Attend appointments to support patient engagement and
                        comprehension
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>Focus on patient care within a clinical setting</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-5 py-5 flex items-center gap-2">
                      <FaRegCircleDot />
                      <p>
                        Focus on advocating for the patient across all aspects
                        of healthcare
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComparisonTable;
