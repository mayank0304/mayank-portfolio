import React from 'react';
import { Music, Camera, Gamepad2, Book, Plane, Code2, Coffee, Mountain, Headphones, Palette } from 'lucide-react';

const InterestsTab = () => {
  const interests = [
    {
      category: "Technology & Learning",
      icon: <Code2 size={20} className="text-[#E0FA51]" />,
      items: [
        {
          name: "Open Source Contribution",
          description: "Contributing to open-source projects and learning from the community",
          emoji: "🔧"
        },
        {
          name: "AI & Machine Learning",
          description: "Exploring the latest trends in AI and building intelligent applications",
          emoji: "🤖"
        },
        {
          name: "Web3 & Blockchain",
          description: "Understanding decentralized technologies and their applications",
          emoji: "⛓️"
        },
        {
          name: "Tech Podcasts",
          description: "Staying updated with industry news and best practices",
          emoji: "🎧"
        }
      ]
    },
    {
      category: "Creative & Artistic",
      icon: <Palette size={20} className="text-[#E0FA51]" />,
      items: [
        {
          name: "UI/UX Design",
          description: "Creating beautiful and intuitive user experiences",
          emoji: "🎨"
        },
        {
          name: "Photography",
          description: "Capturing moments and exploring creative compositions",
          emoji: "📸"
        },
        {
          name: "Digital Art",
          description: "Experimenting with digital illustration and graphic design",
          emoji: "🖼️"
        },
        {
          name: "Video Editing",
          description: "Creating engaging content and storytelling through video",
          emoji: "🎬"
        }
      ]
    },
    {
      category: "Entertainment & Media",
      icon: <Headphones size={20} className="text-[#E0FA51]" />,
      items: [
        {
          name: "Music Production",
          description: "Creating beats and experimenting with different genres",
          emoji: "🎵"
        },
        {
          name: "Gaming",
          description: "Exploring virtual worlds and competitive gaming",
          emoji: "🎮"
        },
        {
          name: "Movies & Series",
          description: "Analyzing storytelling techniques and cinematography",
          emoji: "🎭"
        },
        {
          name: "Tech Reviews",
          description: "Following latest gadgets and technology reviews",
          emoji: "📱"
        }
      ]
    },
    {
      category: "Adventure & Travel",
      icon: <Mountain size={20} className="text-[#E0FA51]" />,
      items: [
        {
          name: "Mountain Trekking",
          description: "Exploring nature trails and challenging myself physically",
          emoji: "⛰️"
        },
        {
          name: "Cultural Exploration",
          description: "Learning about different cultures and traditions",
          emoji: "🌍"
        },
        {
          name: "Food Adventures",
          description: "Trying local cuisines and exotic flavors",
          emoji: "🍜"
        },
        {
          name: "Road Trips",
          description: "Discovering new places and hidden gems",
          emoji: "🚗"
        }
      ]
    },
    {
      category: "Health & Lifestyle",
      icon: <Coffee size={20} className="text-[#E0FA51]" />,
      items: [
        {
          name: "Fitness & Workout",
          description: "Maintaining physical health through regular exercise",
          emoji: "💪"
        },
        {
          name: "Meditation",
          description: "Practicing mindfulness and mental well-being",
          emoji: "🧘"
        },
        {
          name: "Coffee Culture",
          description: "Exploring different coffee beans and brewing methods",
          emoji: "☕"
        },
        {
          name: "Reading",
          description: "Personal development, tech books, and fiction",
          emoji: "📚"
        }
      ]
    }
  ];

  const funFacts = [
    "I've completed 3 marathons and counting! 🏃‍♂️",
    "My coffee consumption directly correlates with code quality ☕",
    "I can solve a Rubik's cube in under 2 minutes 🧩",
    "I've contributed to 15+ open source projects 🌟",
    "I collect vintage tech gadgets and keyboards ⌨️",
    "I speak 4 languages: English, Hindi, Punjabi, and JavaScript 😄"
  ];

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Interests & Hobbies</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-lg">
          Beyond coding, I'm passionate about exploring new technologies, creative pursuits, and adventures.
          Here's what keeps me inspired and motivated outside of work.
        </p>
      </div>

      {/* Interests Categories */}
      <div className="space-y-8 mb-12">
        {interests.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-[#1a1f29]/30 rounded-xl border border-white/5 overflow-hidden">
            {/* Category Header */}
            <div className="bg-[#1a1f29]/50 p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{category.category}</h2>
              </div>
            </div>

            {/* Category Items */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-[#0D1117]/50 p-4 rounded-lg border border-white/5 hover:border-[#E0FA51]/20 transition-all duration-200 hover:bg-[#0D1117]/70"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fun Facts Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Fun Facts About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-[#1a1f29]/50 p-4 rounded-lg border border-white/10 hover:border-[#E0FA51]/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E0FA51] rounded-full"></div>
                <p className="text-gray-300 text-sm">{fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Focus */}
      <div className="bg-gradient-to-r from-[#E0FA51]/10 to-[#E0FA51]/5 rounded-xl border border-[#E0FA51]/20 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Currently Exploring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Learning Rust</h3>
              <p className="text-gray-400 text-sm">Diving deep into systems programming</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Street Photography</h3>
              <p className="text-gray-400 text-sm">Capturing urban life and stories</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏔️</span>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Himalayan Trek</h3>
              <p className="text-gray-400 text-sm">Planning a challenging mountain expedition</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎸</span>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Guitar Lessons</h3>
              <p className="text-gray-400 text-sm">Learning to play acoustic guitar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsTab;
