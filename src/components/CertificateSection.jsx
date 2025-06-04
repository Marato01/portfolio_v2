import React from 'react';

export const CertificateSection = () => {
  return (
    <section id="certificates" className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 relative">
      <div className="container mx-auto max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Certificate 1 */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] h-[180px] sm:h-[220px] md:h-[280px] rounded-lg overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
              <img
                src="/cisco.jpg"
                alt="Certificate 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] h-[180px] sm:h-[220px] md:h-[280px] rounded-lg overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
              <img
                src="/udemy.jpg"
                alt="Certificate 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};