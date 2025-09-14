"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { ROUTES } from "./tabbarRoutes";
import Link from "next/link";
import clsx from "clsx";

const Tabbar = () => {
  const pathName = usePathname();

  const isRouteActive = (routePath: string) => {
    return pathName === routePath;
  };

  return (
    <>
      <div className="bg-tabbarMobile/90 hidden md:flex flex-row max-w-lg rounded-bl-2xl rounded-tr-2xl p-3 px-10 absolute top-0 right-0">
        {ROUTES.map((route, idx) => {
          const isActive = isRouteActive(route.path);

          return (
            <Link
              key={route.path + idx}
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
              {/* Replace with route.icon if available */}
              <span className="">{route.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Tabbar;
