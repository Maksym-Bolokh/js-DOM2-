
const apiURL = "https://picsum.photos/v2/list";

export async function fetchImages(page) {
  try {
    const response = await fetch(`${apiURL}?page=${page}&limit=4`);
    const images = await response.json();
    return images;
  } catch (error) {
    console.error("Помилка завантаження картинок:", error);
    return [];
  }
}