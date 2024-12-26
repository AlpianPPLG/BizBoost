import { Users, Target, Award, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      number: "10K+",
      label: "Active Users",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      number: "20+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-6 w-6 text-pink-600" />,
      number: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <div className="bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Decorative blobs */}
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Company
              </span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We're dedicated to delivering exceptional digital solutions that
              help businesses thrive in the modern world.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3
                className="text-2xl font-bold text-gray-900"
                data-aos="fade-right"
              >
                Transform Your Digital Presence
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Our team of experts combines creativity and technical expertise
                to deliver solutions that drive real business results. We're
                passionate about helping our clients succeed in the digital
                landscape.
              </p>
              <div className="space-y-4">
                {["Custom Solutions", "Expert Team", "24/7 Support"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2"
                      data-aos="fade-right"
                      data-aos-delay={200 + index * 100}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  )
                )}
              </div>
              <button className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                Learn More About Us
                <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-2 rounded-2xl shadow-2xl">
                <img
                  src="/img/image2.jpg"
                  alt="About Us"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg group">
                <p className="font-semibold text-gray-800 transition-transform duration-300 group-hover:translate-y-[-6px]">
                  Trusted by leading companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
