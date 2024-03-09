function Footer() {
  return (
    <footer className=" mt-16 bg-gray-600 text-white p-8">
      <div className="flex flex-col gap-5 justify-center items-center lg:flex lg:flex-row lg:justify-between">
        <div className=" flex flex-col justify-center items-center w-full mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">
            Subscribe to our newsletter
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-900 text-white rounded-l py-2 px-4 focus:outline-none"
            />
            <button className="bg-slate-800 hover:bg-slate-500 rounded-r px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full text-center mb-4 md:mb-0">
          <a href="/terms" className="mr-4">
            Terms and Conditions
          </a>
          <a href="/privacy" className="mr-4">
            Privacy Policy
          </a>
        </div>
        <div className="w-full text-center">&copy; 2024 OpenMarket</div>
      </div>
    </footer>
  );
}

export default Footer;
