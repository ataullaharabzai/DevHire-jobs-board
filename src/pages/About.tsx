import aboutLogo from "../images/about_hero.avif";
import card1 from "../images/aboutCard1.avif";
import card2 from "../images/aboutCard2.avif";
import card3 from "../images/aboutCard3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="w-full mt-10">
        <img src={aboutLogo} alt="About Hero" className="m-auto" />
      </div>
      <div className="bg-[#f7f6fb] mt-10 p-8 flex flex-col gap-15">
        <div data-aos="fade-right" className="w-full md:w-2/3 p-7 flex gap-5 items-center shadow shadow-gray-400 bg-white rounded-xl border border-transparent hover:border hover:border-[#143cf4] transition-all">
          <div className="w-80 h-50">
            <img
              src={card1}
              alt="Card One"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <p className="text-[20px] md:text-[26px] font-bold text-[#143cf4]">
              Curated Tech Opportunities
            </p>
            <p className="text-[13px] md:text-[15px] text-[#4e525a]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              dolor perspiciatis suscipit voluptas! Quo vero minus voluptate
              aspernatur illum dolores atque voluptatem, repudiandae ipsum
              temporibus ex nostrum recusandae aliquam sed.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div data-aos="fade-left" className="w-full md:w-2/3 p-7 flex gap-5 items-center shadow shadow-gray-400 bg-white rounded-xl border border-transparent hover:border hover:border-[#143cf4] transition-all">
            <div className="w-1/2">
              <p className="text-[20px] md:text-[26px] font-bold text-[#143cf4]">
                Connect With Top Employers
              </p>
              <p className="text-[13px] md:text-[15px] text-[#4e525a]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi cupiditate eaque ipsam voluptatibus animi voluptas.
                Unde sequi temporibus id odit, debitis, consequatur ipsa sint ad
                ratione quidem nemo ipsum voluptate!
              </p>
            </div>
            <div className="w-80 h-50">
              <img
                src={card2}
                alt="Card One"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="w-full md:w-2/3 p-7 flex gap-5 items-center shadow shadow-gray-400 bg-white rounded-xl border border-transparent hover:border hover:border-[#143cf4] transition-all">
          <div className="w-80 h-50">
            <img
              src={card3}
              alt="Card One"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <p className="text-[20px] md:text-[26px] font-bold text-[#143cf4]">
              Advance Your Career
            </p>
            <p className="text-[13px] md:text-[15px] text-[#4e525a]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, quasi eius est quibusdam quis asperiores voluptate!
              Sapiente exercitationem voluptatem fugiat beatae magni pariatur,
              praesentium suscipit quisquam aut esse itaque culpa?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
