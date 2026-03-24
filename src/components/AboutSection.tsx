import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const tabs = [
  { id: "education", label: "Образование" },
  { id: "qualifications", label: "Квалификация" },
  { id: "achievements", label: "Достижения" },
  { id: "services", label: "Услуги" },
]

const education = [
  {
    icon: "GraduationCap",
    level: "Среднее специальное",
    title: "Специалист по физической культуре и спорту",
    description: "Базовое профессиональное образование в области физической культуры и спорта.",
  },
  {
    icon: "Brain",
    level: "Профессиональная переподготовка",
    title: "Психолог-консультант",
    description: "Освоение методов психологического консультирования и практической психологии.",
  },
  {
    icon: "Trophy",
    level: "Профессиональная переподготовка",
    title: "Спортивный психолог",
    description: "Специализация в области спортивной психологии, работа с профессиональными атлетами и командами.",
  },
  {
    icon: "BookOpen",
    level: "Профессиональная переподготовка",
    title: "Психологическое консультирование в области спорта",
    description: "Углублённая подготовка по консультированию спортсменов на всех уровнях подготовки.",
  },
]

const qualifications = [
  {
    icon: "Shield",
    title: "Работа с травматичным опытом (ПТСР)",
    description: "Специализированное повышение квалификации по работе с посттравматическим стрессовым расстройством у спортсменов.",
  },
  {
    icon: "Layers",
    title: "Метафорические ассоциативные карты (МАК)",
    description: "Применение проективных методик МАК в психологическом консультировании спортсменов.",
  },
  {
    icon: "MessageCircle",
    title: "Психологическое консультирование",
    description: "Повышение квалификации в области индивидуального и группового психологического консультирования.",
  },
  {
    icon: "Zap",
    title: "Провокативная и парадоксальная психотерапия",
    description: "Освоение нестандартных терапевтических методов для работы с сопротивлением и блоками у спортсменов.",
  },
]

const achievements = [
  {
    icon: "Medal",
    title: "Мастер спорта по дзюдо",
    description: "Высший спортивный разряд, личный опыт соревновательного спорта на профессиональном уровне.",
  },
  {
    icon: "Medal",
    title: "Мастер спорта по самбо",
    description: "Высший спортивный разряд в самбо — понимаю изнутри, что значит побеждать и проигрывать на ковре.",
  },
  {
    icon: "Calendar",
    title: "С 2021 года в практике",
    description: "Более 3 лет успешной работы со спортсменами, тренерами и командами по всей стране.",
  },
  {
    icon: "Users",
    title: "Командная работа",
    description: "Опыт работы с профессиональными командами: групповые тренинги, командная психология, сплочённость.",
  },
]

const services = [
  {
    icon: "User",
    title: "Индивидуальные консультации",
    description: "Личная работа со спортсменом: тревога соревнований, мотивация, восстановление после травм и поражений.",
  },
  {
    icon: "Users",
    title: "Работа с командами",
    description: "Психологическая подготовка команд, командообразование, работа с конфликтами и групповой динамикой.",
  },
  {
    icon: "Monitor",
    title: "Онлайн-курсы",
    description: "Записанные программы по ментальной устойчивости, управлению стрессом и психологии победы.",
  },
  {
    icon: "Star",
    title: "Тренинги и воркшопы",
    description: "Групповые интенсивы для спортсменов и тренеров: практические инструменты здесь и сейчас.",
  },
]

const contentMap: Record<string, typeof education> = {
  education,
  qualifications,
  achievements,
  services,
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("education")

  const currentContent = contentMap[activeTab]

  return (
    <section id="about" className="relative py-20 bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-4">
            ОБО МНЕ
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Спортивный психолог с собственным опытом большого спорта. Знаю, каково это — выходить на ковёр и побеждать.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm md:text-base font-semibold tracking-wide transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 border-white"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {currentContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon name={item.icon} size={22} className="text-white" fallback="Star" />
                  </div>
                  <div>
                    {"level" in item && (
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1">
                        {(item as { level: string }).level}
                      </span>
                    )}
                    <h3 className="text-white font-bold text-lg mb-2 leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}