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
              Passionate Software Developer with a growing interest in cybersecurity
            </h3>

            <p className="text-muted-foreground">
              With over a year of experience in Flutter development, I have developed and maintained mobile applications with a strong focus on performance and reliability, and I am currently shifting my career toward SOC analysis and cybersecurity operations.
            </p>

            <p className="text-muted-foreground">
              Hi, I’m Sam Sothavy, a MIS graduate with professional experience as a Mobile Developer. I have worked with Flutter to build cross-platform mobile applications, integrating systems such as Bluetooth, Wi-Fi, and cloud platforms, while also collaborating in testing, debugging, and software delivery processes.
              I am now transitioning into the cybersecurity field, with a strong interest in Security Operations Center (SOC) roles. I am building my skills in security monitoring, log analysis, threat detection, and incident response. My background in software development gives me a solid understanding of how applications and systems work, which helps me better identify potential vulnerabilities and security risks.
              I am passionate about cybersecurity, highly motivated to grow in SOC operations, and eager to contribute to a security team by learning and applying real-world defensive security practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Gz1r6ZGvdyYx61xx2dViW0GNgJfilZ-D"
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
                  <h4 className="font-semibold text-lg">Security Monitoring</h4>
                  <p className="text-muted-foreground">
                   Monitoring system logs and events to detect and analyze potential security threats.
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
                  <h4 className="font-semibold text-lg">Threat Detection</h4>
                  <p className="text-muted-foreground">
                    Identifying suspicious activities and investigating potential vulnerabilities in systems.
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
                  <h4 className="font-semibold text-lg">Incident Response</h4>
                  <p className="text-muted-foreground">
                    Supporting investigation and response to security incidents using structured processes.
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