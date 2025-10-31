import { motion, useInView } from "framer-motion";
import { DollarSign, TrendingUp, Wallet, Shield, Calculator, FileText, Users, Target } from "lucide-react";
import { useRef } from "react";

const learningItems = [
  {
    icon: DollarSign,
    title: "Cómo obtener $100,000 sin intereses",
    description: "Descubre el sistema exacto para acceder a capital sin pagar intereses bancarios",
  },
  {
    icon: TrendingUp,
    title: "Estrategias para llegar a $1,000,000",
    description: "Método comprobado para escalar tu capital de forma acelerada y segura",
  },
  {
    icon: Wallet,
    title: "Maximiza beneficios con SUNAT",
    description: "Aprende a usar el sistema tributario a tu favor legalmente",
  },
  {
    icon: Shield,
    title: "Protección legal y financiera",
    description: "Todos los pasos para operar dentro del marco legal peruano",
  },
  {
    icon: Calculator,
    title: "Cálculos y planificación financiera",
    description: "Herramientas profesionales para proyectar tu crecimiento",
  },
  {
    icon: FileText,
    title: "Documentación y trámites",
    description: "Todo lo necesario para formalizar tus operaciones bancarias",
  },
  {
    icon: Users,
    title: "Networking con expertos",
    description: "Acceso a comunidad privada de emprendedores exitosos",
  },
  {
    icon: Target,
    title: "Plan de acción personalizado",
    description: "Estrategia adaptada a tu situación y objetivos específicos",
  }
];

export function LearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Luxury 3D Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Animated 3D Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${i * 10}%`}
                y1="0"
                x2={`${i * 10}%`}
                y2="100%"
                stroke="url(#goldGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={`${i * 10}%`}
                x2="100%"
                y2={`${i * 10}%`}
                stroke="url(#goldGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFF4E6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating 3D Coins */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              rotateY: [0, 360],
              rotateX: [0, 180],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div
              className="w-12 h-12 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                boxShadow: `
                  0 0 40px rgba(255, 215, 0, 0.6),
                  inset -4px -4px 12px rgba(0, 0, 0, 0.4),
                  inset 4px 4px 12px rgba(255, 255, 255, 0.3)
                `,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Premium 3D Title */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="text-center mb-16"
            style={{ perspective: "1500px" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 25%, #FFD700 50%, #DAA520 75%, #FFD700 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 15px 50px rgba(255, 215, 0, 0.5)",
                transformStyle: "preserve-3d",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ¿QUÉ APRENDERÁS EXACTAMENTE?
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un sistema completo y probado para transformar tu relación con el dinero y las instituciones financieras
            </p>
          </motion.div>

          {/* 3D Learning Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {learningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    delay: 0.1 * index, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -15,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                  }}
                  className="group relative p-8 rounded-2xl backdrop-blur-md overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.9) 100%)",
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                    boxShadow: `
                      0 20px 50px rgba(0, 0, 0, 0.8),
                      0 0 30px rgba(255, 215, 0, 0.1),
                      inset 0 2px 0 rgba(255, 255, 255, 0.1),
                      inset 0 -2px 10px rgba(0, 0, 0, 0.3)
                    `,
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Animated Gold Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, #FFD700, transparent 70%)",
                    }}
                  />

                  {/* 3D Icon Container */}
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                      boxShadow: `
                        0 10px 30px rgba(255, 215, 0, 0.5),
                        inset -5px -5px 15px rgba(0, 0, 0, 0.3),
                        inset 5px 5px 15px rgba(255, 255, 255, 0.3)
                      `,
                      transform: "translateZ(40px)",
                    }}
                    whileHover={{ 
                      rotateY: [0, 180, 360],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <h3 
                      className="text-2xl mb-4 group-hover:text-yellow-300 transition-colors"
                      style={{ 
                        fontWeight: 700,
                        color: "#D4AF37",
                        textShadow: "0 2px 10px rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* 3D Corner Accent */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle, #FFD700, transparent)",
                    }}
                  />

                  {/* Bottom Edge Shine */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
                      opacity: 0.3,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Premium 3D Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 1, type: "spring" }}
            className="text-center mt-20"
            style={{ perspective: "1500px" }}
          >
            <motion.div 
              className="inline-block p-10 rounded-3xl backdrop-blur-md relative"
              style={{
                background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                border: "3px solid rgba(255, 215, 0, 0.5)",
                boxShadow: `
                  0 30px 80px rgba(0, 0, 0, 0.9),
                  0 0 60px rgba(255, 215, 0, 0.4),
                  inset 0 2px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -10px 30px rgba(0, 0, 0, 0.5)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [0, 3, 0, -3, 0],
                rotateX: [0, -2, 0, 2, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
              }}
            >
              <p 
                className="text-3xl mb-4"
                style={{
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 50%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                + Acceso de por vida a todas las actualizaciones
              </p>
              <p className="text-xl text-gray-400">
                Este conocimiento vale más que cualquier inversión que hayas hecho
              </p>

              {/* 3D Depth Shadow */}
              <div
                className="absolute inset-0 rounded-3xl -z-10"
                style={{
                  background: "rgba(255, 215, 0, 0.1)",
                  transform: "translateZ(-30px) scale(0.95)",
                  filter: "blur(30px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
