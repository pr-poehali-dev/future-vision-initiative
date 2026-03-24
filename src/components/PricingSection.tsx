import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Первичная консультация",
    price: "4 000 ₽",
    period: "разовая",
    description: "Знакомство, диагностика запроса, определение направления работы. Первый шаг к результату.",
    features: [
      "Разбор вашей ситуации",
      "Определение запроса",
      "Рекомендации по дальнейшей работе",
      "50–60 минут онлайн или очно",
    ],
    icon: "User",
    highlight: false,
    badge: null,
  },
  {
    title: "Пакет 5 консультаций",
    price: "19 000 ₽",
    period: "пакет",
    priceNote: "3 800 ₽ / сессия",
    description: "Минимальный пакет для устойчивых изменений. Работаю только пакетами — так виден реальный результат.",
    features: [
      "5 индивидуальных сессий",
      "Персональный план работы",
      "Практические инструменты",
      "Поддержка между встречами",
    ],
    icon: "Package",
    highlight: false,
    badge: "Популярный старт",
  },
  {
    title: "Пакет 10 консультаций",
    price: "36 000 ₽",
    period: "пакет",
    priceNote: "3 600 ₽ / сессия",
    description: "Глубокая трансформация. Полный цикл работы с запросом, устойчивый результат и закреплённые навыки.",
    features: [
      "10 индивидуальных сессий",
      "Работа с корневыми причинами",
      "Набор личных инструментов",
      "Разбор соревновательных кейсов",
    ],
    icon: "TrendingUp",
    highlight: true,
    badge: "Максимальный эффект",
  },
  {
    title: "Сопровождение команды",
    price: "60 000 ₽",
    period: "в месяц",
    description: "Комплексная психологическая работа с командой: от диагностики до выступлений.",
    features: [
      "Психодиагностика спортсменов",
      "Индивидуальные консультации",
      "Проведение тренингов",
      "Измерение психофункционального состояния",
      "Работа с тренерами над целями",
      "Полная погружённость в коллектив",
    ],
    icon: "Users",
    highlight: false,
    badge: "Для команд",
  },
  {
    title: "Тренинг",
    price: "8 000 ₽",
    period: "за тренинг",
    description: "Живой групповой тренинг с практическими техниками ментальной подготовки. Применимо сразу.",
    features: [
      "Практические техники",
      "Групповая динамика",
      "Работа с конкретным запросом",
      "Результат — в тот же день",
    ],
    icon: "Zap",
    highlight: false,
    badge: null,
  },
  {
    title: "Групповая работа онлайн",
    price: "По запросу",
    period: "5 встреч",
    description: "Группа спортсменов собирается онлайн и на протяжении 5 встреч прорабатывает общий запрос.",
    features: [
      "5 онлайн-встреч",
      "Работа под конкретный запрос группы",
      "Взаимодействие участников",
      "Живая групповая динамика",
    ],
    icon: "Monitor",
    highlight: false,
    badge: "Онлайн-формат",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-gray-50">
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">УСЛУГИ И ЦЕНЫ</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Работаю только пакетами — это даёт реальный, измеримый результат, а не разовое облегчение.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative flex flex-col border p-8 transition-all duration-300 group hover:-translate-y-1 ${
                service.highlight
                  ? "bg-gray-900 border-gray-900 text-white shadow-2xl"
                  : "bg-white border-gray-200 text-gray-900 hover:border-gray-900 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div
                  className={`absolute -top-3 left-6 text-xs font-bold tracking-widest px-3 py-1 ${
                    service.highlight ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                  }`}
                >
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center mb-6 ${
                  service.highlight ? "bg-white/15" : "bg-gray-100 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
                }`}
              >
                <Icon
                  name={service.icon as Parameters<typeof Icon>[0]["name"]}
                  size={22}
                  className={service.highlight ? "text-white" : "text-gray-900 group-hover:text-white transition-colors duration-300"}
                  fallback="Star"
                />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-black tracking-wide mb-2 ${service.highlight ? "text-white" : "text-gray-900"}`}>
                {service.title}
              </h3>

              {/* Price */}
              <div className="mb-1">
                <span className={`text-3xl md:text-4xl font-black ${service.highlight ? "text-white" : "text-gray-900"}`}>
                  {service.price}
                </span>
                <span className={`text-sm ml-2 font-medium ${service.highlight ? "text-gray-300" : "text-gray-400"}`}>
                  {service.period}
                </span>
              </div>
              {service.priceNote && (
                <div className={`text-sm font-semibold mb-4 ${service.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {service.priceNote}
                </div>
              )}

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${service.highlight ? "text-gray-300" : "text-gray-500"}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${service.highlight ? "text-white" : "text-gray-900"}`}
                      fallback="Check"
                    />
                    <span className={`text-sm ${service.highlight ? "text-gray-200" : "text-gray-600"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          Остались вопросы по формату или стоимости? Напишите — обсудим вашу ситуацию индивидуально.
        </motion.p>
      </div>
    </section>
  )
}
