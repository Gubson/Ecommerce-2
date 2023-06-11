fetch('https://diwserver.vps.webdock.cloud/products')
    .then(res => res.json())
    .then(produtos => {

        let str = '';

        for(let i = 0; i < produtos.products.length; i++){

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

        const filtro = document.getElementById('form');
        const divsProdutos = document.querySelectorAll('.produto');
    
        filtro.addEventListener('input', function () {
          const filtroValor = filtro.value.toLowerCase();
    
          divsProdutos.forEach(function (div) {
            const h1 = div.querySelector('h1');
            const texto = h1.textContent.toLowerCase();
    
            if (texto.includes(filtroValor)) {
              div.style.display = 'block';
            } else {
              div.style.display = 'none';
            }
            
          });
        });

      });