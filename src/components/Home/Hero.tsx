import Link from "next/link";
import ReactWrapBalancer from "react-wrap-balancer";
import { Demo } from "./Demo";

export function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-24 md:pt-52">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 ">
                <Link
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-900  transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-[#f0eded] before:rounded-full before:pointer-events-none"
                  href="https://github.com/code100x/tiplink/"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center px-2">
                    STAR US ON GITHUB{" "}
                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 mb-1">
                      &gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-extrabold tracking-tight text-transparent text-5xl md:text-6xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-900/60 via-zinc-900 to-zinc-600/60"
              data-aos="fade-down"
            >
              <ReactWrapBalancer>
                The crypto of tomorrow, <span className="text-[#006399]">today</span>
              </ReactWrapBalancer>
            </h1>
              <p
                className="mb-8 text-lg text-zinc-900"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Create a frictionless wallet with just a Google Account.
              </p>
            <div
              className="flex flex-col w-1/5 items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Demo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
