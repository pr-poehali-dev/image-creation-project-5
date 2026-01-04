import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 tracking-wide">
            Винтажная Галерея
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Новогодние открытки в стиле советской эпохи
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none"></div>
              
              <img 
                src="https://cdn.poehali.dev/projects/08cdcf5d-3c8a-42e1-96fc-cb5574fe32ed/files/688b88fc-d2cf-4211-afdb-4ac7c141bce8.jpg"
                alt="Винтажная новогодняя открытка"
                className="w-full h-auto animate-glow"
              />
              
              <div className="absolute top-0 left-0 right-0 p-8">
                <h2 className="text-5xl md:text-6xl font-bold text-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" style={{ fontFamily: 'Cormorant, serif', letterSpacing: '0.05em' }}>
                  С Новым годом
                </h2>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-t from-primary/5 to-transparent">
              <div className="text-center space-y-4">
                <p className="text-lg text-foreground/80 font-light italic">
                  Пусть этот праздник принесёт тепло и уют в ваш дом
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <span>✨</span>
                  <span>Зима 2026</span>
                  <span>✨</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center animate-fade-in">
            <div className="inline-block px-8 py-4 bg-card/60 backdrop-blur-sm rounded-lg border border-primary/20 shadow-lg">
              <p className="text-muted-foreground text-sm font-light">
                Открытка создана с душой и теплом
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">❄️</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Ретро стиль</h3>
            <p className="text-muted-foreground text-sm">
              Атмосфера советских новогодних праздников
            </p>
          </div>

          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">🎄</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Тёплая ностальгия</h3>
            <p className="text-muted-foreground text-sm">
              Мягкие пастельные цвета с золотистым сиянием
            </p>
          </div>

          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Семейные ценности</h3>
            <p className="text-muted-foreground text-sm">
              Открытки, которые хранят память о близких
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;