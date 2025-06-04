import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Experience 1: AI Farm Robotic */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <img
                src="/aifarm.png" // Replace with your actual logo path
                alt="AI Farm Robotic"
                className="h-10 w-10 object-contain rounded-full"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Lead / Android Developer – AI Farm Robotic
                </h4>
                <p className="text-muted-foreground text-sm mb-1">
                  Jun 2024 – Present | Ring Road 2, Dangkao, Phnom Penh
                </p>
                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed intuitive UI/UX based on best practices</li>
                  <li>Developed responsive mobile features using Flutter</li>
                  <li>Integrated Bluetooth & Wi-Fi communication modules</li>
                  <li>Enabled real-time firmware data exchange</li>
                  <li>Implemented cloud sync with ThingBoard IoT platform</li>
                  <li>Estimated timelines & managed project scopes</li>
                  <li>Led a small dev team & collaborated with firmware engineers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 2: Sathapana Bank */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <img
                src="/spn.png" // Replace with your actual logo path
                alt="Sathapana Bank"
                className="h-10 w-10 object-contain rounded-full"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  QA Trainee – Sathapana Bank
                </h4>
                <p className="text-muted-foreground text-sm mb-1">
                  Oct 2022 – Dec 2023 | No. 63, Preah Norodom Blvd
                </p>
                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                  <li>Conducted functional and financial system testing</li>
                  <li>Developed and executed detailed test cases</li>
                  <li>Performed UI/UX verification for mobile apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
