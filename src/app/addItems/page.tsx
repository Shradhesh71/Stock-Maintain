"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

export default function addItem() {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({
    itemName: "",
    number: "",
  });

  const addItems = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/item/addItems", user);
      console.log("Add Item success", response.data);
      toast.success("Add Item success");
      // router.push("/addItems");
    } catch (error: any) {
      console.log("Add Item failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.itemName.length > 0 && user.number.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-20 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt="Your Company"
        /> */}
        <Image
          className="mx-auto  w-auto"
          src="/main.jpg"
          width={120}
          height={200}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">
          {loading ? "Processing.." : "Sanjay Tyre House"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="/" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-balance"
          >
            Item Name
          </label>
          <div className="mt-2">
            <input
              id="itemName"
              value={user.itemName}
              onChange={(e) => setUser({ ...user, itemName: e.target.value })}
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-black"
            >
              Quantity
            </label>
            <div className="text-sm">
              <a
                href="/"
                className="font-semibold text-red-500 hover:text-red-400"
              >
                Quantity
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="Number"
              value={user.number}
              onChange={(e) => setUser({ ...user, number: e.target.value })}
              type="number"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={addItems}
            className="flex mt-7 w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Add Item
          </button>
        </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Built with ❣️ by &nbsp;
          <a
            href="#"
            className="font-semibold leading-6 text-red-500 hover:text-red-400"
          >
            Shradhesh Jain
          </a>
        </p>
      </div>
    </div>
  );
}
