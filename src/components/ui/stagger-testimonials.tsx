import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Testimonials from athletes working with a sports psychologist
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "До работы с психологом я срывался на каждом важном старте. После трёх месяцев сессий взял золото на чемпионате региона. Впервые в жизни вышел на ковёр спокойно.",
    by: "Артём К., дзюдо, КМС",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ArtemK&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Работала с командой после серьёзного кризиса — конфликты, потеря мотивации, поражения. За два месяца групповой работы всё изменилось. Команда снова живая.",
    by: "Виктория С., тренер по самбо",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VictoriaS&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Я три года не могла выступать из-за травмы колена — не физически, а психологически. Работа с МАК-картами и сессии помогли мне вернуться и снова полюбить спорт.",
    by: "Алина Р., лёгкая атлетика",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlinaR&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Тренинг для всей команды перед сезоном — это было лучшее решение. Ребята стали доверять друг другу, исчезла внутренняя конкуренция. Результат виден в турнирной таблице.",
    by: "Сергей М., старший тренер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyM&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Онлайн-курс по управлению предстартовой тревогой — сжато, конкретно, без воды. Применил техники на следующем же соревновании. Личный рекорд через месяц.",
    by: "Иван Л., триатлон",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IvanL&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Я пришла как скептик — не верила в психологию. Но когда специалист сам мастер спорта, разговор совсем другой. Она понимает, о чём говорит. Это чувствуется.",
    by: "Юлия Д., борьба",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JuliaD&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "После работы с ПТСР — а у меня была серьёзная травма на соревнованиях — я снова начал тренироваться. Думал, что карьера закончена. Оказалось, нет.",
    by: "Максим В., рукопашный бой",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MaximV&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Провокативный подход в сессии поначалу шокировал, но именно это и сработало. Я наконец увидел свои паттерны и смог их изменить. Спасибо за честность.",
    by: "Роман Ш., бокс",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanSh&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Работаем уже полгода. За это время я стал другим тренером — научился видеть психологическое состояние своих спортсменов и правильно с ними говорить.",
    by: "Дмитрий К., тренер по дзюдо",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitriyK&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Никогда не думала, что психолог поможет с выгоранием. Думала, просто отдохну и пройдёт. Прошло три года без результатов. Месяц работы — и я снова хочу на тренировки.",
    by: "Ксения Н., плавание",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KseniaN&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Работа с МАК-картами казалась мне чем-то несерьёзным. Но именно через эти карты я нашёл ответ, который искал два года. Иногда нужен нестандартный подход.",
    by: "Павел О., лыжные гонки",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PavelO&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Рекомендую всем спортсменам — не ждите кризиса, начинайте профилактическую работу. Я начал до чемпионата мира, и это был лучший старт в моей карьере.",
    by: "Никита Б., самбо, МС",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NikitaB&backgroundColor=059669&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}