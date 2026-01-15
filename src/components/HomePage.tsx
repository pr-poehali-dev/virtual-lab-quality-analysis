import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  setActiveSection: (section: string) => void;
}

const HomePage = ({ setActiveSection }: HomePageProps) => {
  return (
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
  );
};

export default HomePage;
