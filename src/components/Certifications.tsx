import React from 'react';
import { Badge } from "@/components/ui/badge";

// This is placeholder data - replace with your actual certifications
const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    url: "https://www.credly.com/badges/d836fb9d-03ee-4cc4-8064-de89f48256e5/public_url",
  },
  {
    name: "AWS Certified DevOps Engineer - Professional",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
    url: "https://www.credly.com/badges/f0634cd6-e26b-46c1-ae9a-a10531affcac/public_url",
  },
  {
    name: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
    url: "https://www.credly.com/badges/b7b32dbe-1c72-4b00-b2b1-b66d03711b11/public_url",
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    badge: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    url: "https://learn.microsoft.com/api/credentials/share/de-de/OliverJarosch-4061/70A0A53C3D8D2229?sharingId=141F997CF7099464",
  },
  {
    name: "Multicloud Network Professional",
    issuer: "Aviatrix",
    badge: "https://images.credly.com/size/340x340/images/5b22143c-8806-41af-b4c9-7c5043edcbe3/image.png",
    url: "https://www.credly.com/badges/6c24a166-adc8-4cc2-857e-d83b66292125/public_url",
  },
  {
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    badge: "https://images.credly.com/size/340x340/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
    url: "https://www.credly.com/badges/4a3656ce-7227-467d-8e10-d4e75decdea6/public_url"
  },
  {
    name: "The Open Group Certified: TOGAF® Enterprise Architecture Practitioner",
    issuer: "The Open Group",
    badge: "https://images.credly.com/size/340x340/images/e36934b0-9b77-4bef-bf0c-a479c6c4f660/image.png",
    url: "https://www.credly.com/badges/b3c5b3fe-7d10-4351-a57d-fd705a079ed3/public_url"
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    badge: "https://images.credly.com/size/340x340/images/85b9cfc4-257a-4742-878c-4f7ab4a2631b/image.png",
    url: "https://www.credly.com/badges/b4720f47-ebba-4653-b3c0-fbef58a4ab75/public_url"
  },
];

const Certifications = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center text-center">
                  <a href={cert.url} className="block mb-4 w-full h-full flex flex-col items-center justify-center">
                    {cert.badge ? (
                      <img src={cert.badge} alt={cert.name} className="w-16 h-16 mr-2 inline-block" />
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                    )}
                    <h3 className="font-semibold mb-2">{cert.name}</h3>
                    <Badge variant="secondary" className="mb-2">
                      {cert.issuer}
                    </Badge>
                  </a>
                </div>
              </div>
            ))}

            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Comming Soon</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-4">*This is only a selection of certifications. For the full list, please refer to my <a href="https://www.linkedin.com/in/oliver-jarosch/" target="_blank" className="text-primary underline">LinkedIn account</a>.</p>

    </section>
  );
};

export default Certifications;