const skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'GitHub', 'Vercel', 'React'];

const projects = [
  {
    title: 'Props Homework',
    description: 'React props orqali yaratilgan loyiha.',
    link: 'https://props-homework2-dugd.vercel.app/',
    image: '/images/project-props.svg',
  },
  {
    title: 'Components Homework',
    description: 'Komponentlar asosida tuzilgan interaktiv sahifa.',
    link: 'https://components-homework.vercel.app/',
    image: '/images/project-components.svg',
  },
  {
    title: 'Props Homework 2',
    description: 'Props bilan yanada rivojlantirilgan loyiha.',
    link: 'https://props-homework-iota.vercel.app/',
    image: '/images/project-props2.svg',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,140,255,0.28),transparent_35%)]" />
        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <a className="text-lg font-black tracking-[0.2em] text-white" href="#top">
            IMRONBEK
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#about">
              Men haqimda
            </a>
            <a className="transition hover:text-white" href="#skills">
              Ko&apos;nikmalar
            </a>
            <a className="transition hover:text-white" href="#projects">
              Loyihalar
            </a>
            <a className="transition hover:text-white" href="#contact">
              Bog&apos;lanish
            </a>
          </div>
        </nav>

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Frontend dasturchi
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Salom, men Abdullayev Imronbekman.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl">
              Men 12 yoshda, Mars IT da o&apos;qiyapman. Hozirda React bilan ishlashni o&apos;rganib,
              chiroyli va interaktiv web ilovalar yarataman.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1" href="#projects">
                Loyihalarim
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:-translate-y-1" href="#contact">
                Bog&apos;lanish
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <img
              src="/images/hero-illustration.svg"
              alt="Imronbekning frontend dasturlash illyustratsiyasi"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Men haqimda
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Yoshligimdan tortib web texnologiyalarni o&apos;rganmoqdaman.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                Men Mars IT da 1 yil davomida ta&apos;lim oldim. Hozirda frontend sohasida HTML, CSS,
                JavaScript, Tailwind CSS, React va dizayn vositalarini o&apos;rganib boraman. Mening
                maqsadim - foydalanuvchi uchun qulay va chiroyli interfeyslarni yaratish.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/30">
              <img
                src="/images/profile.svg"
                alt="Abdullayev Imronbekning portfolioga oid rasm"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Ko&apos;nikmalar
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Qaysi texnologiyalar bilan ishlayman
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center font-semibold text-slate-100 shadow-sm backdrop-blur">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Loyihalar
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Yaqinda yaratgan ishlarim
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/30">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-slate-300">{project.description}</p>
                  <a className="mt-5 inline-flex text-cyan-300 transition hover:text-cyan-200" href={project.link} target="_blank" rel="noreferrer">
                    Ko&apos;rish →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="border-y border-white/10 bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Ta&apos;lim
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Mars IT da o&apos;qish tajribasi
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-slate-300 shadow-xl shadow-slate-950/20">
              Men Mars ITda ta&apos;lim olayapman. Bu yerda frontend yo&apos;nalishi bo&apos;yicha HTML,
              CSS, JavaScript, React va dizayn asoslarini o&apos;rganayapman.
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Bog&apos;lanish</h3>
            <p className="mt-2 text-slate-300">Email: veryicewolves@gmail.com</p>
          </div>
          <a className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-1" href="mailto:veryicewolves@gmail.com">
            Xabar yuborish
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
