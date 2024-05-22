async function encurtarUrl(event) {
    event.preventDefault();

    var longUrl = document.getElementById("caixa1").value;
    var customName = document.getElementById("caixa2").value;
    var apiUrl = `https://ulvis.net/api.php?url=${longUrl}&custom=${customName}&private=1`;

    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro na rede ao consultar a API');
        }

        let data = await response.json();

        if (data.url) {
            document.getElementById("shortUrl").value = data.url;
        } else {
            console.error("Erro na API:", data);
            alert("Erro ao encurtar a URL. Por favor, tente novamente.");
        }
    } catch (error) {
        console.error("Erro na URL:", error);
        alert("Erro na URL. Verifique a URL e tente novamente.");
    }
}
