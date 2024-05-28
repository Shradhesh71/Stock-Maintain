import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto  w-auto"
          src="/main.jpg"
          width={120}
          height={200}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">
          Sanjay Tyre House
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <a href="/addItems"> Add New</a>
        </button>
        <button
          type="submit"
          className="flex mt-8 w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <a href="/update"> Update </a>
        </button>
        <button
          type="submit"
          className="flex mt-8 w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <a href="/items">All Items</a>
        </button>

        <p className="mt-10 text-center text-sm text-gray-400">
          Built with ❣️ by &nbsp;
          <a
            href="https://www.linkedin.com/in/shradesh-jain-147730265/"
            target="_blank"
            className="font-semibold leading-6 text-red-500 hover:text-red-400"
          >
            Shradhesh Jain
          </a>
        </p>
      </div>
    </div>
  );
}
