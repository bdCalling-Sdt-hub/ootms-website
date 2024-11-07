/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Divider } from "antd";
import React from "react";

export default function PrivacyPolicys() {
  return (
    <div className="min-h-screen my-10 md:my-16">
      <Container>
        <div>
          <h1 className="text-secondary-color text-4xl md:text-4xl lg:text-5xl font-semibold mt-14">
            Privacy Policy
          </h1>
          <Divider className="bg-[#1A1A1A] my-10" />
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Introduction:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              At Clinivea, your privacy is critically important to us. We are
              committed to protecting the confidentiality and security of your
              personal and health-related information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your
              information when you use our services, including those provided by
              MedicoVigilance Representatives (MVRs).
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              By accessing or using our services, you consent to the collection
              and use of your personal data as described in this policy.
            </p>
          </div>
          {/* Information We Collect & Healthcare Information & Technical Informatio */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            {/* Information We Collect : */}
            <div>
              {" "}
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Information We Collect :
              </p>
              <p className="text-base-color text-justify leading-relaxed mb-3">
                We collect several types of information to provide and improve
                our services, including:
              </p>
              <p className="text-base-color text-justify leading-relaxed">
                Personal Information:
              </p>
              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>Full name, date of birth, gender </li>
                <li>
                  Contact information, such as email address, phone number, and
                  home address
                </li>
                <li>Payment information (for paid services)</li>
                <li>Emergency contact information</li>
              </ul>
            </div>
            {/* Healthcare Information: */}
            <div className="my-10">
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Healthcare Information:
              </p>

              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>
                  Medical history, medications, and health concerns (as provided
                  by you){" "}
                </li>
                <li>Healthcare provider information</li>
                <li>Insurance details</li>
                <li>
                  Appointment details and communications related to your health
                </li>
              </ul>
            </div>
            {/* Technical Information: */}
            <div className="my-5">
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Technical Information:
              </p>

              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>
                  IP addresses, browser type, and usage data for website
                  functionality and improvement
                </li>
                <li>Cookies to store and track your preferences</li>
              </ul>
            </div>
          </div>
          {/* How We Use Your Information  */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              How We Use Your Information
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>

            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Service Provision:</span> To
              connect you with MedicoVigilance Representatives (MVRs), assist in
              healthcare navigation, appointment scheduling, and medical bill
              management.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Communication:</span> To send
              appointment reminders, updates on your healthcare journey, and
              notifications about your services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Billing: </span> To process
              payments for services and manage subscriptions.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Improvement of Services: </span>{" "}
              To improve website functionality and enhance user experience.
            </p>
          </div>
          {/* Sharing Your Information  */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Sharing Your Information
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We may share your personal and healthcare information in the
              following ways:
            </p>

            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">With Your Consent:</span> We will
              share information with healthcare providers, insurance companies,
              or family members only when you provide consent. management.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Service Providers:</span> We may
              share information with third-party service providers (e.g.,
              payment processors) that help us deliver our services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Legal Compliance: </span> We may
              disclose your information if required by law or in response to
              legal requests, such as court orders or subpoenas.
            </p>
          </div>
          {/* HIPAA Compliance  */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              HIPAA Compliance
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Clinivea is committed to protecting your health information in
              accordance with the Health Insurance Portability and
              Accountability Act (HIPAA). All personal and medical data is
              securely stored, and access to it is restricted to authorized
              individuals involved in your care or billing.
            </p>
          </div>
          {/* Data Security   */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Data Security
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We use administrative, technical, and physical safeguards to
              protect your personal information from unauthorized access,
              disclosure, or misuse. However, please note that no transmission
              of data over the internet is completely secure.
            </p>
          </div>
          {/* Your Rights    */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Your Rights
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
              <li>Access your personal and healthcare information.</li>
              <li>
                Request corrections to any inaccurate or incomplete information
              </li>
              <li>Withdraw consent for us to use or disclose your data</li>
              <li>Delete your account at any time.</li>
            </ul>
          </div>
          {/* Changes to This Policy     */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Changes to This Policy
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on our website, with an updated “Effective Date.”
            </p>
          </div>
          {/* Contact Us:     */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Contact Us:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or your data,
              please contact us at:
            </p>
            <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
              <li>Email: [clients@clinivea.com]</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
