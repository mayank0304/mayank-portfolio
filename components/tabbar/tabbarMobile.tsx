"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { ROUTES } from "./tabbarRoutes";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const TabbarMobile = () => {
  const pathName = usePathname();

  const isRouteActive = (routePath: string) => {
    return pathName === routePath;
  };
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-tabbarMobile/50 backdrop-blur-lg border border-white/10 p-1.5 px-7 pl-8 py-4 space-x-4 sm:space-x-8 rounded-t-3xl lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {ROUTES.map((route, idx) => {
        const isActive = isRouteActive(route.path);

        return (
          <motion.div
            key={route.path + idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
          >
            <Link
              key={route.path + idx}
              href={route.path}
              className={clsx(
                "flex items-center rounded-md text-sm sm:text-[18px] transition-all",
                {
                  "bg-primary/20 text-[#E0FA51]  font-semibold": isActive,
                  "text-white  hover:bg-muted": !isActive,
                }
              )}
            >
               <motion.span
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: -5 }}
              >
                {route.label}
              </motion.span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TabbarMobile;
