import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Twitch } from "lucide-react";
import LoaderSD from "./Loader";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/30 to-secondary/10"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-left">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-left space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:samsothavy68@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                    aria-label="Send email to samsothavy68@gmail.com"
                  >
                    samsothavy68@gmail.com
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                      Send an email
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="tel:+85595240836"
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                    aria-label="Call +855 95 240-836"
                  >
                    +855 95 240-836
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                      Call me
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <span className="text-muted-foreground">
                    st26, No A19, Khan Pur Senchey, Phnom Penh
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit my LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit my Twitter profile"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit my Instagram profile"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Visit my Twitch profile"
                >
                  <Twitch className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center max-sm:mt-8">
            <LoaderSD className="h-56 w-56 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};