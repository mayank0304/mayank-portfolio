import Image from 'next/image'
import React from 'react'

const TechSkill = () => {
  return (
     <div className="mx-2 md:mx-10 space-y-8">
              {/* Programming Languages & Frameworks */}
              <div>
                <div className="text-xl mb-4 font-semibold">
                  Programming Languages
                </div>
                <div className="flex flex-wrap gap-8 mx-2 md:mx-4">
                  {[
                    { src: "/skills/Java.svg", name: "Java" },
                    { src: "/skills/Dart.svg", name: "Dart" },
                    { src: "/skills/JavaScript.svg", name: "JavaScript" },
                    { src: "/skills/TypeScript.svg", name: "TypeScript" },
                    { src: "/skills/Python.svg", name: "Python" },
                    { src: "/skills/HTML5.svg", name: "HTML" },
                    { src: "/skills/MongoDB.svg", name: "MongoDB" },
                    { src: "/skills/MySQL.svg", name: "MySQL" },
                    { src: "/skills/PostgresSQL.svg", name: "PostgreSQL" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="relative flex w-11 h-11 lg:w-15 lg:h-15 items-center justify-center group"
                    >
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="transition duration-300 group-hover:blur-sm"
                      />
                      <span className="absolute text-sm font-semibold text-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Databases & Cloud */}
              <div>
                <div className="text-xl mb-4 font-semibold">
                  Frameworks & Libraries
                </div>
                <div className="flex flex-wrap gap-8 mx-2 md:mx-4">
                  {[
                    { src: "/skills/Flutter.svg", name: "Flutter" },
                    { src: "/skills/React.svg", name: "React Native" },
                    { src: "/skills/Next.js.svg", name: "Next.Js" },
                    { src: "/skills/Spring.svg", name: "Spring" },
                    { src: "/skills/CodeIgniter.svg", name: "CodeIgniter" },
                    { src: "/skills/TailWind.svg", name: "Tailwind CSS" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="relative flex w-11 h-11 lg:w-15 lg:h-15 items-center justify-center group"
                    >
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="transition duration-300 group-hover:blur-sm"
                      />
                      <span className="absolute text-sm font-semibold text-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Developer Tools */}
              <div>
                <div className="text-xl mb-4 font-semibold">
                  Developer Tools & Platforms
                </div>
                <div className="flex flex-wrap gap-8 mx-2 md:mx-4">
                  {[
                    { src: "/skills/FireBase.svg", name: "Firebase" },
                    { src: "/skills/VSCode.svg", name: "VS Code" },
                    { src: "/skills/AndroidStudio.svg", name: "Andriod Studio" },
                    { src: "/skills/Docker.svg", name: "Docker" },
                    { src: "/skills/Git.svg", name: "Git" },
                    { src: "/skills/GitHub.svg", name: "Gtihub" },
                    { src: "/skills/Postman.svg", name: "Postman" },
                    { src: "/skills/Swagger.svg", name: "Swagger" },
                    { src: "/skills/NPM.svg", name: "NPM" },
                    { src: "/skills/Drupal.svg", name: "Drupal" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="relative flex w-11 h-11 lg:w-15 lg:h-15 items-center justify-center group"
                    >
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="transition duration-300 group-hover:blur-sm"
                      />
                      <span className="absolute text-[13px] text-center font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  )
}

export default TechSkill