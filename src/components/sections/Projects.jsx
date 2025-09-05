import { motion } from 'framer-motion';
import { projects } from '../../data/content';

export default function Projects({ selectedProject, onProjectSelect }) {
    return (
        <>
        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">주요 프로젝트</h2>
            
            {/* Project Cards */}
            <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
                <ProjectCard 
                key={index}
                {...project}
                index={index}
                onClick={() => onProjectSelect(project)}
                />
            ))}
            </div>
        </motion.div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
        <ProjectModal 
            project={selectedProject} 
            onClose={() => onProjectSelect(null)} 
        />
        )}
        </>
    )
}

function ProjectCard({ title, role, period, description, index, onClick }) {
    return (
      <motion.div 
        className="group relative border border-neutral-800 rounded-lg p-4 sm:p-6 hover:border-blue-500 transition-all cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
            <span className="text-neutral-500 text-sm sm:text-base">{period}</span>
          </div>
          <p className="text-neutral-400 font-medium mb-2 text-sm sm:text-base">{role}</p>
          <p className="text-neutral-300 text-sm sm:text-base">{description}</p>
        </div>
      </motion.div>
    )
}
  
function ProjectModal({ project, onClose }) {
    return (
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 overflow-y-auto py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-neutral-900 rounded-xl p-6 max-w-3xl w-full my-auto max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-400">{project.period}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
  
          <div className="space-y-8">
            {/* Role & Description */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">역할</h4>
              <p className="text-neutral-300">{project.role}</p>
            </div>
  
            {/* Project Description */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">프로젝트 개요</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {project.details.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
  
            {/* Key Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">주요 성과</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {project.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
  
            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Impact (if exists) */}
            {project.details.impact && (
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">프로젝트 영향</h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-300">
                  {project.details.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
  
          <div className="flex justify-end mt-8">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
}  