"use client"
import { useState } from 'react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/signups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Success! You're on the waitlist.");
        setEmail(''); // Reset email field
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-row w-full p-1 mb-4 bg-white border shadow-xs rounded-xl">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 border-0 px-2 focus:ring-0 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="py-2 px-3 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 border border-gray-900 text-sm"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join waitlist"}
        </button>
      </form>

      {message && (
        <p className={`text-sm ${message.includes('Success') ? 'text-emerald-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <p className="text-xs text-gray-500">
        Don't want to wait?{' '}
        <a href="https://github.com/maybe-finance/maybe" className="text-gray-900 underline">
          Self-host
        </a>{' '}
        an early version of Maybe.
      </p>
    </div>
  );
};

export default SignupForm;
