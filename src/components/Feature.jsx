import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Realtime Collaboration",
      description:
        "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together.",
      icon: (
        <svg
          className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 8L20 8"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 16L14 16"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <ellipse
            cx="7"
            cy="8"
            rx="3"
            ry="3"
            transform="rotate(90 7 8)"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></ellipse>
          <ellipse
            cx="17"
            cy="16"
            rx="3"
            ry="3"
            transform="rotate(90 17 16)"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></ellipse>
        </svg>
      ),
    },
    {
      title: "History of Edits",
      description:
        "Go back and forth your history of changes and restore your designs to any point in time.",
      icon: (
        <svg
          className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
          <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
          <rect
            x="11"
            y="13"
            width="2"
            height="6"
            rx="1"
            transform="rotate(90 11 13)"
            fill="#111827"
          ></rect>
          <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
          <path
            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
            stroke="#111827"
            strokeWidth="2"
          ></path>
        </svg>
      ),
    },
    {
      title: "Integrations",
      description:
        "Step up your designs and workflow with integrations with your favourite tools such as Mailchimp, Slack, Jira, etc.",
      icon: (
        <svg
          className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 8L20 8"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 16L14 16"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <ellipse
            cx="7"
            cy="8"
            rx="3"
            ry="3"
            transform="rotate(90 7 8)"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></ellipse>
          <ellipse
            cx="17"
            cy="16"
            rx="3"
            ry="3"
            transform="rotate(90 17 16)"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          ></ellipse>
        </svg>
      ),
    },
    // Add more features as needed
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="py-12 bg-white text-gray-900 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full transform transition-transform duration-300 group-hover:scale-105">
                <div className="p-9">
                  {feature.icon}
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    {feature.title}
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
