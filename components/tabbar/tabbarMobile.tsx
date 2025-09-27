"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { ROUTES } from "./tabbarRoutes";
import Link from "next/link";
import clsx from "clsx";

const TabbarMobile = () => {
  const pathName = usePathname();

  const isRouteActive = (routePath: string) => {
    return pathName === routePath;
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-tabbarMobile/50 backdrop-blur-lg border border-white/10 p-1.5 px-7 pl-8 py-4 space-x-4 sm:space-x-8 rounded-t-3xl lg:hidden">
      {ROUTES.map((route, idx) => {
        const isActive = isRouteActive(route.path);

        return (
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
            {/* Replace with route.icon if available */}
            <span className="">{route.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default TabbarMobile;
