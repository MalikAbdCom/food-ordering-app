import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Button from "./UI/Button.jsx";

export default function NavBar() {
  const [gratherThanZero, setGratherThanZero] = useState(0);

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 left-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Button
                  type="button"
                  className={
                    "text-slate-400 font-bold group hover:text-blue-400"
                  }
                  textOnly
                >
                  <span className={"text-white group-hover:text-blue-400"}>
                    Carts
                  </span>{" "}
                  (
                  <span
                    className={gratherThanZero ? "text-blue-400 font-bold" : ""}
                  >
                    {gratherThanZero}
                  </span>
                  )
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
