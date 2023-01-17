const getRandomCOlor = () => {
    const radomNumber = Math.floor(Math.random() * 16777215);
    const randomHexCode = '#' + radomNumber.toString(16);

    document.body.style.backgroundColor = randomHexCode;

    document.getElementById('color-code').innerText = randomHexCode;
}

document.getElementById('btn').addEventListener('click', getRandomCOlor);

getRandomCOlor();