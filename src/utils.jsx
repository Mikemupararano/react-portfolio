//Create and export function to use images 
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
}