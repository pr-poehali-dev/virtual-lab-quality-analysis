import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [simulatorActive, setSimulatorActive] = useState(false);
  const [reactionProgress, setReactionProgress] = useState(0);

  const startSimulation = () => {
    setSimulatorActive(true);
    setReactionProgress(0);
    
    const interval = setInterval(() => {
      setReactionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const sections = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'theory', name: 'Теория', icon: 'BookOpen' },
    { id: 'analysis', name: 'Анализ', icon: 'FlaskConical' },
    { id: 'experiments', name: 'Эксперименты', icon: 'Microscope' },
    { id: 'results', name: 'Результаты', icon: 'ChartLine' },
    { id: 'contacts', name: 'Контакты', icon: 'Mail' },
    { id: 'authors', name: 'Об авторах', icon: 'Users' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Atom" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                VirtualLab
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={section.icon as any} size={18} />
                  <span className="font-medium">{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16">
            <section className="text-center space-y-6 py-20">
              <Badge className="mb-4 bg-secondary text-white px-6 py-2 text-sm">
                Интерактивная научная платформа
              </Badge>
              <h2 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
                Виртуальная лаборатория
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Проводите качественный анализ и наблюдайте химические реакции в реальном времени с 3D визуализацией
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  onClick={() => setActiveSection('experiments')}
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать эксперимент
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg"
                  onClick={() => setActiveSection('theory')}
                >
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Изучить теорию
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'FlaskConical',
                  title: 'Интерактивные симуляторы',
                  description: 'Реалистичные модели химических и физических процессов',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: 'Microscope',
                  title: '3D визуализация',
                  description: 'Наблюдайте за процессами на молекулярном уровне',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: 'ChartLine',
                  title: 'Анализ результатов',
                  description: 'Графики и диаграммы в реальном времени',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={feature.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'theory' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Теоретическая база</h2>
              <p className="text-xl text-gray-600">Фундаментальные принципы качественного анализа</p>
            </div>
            
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="basics">Основы</TabsTrigger>
                <TabsTrigger value="reactions">Реакции</TabsTrigger>
                <TabsTrigger value="methods">Методы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Atom" className="text-primary" />
                      Качественный анализ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Качественный анализ — раздел аналитической химии, занимающийся обнаружением отдельных элементов, ионов или соединений в исследуемом веществе.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-medium text-primary mb-2">Основные задачи:</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Обнаружение катионов и анионов</li>
                        <li>Идентификация органических соединений</li>
                        <li>Определение функциональных групп</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FlaskConical" className="text-secondary" />
                      Химические реакции
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      В качественном анализе используются специфические реакции, дающие характерные признаки: изменение цвета, образование осадка, выделение газа.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-secondary mb-2">Реакции осаждения</h4>
                        <p className="text-sm text-gray-600">Образование нерастворимых соединений</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-accent mb-2">Окислительно-восстановительные</h4>
                        <p className="text-sm text-gray-600">Изменение степени окисления элементов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="methods" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Microscope" className="text-accent" />
                      Методы анализа
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Современные методы качественного анализа включают как классические химические реакции, так и инструментальные техники.
                    </p>
                    <div className="space-y-3">
                      {['Микрокристаллоскопия', 'Капельный анализ', 'Хроматография', 'Спектральный анализ'].map((method, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                            {i + 1}
                          </div>
                          <span className="font-medium">{method}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'analysis' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Качественный анализ</h2>
              <p className="text-xl text-gray-600">Определение катионов и анионов</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Plus" className="text-primary" />
                    Катионы
                  </CardTitle>
                  <CardDescription>Положительно заряженные ионы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Fe³⁺', reaction: 'Синее окрашивание с K₄[Fe(CN)₆]', color: 'bg-blue-500' },
                    { name: 'Cu²⁺', reaction: 'Интенсивно синий цвет с NH₃', color: 'bg-cyan-500' },
                    { name: 'Ag⁺', reaction: 'Белый осадок AgCl с HCl', color: 'bg-gray-300' },
                    { name: 'Ca²⁺', reaction: 'Белый осадок CaCO₃', color: 'bg-slate-200' }
                  ].map((cation, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 ${cation.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {cation.name.split('⁺')[0]}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{cation.name}</p>
                        <p className="text-sm text-gray-600">{cation.reaction}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Minus" className="text-secondary" />
                    Анионы
                  </CardTitle>
                  <CardDescription>Отрицательно заряженные ионы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Cl⁻', reaction: 'Белый осадок AgCl', color: 'bg-gray-400' },
                    { name: 'SO₄²⁻', reaction: 'Белый осадок BaSO₄', color: 'bg-zinc-200' },
                    { name: 'CO₃²⁻', reaction: 'Выделение CO₂ с кислотами', color: 'bg-green-400' },
                    { name: 'NO₃⁻', reaction: 'Бурое кольцо с FeSO₄', color: 'bg-amber-600' }
                  ].map((anion, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 ${anion.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {anion.name.split('⁻')[0]}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{anion.name}</p>
                        <p className="text-sm text-gray-600">{anion.reaction}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'experiments' && (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Интерактивные эксперименты</h2>
              <p className="text-xl text-gray-600">Проведите виртуальную реакцию и наблюдайте результат</p>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Beaker" className="text-primary animate-pulse-slow" />
                  Симулятор химических реакций
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Реакция обнаружения ионов железа Fe³⁺
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="relative h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/5"></div>
                  
                  <div className="relative z-10 flex items-center justify-center h-full gap-12">
                    <div className="relative">
                      <div className="w-32 h-48 bg-gradient-to-b from-transparent via-blue-400/20 to-blue-500/40 rounded-b-full border-4 border-blue-300/30 backdrop-blur-sm flex items-end justify-center pb-4">
                        <div className={`w-24 h-32 bg-gradient-to-b rounded-b-full transition-all duration-1000 ${
                          simulatorActive && reactionProgress > 0
                            ? 'from-yellow-400/60 via-orange-400/70 to-red-500/80 animate-pulse-slow'
                            : 'from-orange-200/40 to-orange-400/50'
                        }`}>
                          {simulatorActive && reactionProgress > 50 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="w-16 h-16 bg-blue-600 rounded-full animate-float opacity-80"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-center mt-4 text-sm text-gray-400">FeCl₃ раствор</p>
                    </div>

                    {simulatorActive && reactionProgress > 30 && (
                      <Icon name="Plus" className="text-accent text-4xl animate-pulse" size={48} />
                    )}

                    <div className="relative">
                      <div className="w-32 h-48 bg-gradient-to-b from-transparent via-cyan-400/20 to-cyan-500/40 rounded-b-full border-4 border-cyan-300/30 backdrop-blur-sm flex items-end justify-center pb-4">
                        <div className={`w-24 h-32 bg-gradient-to-b rounded-b-full transition-all duration-1000 ${
                          simulatorActive && reactionProgress > 30
                            ? 'from-cyan-300/60 to-cyan-500/80'
                            : 'from-cyan-200/40 to-cyan-400/50'
                        }`}></div>
                      </div>
                      <p className="text-center mt-4 text-sm text-gray-400">K₄[Fe(CN)₆]</p>
                    </div>

                    {simulatorActive && reactionProgress > 60 && (
                      <>
                        <Icon name="ArrowRight" className="text-primary text-4xl animate-pulse" size={48} />
                        <div className="relative">
                          <div className="w-32 h-48 bg-gradient-to-b from-transparent via-blue-600/30 to-blue-700/50 rounded-b-full border-4 border-blue-400/40 backdrop-blur-sm flex items-end justify-center pb-4">
                            <div className="w-24 h-40 bg-gradient-to-b from-blue-600/80 via-blue-700/90 to-blue-900/95 rounded-b-full flex items-center justify-center">
                              <div className="text-center">
                                <Icon name="Sparkles" className="text-yellow-300 mx-auto mb-2 animate-pulse" size={32} />
                                <p className="text-xs text-blue-200 font-semibold">Осадок!</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-center mt-4 text-sm text-blue-300 font-semibold">Берлинская лазурь</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Прогресс реакции:</span>
                    <span className="text-sm font-semibold text-primary">{reactionProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 rounded-full"
                      style={{ width: `${reactionProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                    onClick={startSimulation}
                    disabled={simulatorActive && reactionProgress < 100}
                  >
                    <Icon name="Play" className="mr-2" />
                    {reactionProgress === 100 ? 'Повторить' : 'Запустить реакцию'}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-gray-600 text-white hover:bg-slate-800"
                    onClick={() => {
                      setSimulatorActive(false);
                      setReactionProgress(0);
                    }}
                  >
                    <Icon name="RotateCcw" className="mr-2" />
                    Сброс
                  </Button>
                </div>

                {reactionProgress === 100 && (
                  <div className="bg-blue-500/20 border-2 border-blue-400/50 rounded-xl p-6 animate-fade-in">
                    <div className="flex items-start gap-4">
                      <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={28} />
                      <div>
                        <h4 className="font-bold text-lg text-green-400 mb-2">Реакция завершена!</h4>
                        <p className="text-gray-300 mb-3">
                          Образовался темно-синий осадок берлинской лазури Fe₄[Fe(CN)₆]₃ — характерная качественная реакция на ионы железа (III).
                        </p>
                        <div className="bg-slate-800/50 p-4 rounded-lg">
                          <p className="text-sm text-blue-300 font-mono">
                            4 FeCl₃ + 3 K₄[Fe(CN)₆] → Fe₄[Fe(CN)₆]₃↓ + 12 KCl
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'results' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Результаты анализа</h2>
              <p className="text-xl text-gray-600">Данные экспериментов и статистика</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Проведено экспериментов', value: '127', icon: 'FlaskConical', color: 'from-blue-500 to-cyan-500' },
                { label: 'Обнаружено элементов', value: '23', icon: 'Atom', color: 'from-purple-500 to-pink-500' },
                { label: 'Точность анализа', value: '98.5%', icon: 'Target', color: 'from-orange-500 to-red-500' }
              ].map((stat, i) => (
                <Card key={i} className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon name={stat.icon as any} className="text-white" size={32} />
                    </div>
                    <p className="text-4xl font-bold text-center mb-2">{stat.value}</p>
                    <p className="text-center text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="ChartLine" className="text-primary" />
                  История экспериментов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: '15.01.2026', experiment: 'Обнаружение Fe³⁺', result: 'Положительный', color: 'bg-green-500' },
                    { date: '14.01.2026', experiment: 'Определение Cl⁻', result: 'Положительный', color: 'bg-green-500' },
                    { date: '13.01.2026', experiment: 'Анализ Cu²⁺', result: 'Отрицательный', color: 'bg-red-500' },
                    { date: '12.01.2026', experiment: 'Реакция на SO₄²⁻', result: 'Положительный', color: 'bg-green-500' }
                  ].map((exp, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${exp.color}`}></div>
                      <div className="flex-1">
                        <p className="font-semibold">{exp.experiment}</p>
                        <p className="text-sm text-gray-600">{exp.date}</p>
                      </div>
                      <Badge variant={exp.result === 'Положительный' ? 'default' : 'destructive'}>
                        {exp.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Контакты</h2>
              <p className="text-xl text-gray-600">Свяжитесь с нами для сотрудничества</p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="pt-8 space-y-6">
                {[
                  { icon: 'Mail', label: 'Email', value: 'lab@virtuallab.ru', href: 'mailto:lab@virtuallab.ru' },
                  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
                  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Ломоносова, 1', href: '#' },
                  { icon: 'Globe', label: 'Веб-сайт', value: 'www.virtuallab.ru', href: 'https://virtuallab.ru' }
                ].map((contact, i) => (
                  <a
                    key={i}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={contact.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{contact.label}</p>
                      <p className="font-semibold text-lg">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'authors' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold">Об авторах</h2>
              <p className="text-xl text-gray-600">Команда разработчиков виртуальной лаборатории</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Профессор Иванов А.С.',
                  role: 'Научный руководитель',
                  description: 'Доктор химических наук, специалист по аналитической химии',
                  icon: 'GraduationCap'
                },
                {
                  name: 'Петрова М.В.',
                  role: 'Ведущий разработчик',
                  description: 'Разработка интерактивных симуляторов и 3D визуализаций',
                  icon: 'Code'
                },
                {
                  name: 'Сидоров Д.И.',
                  role: 'Методист',
                  description: 'Разработка учебных материалов и экспериментов',
                  icon: 'BookOpen'
                },
                {
                  name: 'Козлова Е.А.',
                  role: 'UX/UI дизайнер',
                  description: 'Создание интуитивного интерфейса лаборатории',
                  icon: 'Palette'
                }
              ].map((author, i) => (
                <Card key={i} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <CardContent className="pt-8 text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto">
                      <Icon name={author.icon as any} className="text-white" size={40} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                      <Badge className="bg-secondary text-white mb-3">{author.role}</Badge>
                      <p className="text-gray-600">{author.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Atom" className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold">VirtualLab</p>
                <p className="text-sm text-gray-600">Виртуальная лаборатория</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              © 2026 VirtualLab. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
