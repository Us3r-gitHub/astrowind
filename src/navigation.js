export const headerData = {
  links: [
    { text: 'About', href: '#about' },
    { text: 'Resume', href: '#resume' },
  ],
  actions: [{ text: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aikuci', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aikuci', target: '_blank' },
  ],
  // TODO: Update License URL
  footNote: `
    Build with <a class="underline text-accent dark:text-white" href="https://github.com/onwidget/astrowind/"> Astro</a> · Templates by <a class="underline text-accent dark:text-white" href="https://github.com/onwidget/astrowind/"> AstroWind</a>
  `,
};
