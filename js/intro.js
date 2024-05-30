
const shortUrl = (e) => {
    e.preventDefault();
    const longurl = document.querySelector(".form-control").value;
    console.log(longurl);
    const randomiterater = generateIterater();
    const shortUrl = `https://shortify.ly/${randomiterater}`;
    document.querySelector(".short-link").innerText = shortUrl;
}

const generateIterater = () => {
    return Math.random().toString(36).substring(2, 7);
}

