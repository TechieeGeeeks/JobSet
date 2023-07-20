import React from "react";

const Policy = () => {
  return (
    <div className="grid grid-cols-2">
      {/* First section (Privacy Policy) */}
      <div className="col-span-1">
        <div className="p-8 max-w-2xl mt-24">
          <div className="border-solid border mb-4 p-4">
            <h2 className="text-lg font-bold border-b-2 pb-2">Privacy Policy</h2>
            <p className="mb-4">
              At [Your Company Name], we take your privacy seriously. This Privacy
              Policy outlines how we collect, use, and protect the personal
              information you provide to us through our website.
            </p>
          </div>
        </div>
      </div>

      {/* Second section (Information Collection) */}
      <div className="col-span-1 mt-24">
        <div className="p-8 max-w-2xl">
          <div className="border-solid border mb-4 p-4">
            <h2 className="text-lg font-bold border-b-2 pb-2">Information Collection</h2>
            <p className="mb-4">
              We collect personal information such as your name, email address, and
              contact details when you voluntarily submit them to us through our
              website forms or other means of communication.
            </p>
            <p className="mb-4">
              The personal information we collect is used to provide you with the
              services and information you request. We may also use this information
              to improve our website, customize your user experience, and send you
              relevant updates or promotional materials.
            </p>
            <h3 className="text-lg font-bold mb-2">Information Protection</h3>
            <p className="mb-4">
              We implement strict security measures to safeguard your personal
              information from unauthorized access, disclosure, or alteration. We do
              not share your information with third parties unless required by law or
              with your explicit consent.
            </p>

            <h3 className="text-lg font-bold mb-2">Your Choices</h3>
            <p className="mb-4">
              You have the right to access, update, or delete the personal information
              we hold about you. If you wish to exercise any of these rights or have
              any questions about our Privacy Policy, please contact us using the
              information provided below.
            </p>
          </div>

          {/* Contact Information */}
          <div className="items-center justify-center mb-12">
            <h3 className="text-xl font-medium mb-2">Contact us:</h3>
            <ul className="list-disc pr-6">
              <li>Email: info@yourcompany.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main Street, City, State, ZIP</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Media query for mobile responsiveness */}
      <style jsx>
        {`
          @media (max-width: 767px) {
            .grid-cols-2 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Policy;
