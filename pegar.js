//Site as vezes bloqueia o proxy para baixar imgs
function baixarImagens(url) {
    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(resp => resp.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        let img = document.createElement("img");
        img.style.maxWidth = "250px";
        img.src = imageObjectURL;
        document.querySelector("#res").appendChild(img);
    })
    .catch(error => console.log('Erro ao carregar imagem:', error));
}

    function fetchimgs() {
        const jpg = [
            "https://etecsantosdumont.com.br/wp-content/uploads/2022//historiaetec3-1.jpg",
            "https://etecsantosdumont.com.br/wp-content/uploads/2019/08/CURSOS-ONLINE.jpg"
            
        ];

        jpg.forEach(url => {baixarImagens(url)
        });
    }

    function mostrarH1s(url) {
    fetch("https://api.allorigins.win/raw?url=https://etecsantosdumont.com.br/")
    .then(resp => resp.text())
    .then(text => {
        let d = new DOMParser();
        let doc = d.parseFromString(text, "text/html");
        
        const h4s = doc.querySelectorAll("h4");
        const resultado = document.querySelector("#h4s");
        resultado.innerHTML = "<h1>Todos os H4 da página:</h1>";
        
        h4s.forEach(h4 => {
            const novoh4 = document.createElement("h4");
            novoh4.textContent = h4.textContent;
            resultado.appendChild(novoh4);
        });
    })
    .catch(err => {
        console.error("Erro ao buscar a página:", err);
    });
}

    function main() {
        document.querySelector("#btnimg").addEventListener("click", fetchimgs);
        document.querySelector("#btnh1").addEventListener("click", mostrarH1s);
    }

    window.onload = main;
