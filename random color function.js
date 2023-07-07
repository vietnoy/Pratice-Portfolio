export function randomRGBColor() {
    const result = [];
    for(let i = 0; i < 3; i++)
    {
        const randomNumb = Math.floor(Math.random()*256);
        result.push(randomNumb);
    }
    return `rgb(${result.join(',')})`;
}