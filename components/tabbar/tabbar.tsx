"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { ROUTES } from "./tabbarRoutes";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const Tabbar = () => {
  const pathName = usePathname();

  const isRouteActive = (routePath: string) => {
    return pathName === routePath;
  };

  return (
    <>
      <motion.div 
        className="hidden lg:flex flex-row items-center p-1.5 px-7 pl-8 space-x-4 bg-tabbarMobile/20 backdrop-blur-lg border border-white/10 rounded-bl-2xl rounded-tr-2xl absolute top-0 right-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {ROUTES.map((route, idx) => {
          const isActive = isRouteActive(route.path);

          return (
            <motion.div
              key={route.path + idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <Link
                href={route.path}
                className={clsx(
                  "flex items-center rounded-md px-3 py-2 text-lg transition-all",
                  {
                    "bg-primary/20 text-[#E0FA51] font-semibold":
                      isActive,
                    "text-white hover:bg-muted": !isActive,
                  }
                )}
              >
                <motion.span 
                  className=""
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {route.label}
                </motion.span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Tabbar;
