    function baixarImagens(url){
        fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`)
        .then(resp => {
            return resp.blob()
        })
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            let img = document.createElement("img");
            img.style.maxWidth = "200px";
            img.src = imageObjectURL;
            document.querySelector("#res").appendChild(img);
        })
        .catch(error => console.log('Erro ao carregar imagem:', error));
}
    function fetchimgs() {
        const jpg = [
            "https://etecsantosdumont.com.br/wp-content/uploads/2019/08/CURSOS-ONLINE.jpg",
            "https://etecsantosdumont.com.br/wp-content/uploads/2022/11/historiaetec3-1.jpg"
        ];

        jpg.forEach(url => baixarImagens(url));
    }

    function main() {
        document.querySelector("#btnimg").addEventListener("click", fetchimgs);
    }

    window.onload = main;
