import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>("https://cdn.poehali.dev/projects/08cdcf5d-3c8a-42e1-96fc-cb5574fe32ed/files/dbb8eab4-3897-4d54-a542-45a7e13f7b95.jpg");
  const [greetingText, setGreetingText] = useState("С Новым годом");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#F5E6D3'
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'vintage-postcard.png';
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    } catch (error) {
      console.error('Error downloading:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wide">
            Редактор Винтажных Открыток
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Создайте новогоднюю открытку из вашего фото
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-in">
            <Button 
              onClick={() => fileInputRef.current?.click()}
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Icon name="Upload" size={20} />
              Загрузить своё фото
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <Button 
              onClick={handleDownload}
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-primary/30 hover:bg-primary/10"
            >
              <Icon name="Download" size={20} />
              Скачать открытку
            </Button>
          </div>

          <Card 
            ref={cardRef}
            className="overflow-hidden bg-card/90 backdrop-blur-sm border-4 border-primary/30 shadow-2xl animate-fade-in relative"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF87' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />

            <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-10 pointer-events-none">
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-6xl opacity-70">🎄</div>
                <div className="absolute -top-2 -right-2 text-6xl opacity-70">🎄</div>
                
                <h2 
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setGreetingText(e.currentTarget.textContent || "")}
                  className="text-4xl md:text-6xl font-bold text-center text-primary drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] pointer-events-auto cursor-text px-4 py-2 rounded hover:bg-white/20 transition-colors outline-none"
                  style={{ 
                    fontFamily: 'Cormorant, serif', 
                    letterSpacing: '0.08em',
                    WebkitTextStroke: '1px rgba(139, 115, 85, 0.3)'
                  }}
                >
                  {greetingText}
                </h2>
              </div>
            </div>

            <div className="relative p-8 md:p-16">
              <div className="absolute top-4 left-4 text-4xl opacity-60">🐿️</div>
              <div className="absolute top-4 right-4 text-4xl opacity-60">🐰</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-60">🌲</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-60">🌲</div>

              <div className="relative border-8 border-double border-primary/40 rounded-lg overflow-hidden shadow-2xl bg-white">
                {uploadedImage ? (
                  <img 
                    src={uploadedImage}
                    alt="Загруженное фото"
                    className="w-full h-auto"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="aspect-[3/4] flex items-center justify-center bg-muted/30">
                    <div className="text-center space-y-4 p-8">
                      <Icon name="ImagePlus" size={64} className="mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground text-lg">
                        Загрузите своё фото
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl">⭐</div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-5xl">✨</div>
            </div>

            <div className="px-8 pb-8 text-center space-y-3 bg-gradient-to-b from-transparent to-primary/5">
              <p className="text-lg text-foreground/80 font-light italic">
                Пусть этот праздник принесёт тепло и уют в ваш дом
              </p>
              <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm">
                <span className="text-xl">🎅</span>
                <span>Зима 2026</span>
                <span className="text-xl">⛄</span>
              </div>
            </div>

            <div 
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(212, 175, 135, 0.1) 10px, rgba(212, 175, 135, 0.1) 20px)'
              }}
            />
          </Card>

          <div className="text-center text-sm text-muted-foreground animate-fade-in">
            <p>💡 Совет: Кликните на текст "С Новым годом" чтобы изменить его</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Ваше фото</h3>
            <p className="text-muted-foreground text-sm">
              Лицо остаётся оригинальным без искажений
            </p>
          </div>

          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Винтажный декор</h3>
            <p className="text-muted-foreground text-sm">
              Ёлочки, зверюшки и праздничные элементы
            </p>
          </div>

          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/10">
            <div className="text-3xl mb-3">💾</div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Скачать</h3>
            <p className="text-muted-foreground text-sm">
              Сохраните готовую открытку одним кликом
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;