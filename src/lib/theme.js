function isDarkMode() {
	if (typeof window === 'undefined') return false;
	return (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	);
}

function updateTheme() {
	if (typeof window === 'undefined') return;

	if (isDarkMode()) {
		document.documentElement.classList.add('dark');
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.classList.remove('dark');
		document.documentElement.removeAttribute('data-theme');
	}
}

export { updateTheme, isDarkMode };
