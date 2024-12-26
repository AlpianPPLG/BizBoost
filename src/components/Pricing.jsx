import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Data paket harga
  const plans = [
    {
      title: "Starter",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "For new makers who want to fine-tune and test an idea.",
      features: [
        "1 landing page included",
        "1,000 visits/mo",
        "Access to all UI blocks",
        "50 conversion actions included",
        "5% payment commission",
        "Real-time analytics",
      ],
      link: "/sign-up",
      buttonText: "Join as a Starter",
    },
    {
      title: "Superior",
      monthlyPrice: "$8",
      yearlyPrice: "$80",
      description:
        "For creators with multiple ideas who want to efficiently test and refine them.",
      features: [
        "All Free features",
        "5 landing pages included",
        "50,000 visits/mo",
        "1,000 conversion actions included",
        "1% payment commission",
      ],
      link: "/sign-up",
      buttonText: "Join as a Superior",
    },
    {
      title: "Shipper",
      monthlyPrice: "$15",
      yearlyPrice: "$150",
      description: "For productive shippers who want to work more efficiently.",
      features: [
        "All Standard features",
        "20 landing pages included",
        "200,000 visits/mo",
        "5,000 conversion actions included",
        "No payment commission",
      ],
      link: "/sign-up",
      buttonText: "Join as a Shipper",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        Pricing
      </h2>
      <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
        <button
          type="button"
          onClick={() => setIsMonthly(true)}
          className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
            isMonthly
              ? "bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
              : "border border-transparent text-slate-900"
          }`}
        >
          Monthly billing
        </button>
        <button
          type="button"
          onClick={() => setIsMonthly(false)}
          className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
            !isMonthly
              ? "bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
              : "border border-transparent text-slate-900"
          }`}
        >
          Yearly billing
        </button>
      </div>
      <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900">
                {plan.title}
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                {plan.description}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                  {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-base font-medium text-slate-500">
                  {isMonthly ? "/mo" : "/yr"}
                </span>
              </p>
              <a
                href={plan.link}
                className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
              >
                {plan.buttonText}
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                Whats included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex space-x-3">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-400" />
                    <span className="text-base text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
