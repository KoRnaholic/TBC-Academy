import Image from "next/image";
import contactImg from "../../public/images/contact-img.jpg";

export default function ContactForm() {
  return (
    <>
      <div className="container flex flex-col md:flex-row  my-20 justify-center gap-16  bg-white">
        <div>
          <Image
            className="rounded-xl"
            src={contactImg}
            width={600}
            height={600}
            alt="contact-us"
          />
        </div>
        <div className=" space-y-5  ">
          <h4 className="text-start text-4xl text-[#002058]">Get In Touch</h4>

          <form>
            <div className="grid grid-cols-2 gap-12">
              <input
                type="text"
                className="border  px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border  px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="border  px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                className="border  px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols={10}
                rows={5}
                className="border  px-4 py-2 focus:outline-none focus:border-gray-700 rounded-md col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-16 focus:outline-none  rounded-md bg-[#FF6575] hover:bg-[#f95666] px-4 py-2 text-white font-bold w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
