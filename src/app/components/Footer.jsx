import Image from "next/image";
import NavDonateButton from "./ui/NavDonateButton";

export default function Footer() {
  return (
    <div className="h-full w-screen justify-between bg-gray-800 px-8 py-12 text-white md:px-16">
      <div className="md:flex md:justify-between">
        <div className="mb-8 space-y-2 md:mb-0 md:w-1/2">
          <h2 className="pb-4 text-lg font-semibold">
            Arm our youth with an unstoppable mindset...
          </h2>
          <NavDonateButton>DONATE</NavDonateButton>
        </div>
        <div className="mb-8 space-y-2 md:mb-0 md:w-1/2">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>P.O. Box 9181 Fort Lauderdale, FL 33310</p>
          <p>Email: info@ignite-empowerment.org</p>
          <p>Phone: 954-544-9900</p>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-semibold">Useful links</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Join Our Movement</li>
          <li>Fundraise for Oxfam</li>
          <li>Discover Our Stories and Impact</li>
          <li>Explore Our Research and Thinking</li>
          <li>Donate</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="mb-8 space-y-2">
        <Image
          className=" -my-2"
          src="/public/images/logo-light-shadow.png"
          alt="Ignite logo"
          width={188}
          height={102}
        />
        <p>Ignite Empowerment is a florida registered non-profit 501c</p>

        <p>Charitable Registration No. 129716866 RR0001</p>
      </div>

      <p className="text-center">© 2023 Ignite Empowerment</p>
    </div>
  );
}
