import { Suspense } from "react";
import Image from "next/image";

// API Health Check Component with loading state
async function ApiStatus() {
  try {
    // Health check call to our NestJS API
    const res = await fetch("http://localhost:4000/health", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch API status");
    }

    const data = await res.json();
    return (
      <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
        <p className="font-medium">API Status: Online</p>
        <p className="text-sm mt-1">Message: {data.message || "Connected"}</p>
        <p className="text-xs mt-1">
          Uptime: {Math.floor(data.uptime)} seconds
        </p>
      </div>
    );
  } catch (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
        <p className="font-medium">API Status: Offline</p>
        <p className="text-sm mt-1">
          Make sure the API is running on port 4000
        </p>
        <p className="text-xs mt-2 text-gray-500">
          <code>cd apps/api && npm run start:dev</code>
        </p>
      </div>
    );
  }
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold mb-4">ConnectVerse</h1>
          <p className="text-lg mb-6">
            Next.js + NestJS + PostgreSQL Professional Network
          </p>

          {/* API Health Check with loading state */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Backend Connection</h2>
            <Suspense
              fallback={
                <div className="p-4 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                  Checking API connection...
                </div>
              }
            >
              <ApiStatus />
            </Suspense>
          </div>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8 justify-center w-full">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/profile"
          >
            Profile
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/connections"
          >
            Connections
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/search"
          >
            Search
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          About
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy"
        >
          Privacy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
        >
          Terms
        </a>
      </footer>
    </div>
  );
}
