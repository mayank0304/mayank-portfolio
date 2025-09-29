import React from "react";
import {
  Award,
  Users,
  Trophy,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { FlutterCert } from "../certificates/flutterCert";

const InterestsTab = () => {
  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Achievements</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-lg">
          A collection of my accomplishments, recognitions, and experiences that
          showcase my dedication to excellence in technology and leadership.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <Users size={24} className="text-[#E0FA51]" />
          </div>
          Event Coordination Leadership
        </h2>

        <div className="flex items-start gap-4 mx-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">
              Core Team Member & Event Coordinator
            </h3>
            <div className="flex items-center gap-2 mb-3 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">
                Causmic Club, GNDEC | August 2023 - Present
              </span>
            </div>
            <div className="space-y-3 mx-3 text-justify">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">APEX & ACME Events:</strong>{" "}
                Overall Coordinator of inter-school (APEX) and inter-college
                (ACME) events, managing budgets exceeding ₹3 lakhs.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Team Management:</strong>{" "}
                Directed and coordinated teams of 200+ volunteers and 30+ team
                heads across 10+ events with 1500+ participants, ensuring
                seamless event operations and timeline adherence.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                This experience has honed my leadership skills, project
                management abilities, and capacity to handle large-scale
                operations under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hackathon Achievements */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <Trophy size={24} className="text-[#E0FA51]" />
          </div>
          Hackathon Achievements
        </h2>

        <div className="flex items-start gap-4 mx-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">
              Top 10 Finalist - Hackspire 1.0
            </h3>
            <div className="flex items-center gap-2 mb-3 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">
                Thapar University
              </span>
            </div>
            <div className="space-y-3 mx-3 text-justify">
              <p className="text-gray-300 text-sm leading-relaxed">
                Selected among the top 10 teams out of 150+ participants for
                developing an innovative project using Spring Boot and AI-based
                features within the given time frame. This achievement
                demonstrates my ability to work under pressure and deliver
                high-quality solutions in competitive environments.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Certificates & Awards */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <Award size={24} className="text-[#E0FA51]" />
          </div>
          Certificates & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <div className="p-3 mb-3">
            <FlutterCert>
              <Image
                src="/certFlutter.png"
                width={460}
                height={260}
                alt="Skillstack"
                className="rounded-xl"
              />
            </FlutterCert>
            <div className="text-xl text-center mt-2 font-bold">
              App Dev with Flutter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsTab;
