import React, { useEffect, useState } from 'react';

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

const EMAIL = 'veryicewolves@gmail.com';

const translations = {
  uz: {
    nav: { about: "Men haqimda", skills: "Ko'nikmalar", projects: "Loyihalar", contact: "Bog'lanish" },
    hero: { badge: 'Frontend dasturchi', hello: 'Salom, men Abdullayev Imronbekman.', intro: "Men 12 yoshda, Mars IT da o'qiyapman. Hozirda React bilan ishlashni o'rganib, chiroyli va interaktiv web ilovalar yarataman." },
    buttons: { projects: "Loyihalarim", contact: "Bog'lanish" },
    about: { title: "Yoshligimdan tortib web texnologiyalarni o'rganmoqdaman.", body: "Men Mars IT da 1 yil davomida ta'lim oldim. Hozirda frontend sohasida HTML, CSS, JavaScript, Tailwind CSS, React va dizayn vositalarini o'rganib boraman. Mening maqsadim - foydalanuvchi uchun qulay va chiroyli interfeyslarni yaratish." },
    skills: { title: "Qaysi texnologiyalar bilan ishlayman" },
    projects: { title: "Yaqinda yaratgan ishlarim", view: "Ko'rish →" },
    education: { title: "Mars IT da o'qish tajribasi", body: "Men Mars ITda ta'lim olayapman. Bu yerda frontend yo'nalishi bo'yicha HTML, CSS, JavaScript, React va dizayn asoslarini o'rganayapman." },
    contact: { title: "Bog'lanish", emailLabel: 'Email' },
  },
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: { badge: 'Frontend Developer', hello: "Hi, I'm Abdullayev Imronbek.", intro: "I'm 12 years old and studying at Mars IT. I'm learning React and building beautiful, interactive web apps." },
    buttons: { projects: 'My projects', contact: 'Contact me' },
    about: { title: 'Learning web technologies since childhood.', body: "I studied at Mars IT for 1 year. Currently learning HTML, CSS, JavaScript, Tailwind CSS, React and design tools. My goal is to create user-friendly and beautiful interfaces." },
    skills: { title: 'Technologies I work with' },
    projects: { title: 'Recent works', view: 'View →' },
      education: { title: 'Experience at Mars IT', body: 'I am studying at Mars IT, where I am learning HTML, CSS, JavaScript, React and the fundamentals of design in the frontend track.' },
    contact: { title: 'Contact', emailLabel: 'Email' },
  },
  ru: {
    nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты' },
    hero: { badge: 'Frontend разработчик', hello: 'Привет, я Абдуллаев Имронбек.', intro: 'Мне 12 лет, я учусь в Mars IT. Я изучаю React и создаю красивые интерактивные веб-приложения.' },
    buttons: { projects: 'Мои проекты', contact: 'Связаться' },
    about: { title: 'Изучаю веб-технологии с детства.', body: 'Я учился в Mars IT 1 год. Сейчас изучаю HTML, CSS, JavaScript, Tailwind CSS, React и инструменты дизайна. Моя цель — создавать удобные и красивые интерфейсы.' },
    skills: { title: 'Технологии, с которыми я работаю' },
    projects: { title: 'Недавние работы', view: 'Посмотреть →' },
    education: { title: 'Опыт обучения в Mars IT', body: 'Я учусь в Mars IT, где изучаю HTML, CSS, JavaScript, React и основы дизайна в направлении frontend.' },
    contact: { title: 'Контакты', emailLabel: 'Email' },
  },
};

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'uz');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const parts = path.split('.');
    let cur = translations[lang] || translations.uz;
    for (const p of parts) cur = cur?.[p];
    return cur ?? path;
  };

  return (
    <div id="top" className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'theme-light bg-white text-slate-900'}`}>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,140,255,0.28),transparent_35%)]" />
        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <a className="text-lg font-black tracking-[0.2em]" href="#top">
            IMRONBEK
          </a>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a className="transition hover:opacity-90" href="#about">
                {t('nav.about')}
              </a>
              <a className="transition hover:opacity-90" href="#skills">
                {t('nav.skills')}
              </a>
              <a className="transition hover:opacity-90" href="#projects">
                {t('nav.projects')}
              </a>
              <a className="transition hover:opacity-90" href="#contact">
                {t('nav.contact')}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <select
                aria-label="Language"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className={`rounded border border-white/10 bg-white/5 px-2 py-1 text-sm ${theme === 'dark' ? 'text-white focus:text-slate-900' : 'text-slate-900 focus:text-white'}`}
              >
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>

              <button
                onClick={() => setTheme((s) => (s === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle theme"
                aria-pressed={theme === 'light'}
                title="Toggle theme"
                className="rounded bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {theme === 'dark' ? '🌙' : '🔆'}
              </button>
            </div>
          </div>
        </nav>

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {t('hero.badge')}
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {t('hero.hello')}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl">
              {t('hero.intro')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1" href="#projects">
                {t('buttons.projects')}
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:-translate-y-1" href={`mailto:${EMAIL}`}>
                {t('buttons.contact')}
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
                {t('nav.about')}
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {t('about.title')}
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                {t('about.body')}
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
                {t('nav.skills')}
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {t('skills.title')}
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
              {t('nav.projects')}
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('projects.title')}
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
                    {t('projects.view')}
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
                {t('education.title')}
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {t('education.title')}
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-slate-300 shadow-xl shadow-slate-950/20">
              {t('education.body')}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">{t('contact.title')}</h3>
            <p className="mt-2 text-slate-300">{t('contact.emailLabel')}: {EMAIL}</p>
          </div>
          <a className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-1" href={`mailto:${EMAIL}`}>
            {t('buttons.contact')}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
