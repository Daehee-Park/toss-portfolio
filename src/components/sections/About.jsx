import { motion } from 'framer-motion';
import { careerHistory, technicalExpertise, certificates, education } from '../../data/content';

export default function About() {
    return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">About Me</h2>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Personal Info
              </h3>
              <div className="space-y-4 text-lg">
                <p className="text-neutral-300">Birth: 1994</p>
                <p className="text-neutral-300">Education: {education.university} {education.degree} ({education.year})</p>
              </div>
            </motion.div>

            {/* Career Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Career
              </h3>
              <div className="space-y-6">
                {careerHistory.map((career, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l border-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
                    <h4 className="text-lg font-medium text-neutral-200">{career.role}</h4>
                    <p className="text-neutral-400 mb-1">{career.period}</p>
                    <p className="text-neutral-300">{career.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technical Expertise */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technicalExpertise).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  className="bg-neutral-900 rounded-xl p-6 border border-neutral-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">{category}</h4>
                  <div className="space-y-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-neutral-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-1">
                    <div className="w-12 h-12 mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-blue-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-neutral-200">
                      {cert.name}
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-800">
                    <p className="text-neutral-500 text-sm">
                      취득일: {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
}