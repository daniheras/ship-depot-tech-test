/**
 * ABOUT THIS FILE
 * This file is used to get the theme from localStorage and set it to the document.
 * This strategy is used to avoid the flash of the default theme when the user has already selected a theme.
 * Using the `useEffect` hook to set the theme will cause a flash of the default theme.
 * Using cookies cause all pages to be dynamically rendered on the server mandatorily.
 * Using context cause all its children to be client-side rendered.
 * Theres no strategy without downsides, but this one is the best for this use case.
 * Read more about this here: https://github.com/vercel/next.js/discussions/53063
 */

const code = function () {
  window.__onThemeChange = function () {};

  function setTheme(newTheme) {
    document.documentElement.classList.remove(window.__theme);
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
    document.documentElement.classList.add(newTheme);
  }

  var preferredTheme;

  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {
    console.error(err);
  }

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {
      console.error(err);
    }
  };

  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkQuery.addEventListener('change', function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
};

export const getTheme = `(${code})();`;