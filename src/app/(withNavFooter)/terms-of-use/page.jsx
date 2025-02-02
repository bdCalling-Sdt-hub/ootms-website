/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Divider } from "antd";
import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen my-10 md:my-16">
      <Container>
        <div>
          <h1 className="text-[#2B4257] text-4xl md:text-4xl lg:text-5xl font-semibold mt-14">
            Terms of Use
          </h1>
          <Divider className="bg-[#1A1A1A] my-10" />
          {/* Introduction: */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Introduction:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              These Terms and Conditions (“Terms”) govern your use of Clinivea’s
              services, including those provided by MedicoVigilance
              Representatives (MVRs), our website, and related services. By
              accessing or using Clinivea, you agree to be bound by these Terms.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              If you do not agree with any part of these Terms, please refrain
              from using our services.
            </p>
          </div>
          {/* Use of Services  & HEligibility: */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            {/* Use of Services : */}
            <div>
              {" "}
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Use of Services :
              </p>
              <p className="text-base-color text-justify leading-relaxed mb-3">
                Clinivea provides healthcare navigation and advocacy services.
                Please note that Clinivea’s MVRs do not provide medical
                diagnoses or treatments. Our role is to help you navigate the
                healthcare system, understand your options, and support you in
                managing your healthcare.
              </p>
            </div>
            {/* Eligibility:  */}
            <div className="my-10">
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Eligibility:
              </p>

              <p className="text-base-color text-justify leading-relaxed mb-3">
                You must be at least 18 years of age to use Clinivea’s services.
                By creating an account, you represent and warrant that the
                information you provide is accurate, complete, and current.
              </p>
            </div>
          </div>
          {/* Fees and Payment   */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Fees and Payment
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-5">
              Clinivea offers different service tiers (Freemium, Premium), some
              of which require payment. By selecting a paid service, you agree
              to pay the applicable fees as described on our website.
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Subscription Terms:
            </p>

            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Billing: </span> Subscription fees
              are billed monthly or annually in advance, depending on your
              selected plan.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Refund Policy: </span> Refunds are
              not provided for partial months of service or unused features.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Cancellation: </span> You may
              cancel your subscription at any time. Cancellation will take
              effect at the end of the current billing cycle.
            </p>
          </div>
          {/* Client Responsibilities   */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Client Responsibilities
            </p>

            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Accurate Information: </span> You
              agree to provide accurate and up-to-date information during
              account registration and throughout your use of our services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">
                Use for Personal Healthcare:
              </span>{" "}
              Clinivea’s services are designed for your personal healthcare
              needs and should not be used for commercial purposes.
            </p>
          </div>
          {/* Limitation of Services   */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Limitation of Services
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Clinivea provides healthcare navigation, not medical care. Our
              MVRs are not responsible for diagnosing medical conditions,
              prescribing medications, or providing treatment. Always seek
              advice from your healthcare provider for medical conditions.
            </p>
          </div>
          {/* Intellectual Property   */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Intellectual Property
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              All content on the Clinivea website, including text, graphics,
              logos, and software, is the property of Clinivea and is protected
              by copyright, trademark, and other intellectual property laws. You
              may not reproduce, distribute, or modify any content without our
              prior written consent.
            </p>
          </div>
          {/* Termination   */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Termination
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Clinivea reserves the right to suspend or terminate your access to
              our services at any time if you violate these Terms or engage in
              unlawful activities.
            </p>
          </div>

          {/* Limitation of Liability      */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Limitation of Liability
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Clinivea is not liable for any damages or losses resulting from
              your use of our services. Our services are provided “as-is” and
              “as available.” We make no warranties or guarantees regarding the
              accuracy or completeness of the information provided.
            </p>
          </div>
          {/* Changes to Terms */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Changes to Terms
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Clinivea reserves the right to modify these Terms at any time. We
              will notify users of significant changes by posting updates on our
              website or sending an email notification. Your continued use of
              the service after such changes constitutes acceptance of the new
              Terms.
            </p>
          </div>
          {/* Contact Us:     */}
          <div className="md:text-lg lg:text-xl border border-[#2B4257] p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Contact Us:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
              <li>Email: [clients@clinivea.com]</li>
            </ul>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              This draft can be adjusted depending on specific legal
              requirements or business models for Clinivea. You may also want to
              consult legal counsel to ensure full compliance with healthcare
              regulations and consumer protection laws. Let me know if you need
              further revisions!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
