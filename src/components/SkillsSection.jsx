import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Java", level: 80, category: "programming" },
  { name: "Node.js", level: 50, category: "programming" },
  { name: "Python", level: 50, category: "programming" },
  { name: "Dart", level: 60, category: "programming" },
  { name: "JavaScript", level: 50, category: "programming" },
  { name: "SQL", level: 70, category: "programming" },
  { name: "HTML/CSS", level: 80, category: "programming" },
  { name: "Bash/Shell Scripting", level: 60, category: "programming" },

  { name: "Linux", level: 80, category: "infrastructure" },
  { name: "Windows Server", level: 65, category: "infrastructure" },
  { name: "Network Fundamentals", level: 70, category: "infrastructure" },

  { name: "MySql", level: 90, category: "database" },
  { name: "PostgreSQL", level: 70, category: "database" },
  { name: "Oracle DB", level: 30, category: "database" },
  { name: "SQlite", level: 40, category: "database" },
  { name: "MongoDB", level: 50, category: "database" },


  { name: "SOC Monitoring", level: 40, category: "security operations" },
  { name: "Incident Response", level: 30, category: "security operations" },
  { name: "Threat Detection", level: 20, category: "security operations" },
  { name: "Log Analysis", level: 50, category: "security operations" },
  { name: "Threat Hunting", level: 30, category: "security operations" },
  { name: "Security Metrics", level: 50, category: "security operations" },


  { name: "SIEM (Splunk)", level: 50, category: "security tools" },


  { name: "Metasploit", level: 70, category: "Pentesting tools" },
  { name: "Searchsploit", level: 70, category: "Pentesting tools" },
  { name: "Burp Suite", level: 70, category: "Pentesting tools" },
  { name: "Nmap", level: 70, category: "Pentesting tools" },
  { name: "Nikto", level: 70, category: "Pentesting tools" },
  { name: "Nessus", level: 70, category: "Pentesting tools" },
  { name: "Google Dorking", level: 70, category: "Pentesting tools" },
  { name: "Wireshark", level: 70, category: "Pentesting tools" },
  { name: "John the Ripper", level: 70, category: "Pentesting tools" },
  { name: "Hydra", level: 70, category: "Pentesting tools" },
  { name: "Gobuster", level: 70, category: "Pentesting tools" },
  { name: "Dirbuster", level: 70, category: "Pentesting tools" },
  { name: "SQLmap", level: 70, category: "Pentesting tools" },

  { name: "Git", level: 70, category: "other" },
  { name: "Docker", level: 70, category: "other" },
  { name: "Time Management", level: 80, category: "other" },
  { name: "Pentesting life cycle", level: 80, category: "other" }

];


const categories = ["all", "programming","infrastructure","database","security operations", "security tools", "Pentesting tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center mb-12">
          Comprehensive skill set developed through professional experience, specialized training, and continuous learning
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
