fetch('https://diwserver.vps.webdock.cloud/products')
    .then(res => res.json())
    .then(produtos => {

        let str = '';

        for(let i = 0; i < 8; i++){

            let img = produtos.products[i].image;
            let nome = produtos.products[i].title;
            let preco = produtos.products[i].price;
            let catigoria = produtos.products[i].category;
            let rate = produtos.products[i].rating.rate;
            let valor = produtos.products[i].id;

            str+= `<div class="produto">
                
            <div class="imagem">

                <img src="${img}" width="200px" height="200px">

            </div>

            <div class="descricao">
                
                <div class="texto">
                    
                    <h1>${nome}</h1>
                    <h3>${catigoria}</h3>
                    <p>${preco}</p>
                    <p>${rate} <i class="fa-solid fa-star"></i>
                    </p>

                </div>
                                    
                <div class="butao">

                    <a href="detalhes.html?id=${valor}">Comprar</a>

                </div>
                
            </div>

        </div>`

        }

        document.getElementById('tela').innerHTML = str;

    })