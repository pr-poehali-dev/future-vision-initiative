export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-white font-semibold mb-1">Монкина Дарья Алексеевна</p>
            <p className="text-sm">Самозанятый (плательщик налога на профессиональный доход)</p>
            <p className="text-sm mt-1">ИНН: 2453056644197</p>
          </div>
          <div>
            <p className="text-sm">
              <span className="text-gray-300">Телефон: </span>
              <a href="tel:+79135798927" className="hover:text-white transition-colors">
                +7 (913) 579-89-27
              </a>
            </p>
            <p className="text-sm mt-1">
              <span className="text-gray-300">Email: </span>
              <a href="mailto:monkina.dasha@mail.ru" className="hover:text-white transition-colors">
                monkina.dasha@mail.ru
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Монкина Дарья Алексеевна. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
