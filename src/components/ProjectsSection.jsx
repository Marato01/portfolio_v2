import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SiAndroid } from "react-icons/si"; // Icon from react-icons

const projects = [
  {
    id: 1,
    title: "HydroB App",
    description: "This mobile application is designed to help users monitor and configure pH and Electrical Conductivity (EC) values in real-time using Bluetooth-enabled sensors. It is ideal for applications in hydroponics, aquaponics, agriculture, gardening, and water quality monitoring, where maintaining optimal pH and EC levels is critical.",
    image: "/hydrob.jpg",
    tags: ["Flutter", "Node.js", "Thingboard", "MongoDB"],
    demoUrl: "",
    githubUrl: "",
    apkUrl: "https://drive.google.com/uc?export=download&id=1tIYvtiOuMJh4kzFVxZOrTQ9uRllygUN2"
  },
  {
    id: 2,
    title: "Config AI App",
    description:
      "The Config AI App is a user-friendly application designed to configure settings directly on firmware via Bluetooth or Wi-Fi. Once connected, you can easily adjust and customize values on boards like ESP and similar devices.",
    image: "/configai.jpg",
    tags: ["Flutter"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Robotbery App",
    description:
      "Robotbery App is an app that lets you control all the products in the AI Farm company using Bluetooth and Wi-Fi.",
    image: "/robotberry.jpg",
    tags: ["Flutter"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.aifarm.robotberry",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Aladdindo App",
    description:
      "Aladdindo is a robot service app that acts as the interface to control the robot.",
    image: "/projects/project3.png",
    tags: ["Kotlin"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-commerce App",
    description:
      "The E-commerce app is a mobile application designed for selling clothes online. It allows users to browse products, add items to a cart, and place orders. This app was developed as part of my final exam project during my Flutter course at ISTAD school, where I learned how to build modern mobile applications using Flutter and Dart. The project helped me gain hands-on experience in UI/UX design, state management, and integrating features like product listing, shopping cart, and checkout process.",
    image: "/projects/project3.png",
    tags: ["Flutter"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
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
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.apkUrl}
                      download
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiAndroid size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Marato01"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
