import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactInfo() {
  return (
    <>
      <div className="flex gap-5 px-5 justify-center flex-wrap font-sans mt-20 text-gray-600">
        <div className="flex flex-col w-full  md:w-1/5 py-5 border justify-center items-center gap-2 rounded-xl">
          <LocalPhoneIcon className="text-[#FF6575] w-16 h-16 bg-[#f6696233] rounded-full p-4" />
          <span className="text-xl font-bold text-[#002058]">Phone</span>
          <span>888 888-8888</span>
          <span>(123) 456-7890</span>
        </div>
        <div className="flex flex-col  w-full  md:w-1/5  py-5 border justify-center items-center gap-2 rounded-xl">
          <EmailIcon className="text-[#FF6575] w-16 h-16 bg-[#f6696233] rounded-full p-4" />
          <span className="text-xl font-bold text-[#002058]">
            Email Address
          </span>
          <span>dreamslms@example.com</span>
          <span>johnsmith@example.com</span>
        </div>
        <div className="flex flex-col  w-full  md:w-1/5  py-5 border justify-center items-center gap-2 rounded-xl">
          <LocationOnIcon className="text-[#FF6575] w-16 h-16 bg-[#f6696233] rounded-full p-4" />
          <span className="text-xl font-bold text-[#002058]">Address</span>
          <span>367 Hillcrest Lane, Irvine,</span>
          <span>California, United States</span>
        </div>
      </div>
    </>
  );
}
