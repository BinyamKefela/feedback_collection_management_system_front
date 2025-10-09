import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="max-w-6xl justify-items-center mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Column 1 */}
        <div>
            <div className="relative w-20 h-20">
          <Image alt="zemen bank" fill
              className="object-contain"  src={'/images/zemen_bank.svg'} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Customer Service</li>
            <li>Mobile Banking</li>
            <li>Card Banking</li>
            <li>Branch Service</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li>support@example.com</li>
            <li>+1 234 567 890</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
