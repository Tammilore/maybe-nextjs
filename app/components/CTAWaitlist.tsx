import React from 'react';
import Image from 'next/image';
import SignupForm from './SignupForm'; // Reuse SignupForm component

const CTAWaitlist: React.FC = () => {
  return (
    <div className="text-center mt-20 overflow-hidden border-b">
      <div className="mx-auto max-w-96 space-y-4">
        <h2 className="max-w-xl text-3xl">
          Join the Maybe{' '}
          <Image src="/icon-maybe-color.svg" alt="Maybe Logo" className="inline" width={32} height={32} />{' '}
          waitlist
        </h2>
        <p className="text-gray-500">Join the waitlist to get notified when a hosted version of the app is available.</p>
        <div>
          <SignupForm />
        </div>
      </div>
      <div className="max-w-2xl p-1 mx-auto my-10 bg-black/[0.02] rounded-xl border border-black/1 shadow-[0px_0px_22.07px_0px_rgba(0,0,0,0.03)] max-h-80 -mb-28">
        <Image
          src="/screenshot.png"
          alt="Maybe Screenshot"
          width={600}
          height={400}
          className="w-full border border-black/1 rounded-lg shadow-[0_7.36px_7.36px_-3.68px_rgba(11,11,11,0.03)] shadow-[0_18.39px_22.07px_-3.68px_rgba(11,11,11,0.08)]"
        />
      </div>
    </div>
  );
};

export default CTAWaitlist;
