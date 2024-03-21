import Image from "next/image";
import Link from "next/link";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const manifestations = [
  '$80,000/yr Job',
  'Dream Partner / SP',
  '$35/hr Job',
  'Dream Wedding',
  'Healthy relationship / marriage',
  'Dream Apartment',
  'Coaching Business (in the works!)',
  'Tootsie Pop (lol)',
];

export default function Home() {
  return (
    <div className="bg-white h-full">
      {/* <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}

      <div className="px-6 py-12 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Struggling to Manifest Your Desires?
            <br />
            <br />
            <div className="mb-6 text-2xl tracking-tight text-gray-900 sm:text-3xl">
              Watch the video below to find out how we may be able to help you:
            </div>
          </h2>
          {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p> */}
          <h1 className="py-32 border-2">VIDEO HERE</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-600">
            Please watch the video before booking a call
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/book-your-call"
              className="flex items-center text-lg rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="text-2xl pr-2">👉🏻</span>Click Here to Book a
              Call
              <span className="text-2xl pl-2">👈🏻</span>
            </Link>
            {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
          </div>
        </div>
      </div>

      <div>
        <div className="relative isolate bg-white">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"> */}
            <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-8 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-12 xl:gap-x-20 xl:px-20">
              {/* <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1613755469365-40b004dc3bb4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              /> */}
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="./images/us.jpg"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why work with us?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Here are some of the things Kathlyn and I have manifested:
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
                >
                  {manifestations.map((manifestation) => (
                    <li key={manifestation} className="flex gap-x-3">
                      <span className="text-black">{manifestation}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
          <div className="mb-24 flex items-center justify-center">
            <Link
              href="/book-your-call"
              className="flex items-center text-lg rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="text-2xl pr-2">👉🏻</span>Click Here to Book a Call
              <span className="text-2xl pl-2">👈🏻</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
