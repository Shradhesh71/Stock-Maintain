"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function addItem() {
  const router = useRouter();
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // const Allitems = async () =>{
  //   const res = await axios.get("/api/item/items");
  //   // console.log("fdf",res.data.data[0].createdAt);
  // }
  // Allitems();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/item/items");
        setItems(res.data.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto">
        <div className="min-w-full py-2 align-middle inline-block">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-500">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    Item Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                </tr>
              </thead>
              {loading ? <h1 className="px-6 py-4 whitespace-nowrap text-lm text-black text-center">Processing..</h1>:
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-red-100" : "bg-red-200"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {item.itemName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {item.number}
                    </td>
                  </tr>
                ))}
              </tbody>
}
            </table>
          </div>
        </div>
        <button
          type="submit"
          className="flex mt-8 w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <a href="/">Main Page</a>
        </button>
      </div>
    </div>
  );
}
