import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  img: string;
  crumbs?: Crumb[];
}

export default function PageHero({ title, subtitle, img, crumbs }: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
      {/* Photo */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-800/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-pad w-full pb-10">
        {crumbs && crumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-primary-300 text-xs mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="opacity-50">/</span>
                {c.href
                  ? <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
                  : <span className="text-white">{c.label}</span>
                }
              </span>
            ))}
          </div>
        )}
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-primary-200 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
