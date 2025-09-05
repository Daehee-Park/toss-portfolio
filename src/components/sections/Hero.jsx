import { motion } from 'framer-motion';
import mePhoto from '../../assets/me_photo2.jpg';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="flex flex-col mb-6 sm:mb-8 lg:mb-0 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting & Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-2xl sm:text-3xl text-neutral-400 mb-4">
                안녕하세요, 저는
              </h1>
              
              {/* Main Description */}
              <div className="space-y-2 sm:space-y-4 mb-6">
                {['구조해석과', '디지털 혁신을 통한', '제품 개발 전문가'].map((text, index) => (
                  <motion.p 
                    key={index}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                박대희
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  입니다
                </span>
              </motion.h2>
            </motion.div>

            <motion.h3 
              className="text-lg sm:text-xl lg:text-2xl text-neutral-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              LG Electronics TV CAE Team | DX 확산 리더
            </motion.h3>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-all text-lg"
              >
                프로젝트 보기
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3 border border-neutral-700 rounded-full hover:border-blue-500 transition-all text-lg"
              >
                연락하기
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[280px] lg:max-w-sm mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur-lg" />
              <div className="absolute -inset-4 bg-neutral-900 rounded-xl" />
              
              {/* Image Container */}
              <motion.div
                className="relative rounded-xl overflow-hidden aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={mePhoto}
                  alt="박대희"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]" />
      </motion.div>
    </section>
  );
} 