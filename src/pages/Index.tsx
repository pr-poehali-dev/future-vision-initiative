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
    "Я прошла путь спортсмена — от первых тренировок до сборной России. На этом пути были серьёзные травмы и долгая реабилитация. Я знаю изнутри, насколько спорт бывает жестоким — и как не сломаться, когда всё рушится. Потом 8 лет работала тренером, а затем стала психологом. Этот опыт даёт мне то, чего нет у большинства специалистов: я понимаю, что значит бороться с болью, терять мотивацию и снова подниматься. Знаю давление старта и страх проигрыша. Знаю, каково нести ответственность за чужой результат. Моя задача — сделать ваш путь в спорте легче: чтобы вы добивались результата, не теряли мотивацию и не платили за победы своим здоровьем. Мой подход работает для всех — для атлета, тренера и родителя. Только практические инструменты, которые дают результат прямо на ковре."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/04bc9a56-108c-45f8-aa30-7faa5acaab59.jpg",
      alt: "Победа на соревнованиях по самбо",
      title: "Работа с командами",
      description:
        "С 2021 года провожу психологическую подготовку профессиональных команд. Групповые тренинги, работа с командной динамикой, управление конфликтами и формирование единого духа — всё это даёт реальный результат на соревнованиях.",
      layout: "left" as const,
      objectPosition: "top center",
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/c55b894b-25dd-4ff7-adb2-42d2ac25b9f9.jpg",
      alt: "Команда дзюдо на тренировке",
      title: "Индивидуальные сессии",
      description:
        "Работаю со спортсменами и тренерами: тревога соревнований, выгорание, восстановление после травм, профессиональные кризисы. Тренеры приходят, чтобы прокачать управленческие навыки, выстроить контакт с командой и не сгореть в профессии. Каждый получает персональный план с конкретными инструментами и измеримым результатом.",
      layout: "right" as const,
      objectPosition: "center center",
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/22462808-fc59-4fe3-8793-6e0dd632a442.jpg",
      alt: "Боец MMA на соревнованиях ACA",
      title: "Онлайн-курсы и тренинги",
      description:
        "Записанные курсы по ментальной устойчивости и управлению стрессом доступны в любое время. Живые воркшопы для групп — интенсивный формат с практическими техниками, которые можно применить уже на следующей тренировке.",
      layout: "left" as const,
      objectPosition: "top center",
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/projects/20d8378d-ee6b-44e0-9ecb-e107cfa44d02/bucket/1af4d191-518e-4777-97ce-5338e8598ff3.jpg",
      alt: "Команда дзюдоистов в зале",
      title: "Работа с тренерами и родителями",
      description:
        "8 лет я была тренером — поэтому понимаю выгорание, ответственность за чужой результат и сложность выстраивания контакта с атлетом. Также работаю с родителями детей-спортсменов: помогаю поддерживать, а не давить, быть рядом без лишней тревоги.",
      layout: "right" as const,
      objectPosition: "top center",
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