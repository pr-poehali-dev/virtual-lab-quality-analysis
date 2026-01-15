import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import SectionContent from '@/components/SectionContent';
import Footer from '@/components/Footer';

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
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <HomePage setActiveSection={setActiveSection} />
        )}

        <SectionContent
          activeSection={activeSection}
          simulatorActive={simulatorActive}
          reactionProgress={reactionProgress}
          startSimulation={startSimulation}
          setSimulatorActive={setSimulatorActive}
          setReactionProgress={setReactionProgress}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
