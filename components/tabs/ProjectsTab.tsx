"use client";

import React from "react";
import Image from "next/image";
import { SkillstackProject } from "../projectDialogs/skillstack";
import { SpocoProject } from "../projectDialogs/spoco";
import { AchieveProject } from "../projectDialogs/achieve";
import { InventoryProject } from "../projectDialogs/inventory";
import Intern from "../projectDialogs/intern";
import { motion } from "framer-motion";

const ProjectsTab = () => {

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-4 text-[#E0FA51]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Projects
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-[#E0FA51] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="p-3 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          whileHover={{ scale: 1.01, y: -5 }}
        >
          <SkillstackProject>
            <Image
              src="/projects/skillstack.png"
              width={460}
              height={260}
              alt="Skillstack"
              className="rounded-xl"
            />
          </SkillstackProject>
          <div className="text-xl text-center font-bold">
            Skillstack AI
          </div>
        </motion.div>
        
        <motion.div 
          className="p-3 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          whileHover={{ scale: 1.01, y: -5 }}
        >
          <InventoryProject>
            <Image
              src="/projects/inventory.png"
              width={460}
              height={260}
              alt="Inventory"
              className="rounded-xl"
            />
          </InventoryProject>
          <div className="text-xl text-center  font-bold">
            Inventory
          </div>
        </motion.div>
        
        <motion.div 
          className="p-3 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          whileHover={{ scale: 1.01, y: -5 }}
        >
          <SpocoProject>
          <Image
            src="/projects/spoco.png"
            width={460}
            height={260}
            alt="Skillstack"
            className="rounded-xl"
          />
          </SpocoProject>
          <div className="text-xl text-center  font-bold">Spoco</div>
        </motion.div>
        
        <motion.div 
          className="p-3 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          whileHover={{ scale: 1.01, y: -5 }}
        >
          <AchieveProject>
            <Image
            src="/projects/achieve.png"
            width={460}
            height={260}
            alt="Skillstack"
            className="rounded-xl"
          />
          </AchieveProject>
          <div className="text-xl text-center font-bold">Achieve IT</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Intern />
      </motion.div>


      {/* Call to Action */}
      {/* <div className="mt-12 text-center">
        <div className="bg-[#1a1f29]/50 p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Interested in collaborating?
          </h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <button className="bg-[#E0FA51] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E0FA51]/80 transition-colors inline-flex items-center gap-2">
            <ExternalLink size={18} />
            Get In Touch
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsTab;
