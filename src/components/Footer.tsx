import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
