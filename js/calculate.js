function calculate() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('perimeter').innerText = "Invalid input";
        document.getElementById('area').innerText = "Invalid input";
        document.getElementById('diagonal').innerText = "Invalid input";
        return;
    }

const perimeter = 2 * (length + width);
const area = length * width;
const diagonal = Math.sqrt(length * length + width * width);

document.getElementById('perimeter').innerText = perimeter.toFixed(2);
document.getElementById('area').innerText = area.toFixed(2);
document.getElementById('diagonal').innerText = diagonal.toFixed(2);
}