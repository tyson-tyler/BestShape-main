"use client";
import React from "react";
import { motion } from "framer-motion";

const PricingCard = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 justify-center pb-9">
      {/* Basic Plan */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" bg-white  dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Basic Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">For Individuals</p>
        <div className="my-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            $9
          </span>
          <span className="text-gray-600 dark:text-gray-400"> / month</span>
        </div>
        <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
          <li>✔ Limited Access</li>
          <li>✔ Basic Analytics</li>
          <li>✔ Shared Features</li>
          <li>✔ Email Support</li>
        </ul>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </button>
      </motion.div>

      {/* Pro Plan */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-[367px] bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Pro Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Best for Professionals
        </p>
        <div className="my-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            $29
          </span>
          <span className="text-gray-600 dark:text-gray-400"> / month</span>
        </div>
        <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
          <li>✔ Unlimited Access</li>
          <li>✔ Advanced Analytics</li>
          <li>✔ 24/7 Support</li>
          <li>✔ Customizable Features</li>
        </ul>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </button>
      </motion.div>

      {/* Family Plan */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Family Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          For Families & Teams
        </p>
        <div className="my-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            $49
          </span>
          <span className="text-gray-600 dark:text-gray-400"> / month</span>
        </div>
        <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
          <li>✔ Multiple Users</li>
          <li>✔ Priority Support</li>
          <li>✔ Shared Features</li>
          <li>✔ Family Dashboard</li>
        </ul>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default PricingCard;
