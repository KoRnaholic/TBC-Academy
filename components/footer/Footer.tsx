import Link from "next/link";

export default function Footer({ navigation }) {
  return (
    <footer className="mt-6 bg-white text-inherit py-8">
      <div className="flex justify-around gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-red-400">Get In Touch</h2>
          <p className="max-w-[250px]">
            3556 Beech Street, San Francisco, California, CA 94108
          </p>
          <p> +19 123-456-7890</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-red-400">Navigation</h2>
          <div className="flex gap-6">
            <ul className="space-y-2">
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/">{navigation.home}</Link>
              </li>
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/courses">{navigation.courses}</Link>
              </li>
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/about">{navigation.about}</Link>
              </li>
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/instructors">{navigation.instructors}</Link>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/about">{navigation.students}</Link>
              </li>
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/blog">{navigation.blog}</Link>
              </li>
              <li className="hover:text-[#FF6575]  px-5 lg:px-0">
                - <Link href="/contact">{navigation.contact}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-red-400">Get More Updates</h2>
          <div className="relative w-full max-w-sm">
            <input
              placeholder="Enter your email address"
              type="text"
              className="w-full border pl-6 pr-12 py-2 rounded-lg  focus:ring-0 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-[#373748] shadow-md"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF6575]  text-white px-3 py-1.5 rounded-lg hover:bg-[#fa5566] dark:hover:bg-[#FF85A1] transition duration-300">
              Submit
            </button>
          </div>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut consequat mauris
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
