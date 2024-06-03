export function toggleColorScheme() {
  const root = document.documentElement;
  
  const usrScheme = root.dataset.colorScheme || null;
  const sysScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const current = usrScheme || sysScheme;

  root.dataset.colorScheme = current === 'dark' ? 'light' : 'dark';
}
