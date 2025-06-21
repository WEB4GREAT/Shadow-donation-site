"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 space-y-8">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Support the Shadow Movement
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Help fund giveaways and @SolShadowCat’s golden tick application.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition">
          Donate Now
        </button>
      </div>

      {/* Donation Section */}
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Donate in SOL or USDC
        </h2>
        <p className="mb-4 text-sm text-gray-400 break-all">
          Wallet: <span className="text-white">FJqfkQN6JNKZnb5TmpPz7jStTg3QXEP4g9z7merP7joU</span>
        </p>
        {!submitted ? (
          <form
            className="flex flex-col space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Your X (Twitter) handle"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <textarea
              placeholder="Why you're supporting"
              className="p-2 rounded bg-black border border-gray-700 text-white"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              I’ve Donated
            </button>
          </form>
        ) : (
          <p className="text-green-400 mt-4">
            ✅ Thanks for contributing. Your donation supports giveaways and Shadow’s verification.
          </p>
        )}
      </div>
    </main>
  );
}export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-4">
        Support the Shadow Movement
      </h1>
      <p className="text-lg text-center text-gray-300 mb-6 max-w-xl">
        Help fund giveaways and @SolShadowCat’s golden tick application.
      </p>
      <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition">
        Donate Now
      </button>
    </main>
  );
}
{/* Where the Funds Go */}
<div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-center">
  <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
    Where the Funds Go
  </h2>
  <div className="text-sm text-gray-300 space-y-2">
    <p>💰 50% — Community Giveaways</p>
    <p>📜 50% — Golden Tick Application Fee</p>
    <p className="text-gray-400 text-xs mt-3 italic">
      No profit. No catch. All transparent.
    </p>
  </div>
</div>

<main>
{/* Who’s Shadow? */}
<div className="bg-gray-900 p-6 rounded-lg w-full max-w-md text-center">
  <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
    Who’s Shadow?
  </h2>
  <p className="text-gray-300 text-sm">
    @SolShadowCat is a creator, curator, and real one on X. <br />
    This campaign helps elevate the brand with real backing.
  </p>
</div>
{/* Socials */}
<div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-center">
  <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
    Stay Connected
  </h2>
  <div className="space-y-3">
    <a
      href="https://x.com/SolShadowCat"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
    >
      Follow @SolShadowCat
    </a>
    <a
      href="https://x.com/intent/tweet?text=Support%20%40SolShadowCat%20and%20his%20movement%20with%20a%20donation!%20%F0%9F%92%B8%20https%3A%2F%2Fyourdomain.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm text-blue-400 underline mt-2"
    >
      Share on X
    </a>
  </div>
</div>
