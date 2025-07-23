function createElement(data) {
    const pElement = document.createElement("p");
    pElement.innerHTML = data;
    document.body.append(pElement);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            callback(data.query.pages[21721040].extract);
        }
    };

    xhr.send();
}

queryWikipedia(createElement);