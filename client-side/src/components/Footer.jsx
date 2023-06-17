import logo from "../assets/sidebar_logo.png";

export default function FooterComponent() {
  return (
    <footer className="bg-neutral-100 py-4">
      <div className="w-full mx-auto max-w-screen-xl flex justify-center items-center flex-col">
        <img src={logo} alt="" className="h-28" />
        <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-gray-500">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center mt-4">
          © 2023{" "}
          <a href="" className="hover:underline">
            Borcelle™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
