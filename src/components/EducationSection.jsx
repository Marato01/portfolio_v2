import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Setec Institute */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-lg">Setec Institute</h4>
                <p className="text-muted-foreground text-sm mb-1">
                  Bachelor of Management Information Systems (MIS)
                </p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </div>

          {/* ISTAD */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-lg">ISTAD</h4>
                <ul className="text-muted-foreground text-sm list-disc pl-4 mt-1">
                  <li>Flutter / Mobile Development</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-1">
                  Completed in 2023
                </p>
              </div>
            </div>
          </div>

          {/* Udemy */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-lg">Udemy</h4>
                <ul className="text-muted-foreground text-sm list-disc pl-4 mt-1">
                    <li>Quality Assurance</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-1">
                  Completed in April-13-2023
                </p>
              </div>
            </div>
          </div>

          {/* CISCO*/}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-lg">CISCO</h4>
                <ul className="text-muted-foreground text-sm list-disc pl-4 mt-1">
                    <li>CyberSecurity Essentials</li>
                </ul>
                <p className="text-sm text-muted-foreground">Completed in 24-Oct-2021</p>
              </div>
            </div>
          </div>

          {/* Pursat High School */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-lg">Pursat High School</h4>
                <p className="text-muted-foreground text-sm mb-1">Bac II</p>
                <p className="text-sm text-muted-foreground">Completed in 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
