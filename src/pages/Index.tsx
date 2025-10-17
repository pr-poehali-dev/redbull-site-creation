import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: 'Red Bull Original',
      description: 'Классический энергетический напиток, созданный в 1987 году. Придает крылья!',
      image: 'https://cdn.poehali.dev/projects/a66d64f7-a033-4547-a936-05cc480b623a/files/288f248e-648e-464a-9693-58da82ab4bec.jpg',
      features: ['Кофеин', 'Таурин', 'Витамины группы B'],
    },
    {
      name: 'Red Bull Sugarfree',
      description: 'Вся энергия без сахара. Идеален для тех, кто следит за фигурой.',
      image: 'https://cdn.poehali.dev/projects/a66d64f7-a033-4547-a936-05cc480b623a/files/24aa0488-9bf0-4bd9-adde-fd6ca646206e.jpg',
      features: ['0 калорий', 'Без сахара', 'Тот же эффект'],
    },
    {
      name: 'Red Bull Tropical',
      description: 'Тропический вкус для ярких моментов. Энергия с нотками экзотики.',
      image: 'https://cdn.poehali.dev/projects/a66d64f7-a033-4547-a936-05cc480b623a/files/f2a1b36a-3fd0-4b4c-9e91-86f375774362.jpg',
      features: ['Тропический вкус', 'Энергия', 'Освежает'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary">RED</span>
            <span className="text-secondary">BULL</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                activeSection === 'products' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Линейка продуктов
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.redbull.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Globe" size={20} />
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Придает
              <br />
              <span className="text-primary">Крылья</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Red Bull — энергетический напиток №1 в мире. Энергия для спорта, работы и жизни.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => scrollToSection('products')}
              >
                Узнать больше
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/a66d64f7-a033-4547-a936-05cc480b623a/files/62810fda-c3c0-4352-8322-0610a89c0537.jpg"
              alt="Red Bull Hero"
              className="relative rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section id="products" className="min-h-screen py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Линейка продуктов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери свою энергию: классика, без сахара или тропический вкус
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    asChild
                  >
                    <a
                      href="https://www.redbull.com/ru-ru/energydrink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Подробнее
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img
              src="https://cdn.poehali.dev/projects/a66d64f7-a033-4547-a936-05cc480b623a/files/2f5f6931-d0c1-4359-864f-d5b2b00d1aa8.jpg"
              alt="Red Bull Sports"
              className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto object-cover animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            />
            <p className="mt-8 text-2xl font-semibold text-muted-foreground">
              Энергия для экстремальных видов спорта
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами или найдите нас в социальных сетях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Наши социальные сети</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/redbull"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="Instagram" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm text-muted-foreground">@redbull</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/redbull"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="Facebook" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Facebook</p>
                      <p className="text-sm text-muted-foreground">Red Bull</p>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/redbull"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="Twitter" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Twitter</p>
                      <p className="text-sm text-muted-foreground">@redbull</p>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/redbull"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="Youtube" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">YouTube</p>
                      <p className="text-sm text-muted-foreground">Red Bull</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-sm text-muted-foreground">
                      Red Bull GmbH, Am Brunnen 1, 5330 Fuschl am See, Austria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Ваше сообщение..."
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Red Bull GmbH. Все права защищены. Red Bull дает тебе крылья!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
