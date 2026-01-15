import Icon from '@/components/ui/icon';

interface Section {
  id: string;
  name: string;
  icon: string;
}

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ sections, activeSection, setActiveSection }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
