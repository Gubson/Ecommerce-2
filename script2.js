fetch('https://diwserver.vps.webdock.cloud/products')
.then(res => res.json())
.then(produtos => {

    let link = new URLSearchParams(window.location.search);
    let numero = parseInt(link.get('id'));
    let str = '';


    for( let i = 0; i < produtos.products.length; i++){

        let id = produtos.products[i].id;
        let img = produtos.products[i].image;
        let nome = produtos.products[i].title;
        let preco = produtos.products[i].price;
        let catigoria = produtos.products[i].category;
        let rate = produtos.products[i].rating.rate;
        let descricao = produtos.products[i].description;
        let cor = produtos.products[i].baseColour;
        let genero = produtos.products[i].gender;
        let marca = produtos.products[i].brandName;

        if(id === numero ){

            str += `<div class="produtin">

            <div class="imagem">
                
                <img src="${img}" width="500px" height="500px">

            </div>

            <div class="description">

                <h1>${nome}</h1>
                <h2>${catigoria}</h2>
                ${descricao}
                <h3>Preço: ${preco}</h3>
                <h3>Avaliação: ${rate}</h3>
                <h3>Marca: ${marca}</h3>
                <h3>Genero: ${genero}</h3>
                <h3>Cor: ${cor}</h3>

            </div>

        </div>`
        }

    }

    document.getElementById('produtao').innerHTML = str;




})
