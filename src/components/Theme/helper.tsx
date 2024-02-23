export const changeTheme = (theme: string) => {
    console.log(theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
};