import Link from 'next/link';
import SignupForm from './SignupForm';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl p-6 mx-auto my-8 md:p-4">
      <div className="flex flex-col justify-between gap-x-4 md:flex-row">
        <div className="flex flex-col gap-y-4 max-w-96">
          <Link href="/">
            <img src="/icon-logo.svg" alt="Maybe Logo" className="w-10 inline" />
          </Link>
          <p className="text-sm text-gray-500">Join the waitlist to get notified when a hosted version of the app is available.</p>
          <SignupForm />
        </div>
        <div className="flex flex-col text-sm leading-6 text-gray-500 gap-x-10 md:flex-row">
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">General</h4>
            <ul className="flex flex-col gap-y-1">
              {["Articles", "Financial Terms", "Tools", "Contribute"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[#141414]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">More</h4>
            <ul className="flex flex-col gap-y-1">
              {["Join Community", "Self-Host", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[#141414]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">Social</h4>
            <ul className="flex flex-col gap-y-1">
              {["Discord", "Twitter", "LinkedIn"].map((item) => (
                <li key={item}>
                  <Link href={`https://link.maybe.co/${item.toLowerCase()}`} className="text-[#141414]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-12 text-sm text-center text-gray-500 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Maybe Finance, Inc.</p>
        <p>Made with ❤️ on planet Earth.</p>
      </div>
    </footer>
  );
};

export default Footer;
