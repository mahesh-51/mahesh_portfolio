export function scrollDivIntoView(div: string) {
    const targetDiv = document.getElementById(div);
    targetDiv?.scrollIntoView({ behavior: "smooth" });
}