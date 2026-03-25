import HeroSection from "@/components/HeroSection"
import FooterSection from "@/components/FooterSection"
import AboutSection from "@/components/AboutSection"
import DiplomasSection from "@/components/DiplomasSection"
import PricingSection from "@/components/PricingSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Я прошла путь спортсмена, 8 лет работала тренером — и только потом стала психологом. Это даёт мне то, чего нет у большинства специалистов: я понимаю каждого участника спортивного мира изнутри. Знаю давление старта и страх проигрыша. Знаю, каково вести команду и нести ответственность за чужой результат. Видела, как складываются отношения тренера с атлетом, как родители влияют на ребёнка-спортсмена. Мой подход работает для всех — для атлета, тренера и родителя. Только практические инструменты, которые дают результат прямо на ковре."

  const timelineEntries = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
      alt: "Борец на соревнованиях",
      title: "Работа с командами",
      description:
        "С 2021 года провожу психологическую подготовку профессиональных команд. Групповые тренинги, работа с командной динамикой, управление конфликтами и формирование единого духа — всё это даёт реальный результат на соревнованиях.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80",
      alt: "Спортивный психолог на тренировке",
      title: "Индивидуальные сессии",
      description:
        "Работаю со спортсменами и тренерами: тревога соревнований, выгорание, восстановление после травм, профессиональные кризисы. Тренеры приходят, чтобы прокачать управленческие навыки, выстроить контакт с командой и не сгореть в профессии. Каждый получает персональный план с конкретными инструментами и измеримым результатом.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
      alt: "Онлайн тренинг и обучение",
      title: "Онлайн-курсы и тренинги",
      description:
        "Записанные курсы по ментальной устойчивости и управлению стрессом доступны в любое время. Живые воркшопы для групп — интенсивный формат с практическими техниками, которые можно применить уже на следующей тренировке.",
      layout: "left" as const,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      alt: "Тренер работает со спортсменом",
      title: "Работа с тренерами и родителями",
      description:
        "8 лет я была тренером — поэтому понимаю выгорание, ответственность за чужой результат и сложность выстраивания контакта с атлетом. Также работаю с родителями детей-спортсменов: помогаю поддерживать, а не давить, быть рядом без лишней тревоги.",
      layout: "right" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section with Tabs */}
      <AboutSection />

      {/* Diplomas + Psychodiagnostics */}
      <DiplomasSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">МОЙ ПОДХОД</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">КАК Я РАБОТАЮ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Три направления работы — для атлетов любого уровня: от новичков до профессионалов.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">СПОРТСМЕНЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные результаты спортсменов, с которыми я работала с 2021 года.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>

      <FooterSection />
    </div>
  )
}