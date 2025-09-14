import React from "react";

const AboutTab = () => {
  return (
    <div className="p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">About Me</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      <div className="mb-8 text-gray-300 leading-relaxed text-md text-justify space-y-4">
        <p>
          Every great story begins with curiosity. Mine started with a spark for
          technology that soon grew into a quest to create meaningful digital
          experiences. What began as experimenting with code has now evolved
          into building cross-platform applications, designing scalable systems,
          and exploring how technology can shape the way we live and connect.
        </p>

        <p>
          I&apos;m currently pursuing my B.Tech in Information Technology from
          Ludhiana, Punjab, and along the way, I’ve gained hands-on experience
          through internships and projects using Flutter, React Native, Next.js,
          Firebase, and databases. Each project has been more than just lines of
          code — it’s been about solving real problems, working in teams, and
          even coordinating large-scale college events where I learned how
          vision, collaboration, and persistence can turn ideas into reality.
        </p>

        <p>
          For me, technology isn’t just a career — it&apos;s the next chapter of a
          story I’m still writing, often across multiple projects at once.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f29]/50 p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
            <p className="text-gray-400 text-sm">
              Professional development of applications for Android and ios.
            </p>
          </div>

          <div className="bg-[#1a1f29]/50 p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
