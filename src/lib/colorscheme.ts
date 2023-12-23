
export function toggleColorScheme() {
  console.log("toggling scheme...");
  const root = document.documentElement;
  
  const curScheme = root.dataset.colorScheme || null;
  const sysScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const current = curScheme || sysScheme;

  root.dataset.colorScheme = current === 'dark' ? 'light' : 'dark';
}
