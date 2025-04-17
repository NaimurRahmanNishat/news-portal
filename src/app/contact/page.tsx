import Image from "next/image";
import contact from "../../../public/contact.png";
import { FaAngleRight, FaClock } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import trophy from "../../../public/trophy.png";
import protection from "../../../public/protection.png";
import shipping from "../../../public/shipping.png";
import support from "../../../public/support.png";

const ContactPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/contactbg.png)",
          width: "100%",
          height: "316px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-10">
            <Image src={contact} alt="contact_image" width={77} height={77} />
            <h1 className="text-[#000000] font-medium text-[48px]">Contact</h1>
            <div className="flex items-center justify-center pt-2">
              <Link href={"/"}>
                <h3 className="text-[#000000] font-medium text-[16px]">Home</h3>
              </Link>
              <FaAngleRight className="pt-1 px-2" size={35} />
              <h3 className="font-light text-[16px] text-pink-600 cursor-pointer hover:font-bold hover:text-pink-700">
                Contact
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full h-full pb-20 md:pb-0 md:h-[944px] pt-20">
          <h1 className="text-black dark:text-white font-semibold text-[36px] flex items-center justify-center">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] font-normal text-center text-[16px] flex items-center justify-center pt-2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <div className="flex items-center gap-2 md:pt-16 pt-8">
                <FaLocationDot />
                <div>
                  <h3 className="text-black dark:text-white font-medium text-[24px] pt-12">
                    Address
                  </h3>
                  <p className="font-normal dark:text-white text-[16px] text-black">
                    236 5th SE Avenue, New York NY10000, <br /> United States
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <div>
                  <h3 className="text-black dark:text-white font-medium text-[24px] pt-12">
                    Phone
                  </h3>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <div>
                  <h3 className="text-black font-medium text-[24px] pt-12">
                    Phone
                  </h3>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="md:pt-24 pt-8">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[16px]">Your Name</label>
                <input
                  placeholder="Enter Your Name..."
                  className="border px-2 rounded-md py-2 border-[#9F9F9F]"
                />
              </div>
              <div className="flex flex-col gap-2 md:pt-10 pt-6">
                <label className="font-medium text-[16px]">Email</label>
                <input
                  placeholder="example@gmail.com"
                  className="border px-2 rounded-md py-2 border-[#9F9F9F]"
                />
              </div>
              <div className="flex flex-col gap-2 md:pt-10 pt-6">
                <label className="font-medium text-[16px]">Subject</label>
                <input
                  placeholder="This is an optional."
                  className="border px-2 rounded-md py-2 border-[#9F9F9F]"
                />
              </div>
              <div className="flex flex-col gap-2 md:pt-10 pt-6">
                <label className="font-medium text-[16px]">Message</label>
                <textarea
                  placeholder="Hi! i'd like to ask about"
                  className="border px-2 rounded-md py-2 border-[#9F9F9F]"
                />
              </div>
              <button className="bg-pink-600 text-white font-medium rounded-md px-10 py-3 hover:bg-blue-600 md:mt-10 mt-8">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[270px] h-full bg-[#FAF3EA] mb-3">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <div className="flex md:pt-28 pt-12 items-center justify-center">
              {/* logo */}
              <Image src={trophy} alt="contact_image" width={60} height={60} />
              {/* text */}
              <div className="flex flex-col pl-2">
              <h2 className="text-[#242424] font-bold">High Quality</h2>
              <p className="text-[#9F9F9F]">crafted from top materials</p>
              </div>
            </div>
            <div className="flex md:pt-28 pt-12 items-center justify-center">
              {/* logo */}
              <Image src={protection} alt="contact_image" width={60} height={60} />
              {/* text */}
              <div className="flex flex-col pl-2">
              <h2 className="text-[#242424] font-bold">Warranty Protection</h2>
              <p className="text-[#9F9F9F]">Over 2 years</p>
              </div>
            </div>
            <div className="flex md:pt-28 pt-12 items-center justify-center">
              {/* logo */}
              <Image src={shipping} alt="contact_image" width={60} height={60} />
              {/* text */}
              <div className="flex flex-col pl-2">
              <h2 className="text-[#242424] font-bold">Free Shipping</h2>
              <p className="text-[#9F9F9F]">Order over 150 $</p>
              </div>
            </div>
            <div className="flex md:pt-28 pt-12 pb-12 md:pb-0 items-center justify-center">
              {/* logo */}
              <Image src={support} alt="contact_image" width={60} height={60} />
              {/* text */}
              <div className="flex flex-col pl-2">
                <h2 className="text-[#242424] font-bold">24 / 7 support</h2>
                <p className="text-[#9F9F9F]">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
