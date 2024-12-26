import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimony = () => {
  const testimonies = [
    {
      name: "Kanye West",
      title: "Rapper & Entrepreneur",
      image:
        "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
      quote: "Find God.",
      link: "https://twitter.com/kanyewest",
    },
    {
      name: "Tim Cook",
      title: "CEO of Apple",
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      quote:
        "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
      link: "https://twitter.com/tim_cook",
    },
    {
      name: "Parag Agrawal",
      title: "CEO of Twitter",
      image:
        "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
      quote:
        "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
      link: "https://twitter.com/paraga",
    },
    {
      name: "Satya Nadella",
      title: "CEO of Microsoft",
      image:
        "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
      quote:
        "Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
      link: "https://twitter.com/satyanadella",
    },
    {
      name: "Dan Schulman",
      title: "CEO of PayPal",
      image:
        "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
      quote:
        "Quam pellentesque nec nam aliquam sem et tortor consequat id. Enim sit amet venenatis urna cursus.",
      link: "https://twitter.com/dan_schulman",
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="testimonies" className="py-20 bg-white">
      <div
        className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto"
        data-aos="fade-up"
      >
        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            Words from Others
          </div>
          <h1 className="mb-5 text-3xl font-semibold text-slate-900 md:text-center md:text-5xl">
            Its not just us.
          </h1>
          <p className="text-xl text-gray-800 md:text-center md:text-2xl">
            Heres what others have to say about us.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          data-aos="fade-up"
        >
          {testimonies.map((testimony) => (
            <div
              key={testimony.name}
              className="relative group text-sm leading-6"
              data-aos="flip-left"
            >
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href={testimony.link} className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimony.image}
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt={testimony.name}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {testimony.name}
                      </h3>
                      <p className="text-gray-500 text-md">{testimony.title}</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    {testimony.quote}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
