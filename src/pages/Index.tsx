import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const agents = [
    {
      image: "https://cdn.poehali.dev/files/СС.jpg",
      title: "AI-Юрисконсульт «Семён Семёныч»",
      features: [
        "Анализ документов и договоров",
        "Доступ к судебной базе данных",
        "Поиск релевантных прецедентов",
      ],
      benefits: [
        { icon: "Clock", text: "Автоматизируйте рутину - освободите время для важных дел" },
        { icon: "Lightbulb", text: "Исключите ошибки - минимизируйте юридические риски" },
        { icon: "DollarSign", text: "Сократите расходы на юридическое сопровождение на 70%" },
        { icon: "Rocket", text: "Увеличьте эффективность работы в 10 раз" },
      ],
      result: "Сокращает время на рутинные задачи в 10 раз",
      link: "https://clck.ru/3QnM5Z",
    },
    {
      image: "https://cdn.poehali.dev/files/Михалыч.png",
      title: "AI-Автомеханик «Михалыч»",
      features: [
        "Диагностика неисправностей",
        "Расчет стоимости ремонта",
        "Поиск запчастей",
      ],
      benefits: [
        { icon: "Moon", text: "Ночные заявки: клиент пишет ночью, а вы спите. Михалыч ответил за 60 секунд" },
        { icon: "TrendingDown", text: "Дорогие запчасти: берете цену у одного поставщика, не знаете, что есть цена дешевле на 20-30%" },
        { icon: "AlertCircle", text: "Перегрузка мастеров: мастер ремонтирует и одновременно отвечает на консультации" },
      ],
      result: "Профессиональная помощь онлайн 24/7",
      link: "https://clck.ru/3QnnYQ",
    },
  ];

  const results = [
    {
      title: "✅ Строительный бизнес: смета за 5 минут (было 3 дня)",
      before: "3 дня на смету",
      after: "5 минут",
      icon: "Building2",
    },
    {
      title: "Fashion-retail",
      before: "Ручной анализ конкурентов",
      after: "Автоматический парсинг",
      icon: "TrendingUp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8">
            <img 
              src="https://cdn.poehali.dev/files/логотип.png" 
              alt="AI Скорая помощь"
              className="w-48 md:w-56 mx-auto animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            AI-Агенты для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto drop-shadow-md">
            Привет! Меня зовут <span className="font-semibold text-yellow-300">Юля</span>, наша команда разрабатывает и запускает 
            AI-агентов любого уровня
          </p>
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-white">
            <Icon name="Zap" className="text-yellow-300" size={28} />
            <p>Как <span className="font-semibold">Скорая помощь</span> — быстро реагируем на ваш запрос</p>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            🎁 Пройди тест-драйв наших агентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {agents.map((agent, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-400 bg-gradient-to-br from-white to-purple-50 flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="mb-6 flex justify-center">
                    <img 
                      src={agent.image} 
                      alt={agent.title}
                      className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {agent.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {agent.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <Icon name="CheckCircle2" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Почему важен для бизнеса:</h4>
                    <ul className="space-y-3">
                      {agent.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <Icon name={benefit.icon} className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                          <span>{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-cyan-100 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-gray-800">
                      <Icon name="Sparkles" className="inline mr-2 text-purple-600" size={18} />
                      {agent.result}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <a href={agent.link}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-semibold py-6 text-lg group">
                        Попробовать бесплатно
                        <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Наши результаты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-2xl border-2 border-purple-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-xl">
                    <Icon name={result.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {result.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-red-500" size={20} />
                    <span className="text-gray-600 line-through">{result.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" className="text-green-500" size={20} />
                    <span className="text-2xl font-bold text-green-600">{result.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы закрыть боли вашего бизнеса?</h2>
          <p className="text-xl mb-8 opacity-90">
            Заинтересовало? Давайте обсудим ваш проект! 🤗
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-2xl font-bold mb-4">Юля</p>
              <div className="space-y-4">
                <a 
                  href="https://t.me/Tyazhelova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-cyan-600 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  <Icon name="Send" size={24} />
                  Написать в Telegram
                </a>
                <a 
                  href="tel:+79250043039"
                  className="flex items-center justify-center gap-3 bg-white text-purple-600 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  <Icon name="Phone" size={24} />
                  +7 (925) 004-30-39
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-500">
          <p>© 2024 AI-Агенты. Быстрые решения для вашего бизнеса</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;