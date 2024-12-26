import { Code, Smartphone, PenTool, Zap, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Web Development",
    description: "Create stunning, responsive websites tailored to your brand.",
    features: ["Custom Design", "SEO Optimization", "E-commerce Solutions"],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    title: "Mobile App Development",
    description:
      "Build powerful, user-friendly mobile apps for iOS and Android.",
    features: [
      "Native & Cross-platform",
      "UI/UX Design",
      "App Store Optimization",
    ],
  },
  {
    icon: <PenTool className="h-8 w-8 text-pink-600" />,
    title: "UI/UX Design",
    description:
      "Craft intuitive, engaging user experiences that delight your customers.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach your target audience effectively.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We offer a comprehensive range of digital solutions to help your
              business thrive in the modern world.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-20 text-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Get Started with Our Services
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
