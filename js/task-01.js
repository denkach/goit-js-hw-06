const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector("h2");
    const elements = category.querySelectorAll("li");

    console.log(`Category: ${title.textContent}
    Elements: ${elements.length}`);
});