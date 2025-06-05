import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate App Developer
            </h3>

            <p className="text-muted-foreground">
              With over a year of experience in Flutter development, I specialize
              in creating responsive, accessible, and performant mobile
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              Hi, I’m Sam Sothavy a passionate mobile developer with a strong
              foundation in Flutter and a growing background in IoT, cloud
              integration, and software testing. I’m currently pursuing a
              Bachelor’s degree in Management Information Systems at Sectec
              Institute, where I combine my academic knowledge with real-world
              development experience. I specialize in building cross-platform
              mobile applications with clean UI, responsive UX, and seamless
              integration with Bluetooth, Wi-Fi, and cloud platforms like
              ThingBoard. I also have hands-on experience in functional and
              financial testing across mobile apps and systems such as OPEN-WAY
              and MPGS, including test case creation, UI/UX verification, and
              manual testing using tools like JIRA. Whether I’m designing a
              user-friendly interface or managing project timelines and team
              collaboration, I strive to deliver quality, performance, and user
              satisfaction in every project. I’m a quick learner, problem-solver,
              and always excited to explore new technologies. Let’s build
              something impactful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1BLmDl2Lf4WfIGoDBRajxp7Hg-AMEAzCo"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">App Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and mobile applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};