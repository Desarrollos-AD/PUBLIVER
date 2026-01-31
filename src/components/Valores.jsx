import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";
import "./valores.css";

const reviews = [
  {
    name: "Estrategia",
    body: "Diseñamos cada proyecto con enfoque analítico y visión comercial.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Creatividad",
    body: " Transformamos ideas en mensajes que conectan y generan impacto.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Compromiso",
    body: " Acompañamos a nuestros clientes en cada etapa del proceso.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Estrategia",
    body: "  Diseñamos cada proyecto con enfoque analítico y visión comercial.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Confianza",
    body: " Construimos relaciones transparentes y duraderas.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Innovación",
    body: "Aplicamos herramientas, métodos y soluciones actuales para cada mercado.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Responsabilidad",
    body: "Actuamos con ética, profesionalismo y enfoque en resultados reales.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer rounded-xl p-4",
        "bg-white/5 backdrop-blur-md",
        "border border-white/10",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_15px_rgba(0,0,0,0.4)]",
        "transition-all duration-300",
        "hover:bg-white/10 hover:border-white/20",
      )}
    >
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="card__img rounded-full ring-2 ring-white/10"
        />

        <div className="flex flex-col">
          <figcaption className="">
            {name}
          </figcaption>
        </div>
      </div>

      <blockquote className="mt-3 text-sm text-white/70 leading-relaxed">
        {body}
      </blockquote>
    </figure>
  );
};

export function Valores() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* PRIMER MARQUEE */}
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex w-max gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>

        <div className="flex w-max gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.name + "-dup"} {...review} />
          ))}
        </div>
      </Marquee>

      {/* SEGUNDO MARQUEE (REVERSE) */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
        {secondRow.map((review) => (
          <ReviewCard key={review.name + "-dup"} {...review} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  );
}
