import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SiAndroid, SiTryhackme } from "react-icons/si"; // Icon from react-icons

const projects = [
  {
    id: 1,
    title: "Nessus",
    description: "Learn how to set up and use Nessus, a popular vulnerability scanner. This room covers installation, configuration, and practical usage of Nessus to identify security weaknesses in systems and networks.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/2fc9d2bc41c0ad97d655ed460ea44fca.png",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/rpnessusredux?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 2,
    title: "SQLMAP",
    description:
      "Learn about and use Sqlmap to exploit the web application",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/523723e4d3b75b6439b8e2cd0fa6880b.png",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/sqlmap?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 3,
    title: "What is Networking?",
    description:
      "Begin learning the fundamentals of computer networking in this bite-sized and interactive module.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/presec-room-image4.png",
    tags: ["Info"],
    demoUrl: "https://tryhackme.com/room/whatisnetworking?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 4,
    title: "Pentesting Fundamentals",
    description:
      "Learn the important ethics and methodologies behind every pentest.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/66704dd0e54a1f39bff7b1a1-1735574298438",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/pentestingfundamentals?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 5,
    title: "Junior Security Analyst Intro",
    description:"Play through a day in the life of a Security Analyst and experience their everyday duties.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/678ecc92c80aa206339f0f23-1762187304976",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/jrsecanalystintrouxo?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
   {
    id: 6,
    title: "Intro to Logs",
    description:
      "Learn the fundamentals of logging, data sources, collection methods and principles to step into the log analysis world.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/19b19a4e55a402acb3161cd43f520381.png",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/introtologs?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 7,
    title: "Burp Suite: Repeater",
    description:
      "Learn how to use Repeater to duplicate requests in Burp Suite.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/003f622eb51e1399dde189ddbc9804a3.png",
    tags: ["Info"],
    demoUrl: "https://tryhackme.com/room/burpsuiterepeater?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 8,
    title: "SOC Role in Blue Team",
    description:
      "Discover security roles and learn how to advance your SOC career, starting from the L1 analyst.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/678ecc92c80aa206339f0f23-1756302396554",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/socroleinblueteam?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 9,
    title: "Careers in Cyber",
    description:
      "Learn about the different careers in cyber security.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/e563831b46440404db43861a5246a6eed26ef95b14afe6ca310efee07958992b.png",
    tags: ["Info"],
    demoUrl: "https://tryhackme.com/room/careersincyber5zy1sk0al?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 10,
    title: "React2Shell: CVE-2025-55182",
    description:
      "Explore the CVE-2025-55182 vulnerability in React server components.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/5f04259cf9bf5b57aed2c476-1764954113748",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/react2shellcve202555182?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 11,
    title: "Offensive Security Introduction",
    description:
      "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/2dcbc5890dd1acb0c8f69208e6bbb75faa64678860482160c5eb15346434f569.5de96d9ca744773ea7ef8c00-1767868972234",
    tags: ["Easy"],
    demoUrl: "https://tryhackme.com/room/offensivesecurityintrokKx12l39?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 12,
    title: "Defensive Security Intro",
    description:
      "Introducing defensive security, where you will protect FakeBank from an ongoing attack.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/5de96d9ca744773ea7ef8c00-1769425626237",
    tags: ["Info"],
    demoUrl: "https://tryhackme.com/room/defensivesecurityintroez?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
  {
    id: 13,
    title: "Linux Privilege Escalation: Enumeration",
    description:
      "Gather information about the target host to understand the system for privilege escalation.",
    image: "https://tryhackme-images.s3.amazonaws.com/room-icons/6989b1062386d3517f652edd-1772788398210",
    tags: ["Info"],
    demoUrl: "https://tryhackme.com/room/linprivenum?utm_campaign=social_share&utm_medium=social&utm_content=share-completed-room&utm_source=copy&sharerId=69b0742e066fd68a51ce16fe",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Completed <span className="text-primary"> Rooms </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my completed TryHackMe rooms. Each room was completed with a focus on hands-on cybersecurity practice, real-world attack scenarios, and improving my SOC and security skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiTryhackme size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
