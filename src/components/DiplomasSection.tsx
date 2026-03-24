import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Diploma {
  id: number
  src: string
  title: string
}

const placeholderDiplomas: Diploma[] = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/7093ef13-bd85-4502-9443-d0b319641763.jpg",
    title: "Диплом о среднем профессиональном образовании. Педагог по физической культуре и спорту, 2015",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/1e040aed-7fc5-40d6-aff3-bdd0d8eea474.jpg",
    title: "Диплом о профессиональной переподготовке. Психолог-консультант, 2023",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/760a6efd-e6ec-4b59-b76a-e24bc9631b57.jpg",
    title: "Диплом о профессиональной переподготовке. Спортивный психолог, 2026",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/d9ee3048-1531-4bd2-8a1d-a6fb7ed1711f.jpg",
    title: "Диплом о профессиональной переподготовке. Психологическое консультирование в области спорта, 2024",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/ac1b43db-6e5f-421f-9c91-7f972e0ededf.jpg",
    title: "Удостоверение о повышении квалификации. Работа с травматичным опытом (ПТСР), 2023",
  },
  {
    id: 6,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/74965ba4-a9fd-47e7-855d-994736b4b923.jpg",
    title: "Удостоверение о повышении квалификации. Метафорические ассоциативные карты (МАК), 2022",
  },
  {
    id: 7,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/1d1ebec9-f9d1-445f-b07d-aad8e7d2b2c8.jpg",
    title: "Свидетельство. Провокативная и парадоксальная психотерапия, 2025",
  },
  {
    id: 8,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/c8c6bfa1-16d4-4984-b5a1-f5917714ca60.jpg",
    title: "Удостоверения Мастер спорта России по самбо и дзюдо",
  },
  {
    id: 9,
    src: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/0627a732-4947-4728-97b0-6627e13cb330.jpg",
    title: "Сертификат. Панельная дискуссия «Женщина и спорт: особенности тренировочного процесса», 2025",
  },
]

export default function DiplomasSection() {
  const [lightbox, setLightbox] = useState<Diploma | null>(null)

  return (
    <>
      <section id="diplomas" className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">ДОКУМЕНТЫ</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Дипломы, сертификаты и свидетельства о профессиональной подготовке
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {placeholderDiplomas.map((diploma, index) => (
              <motion.div
                key={diploma.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                onClick={() => diploma.src && setLightbox(diploma)}
                className={`group relative aspect-[3/4] border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-gray-400 hover:shadow-md ${diploma.src ? "cursor-zoom-in" : "cursor-default"}`}
              >
                {diploma.src ? (
                  <img
                    src={diploma.src}
                    alt={diploma.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
                      <Icon name="FileText" size={24} className="text-gray-400" fallback="FileText" />
                    </div>
                    <p className="text-xs text-gray-400 font-medium leading-snug">{diploma.title}</p>
                    <p className="text-xs text-gray-300">Фото будет добавлено</p>
                  </div>
                )}

                {/* Hover overlay for uploaded images */}
                {diploma.src && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fallback="ZoomIn" />
                  </div>
                )}

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold leading-snug">{diploma.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm mt-10"
          >
            Хотите ознакомиться с полным пакетом документов? Напишите мне — пришлю.
          </motion.p>
        </div>
      </section>

      {/* Psychodiagnostics Banner */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-70 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                  <Icon name="BarChart2" size={20} className="text-white" fallback="BarChart2" />
                </div>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Дополнительная услуга</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-wide text-white mb-4">
                ПСИХОДИАГНОСТИКА
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                В работе участвует специалист по психодиагностике — это позволяет получить точную, объективную картину психологического состояния и личности спортсмена или тренера.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Диагностика даёт глубокое понимание: сильные стороны, зоны роста, реакции на стресс и соревновательное поведение. Доступна отдельно для спортсменов, тренеров и родителей — без консультационного пакета.
              </p>
              <ul className="space-y-2 mb-8">
                {["Профессиональный инструментарий", "Развёрнутый письменный отчёт", "Разбор результатов с психологом", "Для спортсменов, тренеров и родителей"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon name="Check" size={15} className="text-white flex-shrink-0" fallback="Check" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/DM_sport_psy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                Узнать стоимость
                <Icon name="ArrowRight" size={18} className="text-gray-900" fallback="ArrowRight" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex-shrink-0 grid grid-cols-2 gap-4"
            >
              {[
                { icon: "Brain", label: "Личность" },
                { icon: "Activity", label: "Состояние" },
                { icon: "Target", label: "Мотивация" },
                { icon: "Shield", label: "Стрессоустойчивость" },
              ].map((item, i) => (
                <div key={i} className="w-32 h-32 border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-white" fallback="Star" />
                  <span className="text-white text-xs font-semibold text-center">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <Icon name="X" size={32} fallback="X" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/70 text-sm font-medium">{lightbox.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}