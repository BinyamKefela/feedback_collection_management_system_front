"use client";
import React from "react";
import { IdCard, Smartphone, CreditCard, Building2, Grid } from "lucide-react";
import Link from "next/link";
import { link } from "fs";

const cat = [
  { title: "Customer Service", icon: <IdCard className="w-10 h-10 text-pink-600"/>,link:"/customerservice" },
  { title: "Mobile Banking", icon: <Smartphone className="w-10 h-10 text-pink-600"/>,link:"/mobilebanking"  },
  { title: "Card Banking", icon: <CreditCard className="w-10 h-10 text-pink-600" />,link:"/cardbanking"  },
  { title: "Branch Services", icon: <Building2 className="w-10 h-10 text-pink-600" />,link:"/branchservice"  },
  { title: "Others", icon: <Grid className="w-10 h-10 text-pink-600" />,link:"/others"},
];

const Categories = () => {
  return (
    <section className="py-16 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-10">Select Your Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-45 w-full max-w-6xl justify-items-center">
        {cat.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-8 h-42 w-52 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-pink-50"
          >
            {cat.icon}
            <p className="mt-4 font-medium text-lg">{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
