const ukrToEngMap = {
    'А': 'A', 'а': 'a',
    'Б': 'B', 'б': 'b',
    'В': 'V', 'в': 'v',
    'Г': 'H', 'г': 'h',
    'Ґ': 'G', 'ґ': 'g',
    'Д': 'D', 'д': 'd',
    'Е': 'E', 'е': 'e',
    'Є': 'Ye', 'є': 'ie',
    'Ж': 'Zh', 'ж': 'zh',
    'З': 'Z', 'з': 'z',
    'И': 'Y', 'и': 'y',
    'І': 'I', 'і': 'i',
    'Ї': 'Yi', 'ї': 'i',
    'Й': 'Y', 'й': 'i',
    'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l',
    'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n',
    'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p',
    'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's',
    'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u',
    'Ф': 'F', 'ф': 'f',
    'Х': 'Kh', 'х': 'kh',
    'Ц': 'Ts', 'ц': 'ts',
    'Ч': 'Ch', 'ч': 'ch',
    'Ш': 'Sh', 'ш': 'sh',
    'Щ': 'Shch', 'щ': 'shch',
    'Ю': 'Yu', 'ю': 'iu',
    'Я': 'Ya', 'я': 'ia',
    'ь': '', 'Ь': ''
};

function transliterateText() {
    const inputText = document.getElementById("inputText").value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        outputText += ukrToEngMap[char] !== undefined ? ukrToEngMap[char] : char;
    }

    document.getElementById("outputText").value = outputText;
}
function filterLetters(event) {
    const input = event.target.value;
    const filteredInput = input.replace(/[^а-яА-ЯїЇєЄіІґҐ]/g, '');
    event.target.value = filteredInput;
    transliterateText();
}

document.getElementById("inputText").addEventListener('input', filterLetters);