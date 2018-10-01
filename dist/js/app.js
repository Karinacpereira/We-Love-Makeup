function renderHome(){
  $('main').html('<section class="videos"><div class="pt-5 pb-5 d-flex flex-row align-items-center justify-content-around" id="video"><div class="col-6"><iframe width="672" height="380" src="https://www.youtube.com/embed/pOVyiiWQ1oM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div class="d-flex flex-column col-4"><h3>OS PIORES ERROS NA HORA DE FAZER SUA MAQUIAGEM</h3><p>Olha que belezinha de vídeo... aperta o play para conferir aqueles erros que podem transformar sua make baphonica no maior mico!</p></div></div><div class="pt-5 pb-5 d-flex flex-row align-items-center justify-content-around" id="video"><div class="d-flex flex-column col-4"><h3>10 TRUQUES PARA APLICAR CILIOS POSTIÇOS</h3><p>Se você também sofre toda vez que decide colocar cílios postiços, não deixa de dar um play e conferir essas dicas maravilhosas!</p></div><div class="col-6"><iframe width="672" height="380" src="https://www.youtube.com/embed/z8qESA-wABo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div></section>');
}

function renderAbout(){
  $('main').html('<h1>Quem Somos?</h1><p>Nosso site tem como missão trazer, de maneira mais fácil, eficiente, e intuitiva, a visualização de ofertas relacionadas ao mundo da beleza feminina e maquiagem. Somos um facilitador para sua compra e busca, redirecionando você ao link que mais lhe interessa.</p>');
}

function renderProducts(){
  $('main').html('<div class="btn-group d-flex justify-content-center pt-3 flex-wrap" role="group" aria-label="Basic example"><button type="button" class="btn btn-filter" id="foundation">Base</button><button type="button" class="btn btn-filter" id="eyebrow">Sobrancelha</button><button type="button" class="btn btn-filter" id="bronzer">Pó</button><button type="button" class="btn btn-filter" id="blush">Blush</button><button type="button" class="btn btn-filter" id="eyeshadow">Sombra</button><button type="button" class="btn btn-filter" id="mascara">Rímel</button><button type="button" class="btn btn-filter" id="eyeliner">Delineador</button><button type="button" class="btn btn-filter" id="lipstick">Batom</button></div><div id="results"></div>');

  $(document).ready(()=> {
    const foundation = document.getElementById('foundation');
    foundation.addEventListener('click', trazProduto);
    const eyebrow = document.getElementById('eyebrow');
    eyebrow.addEventListener('click', trazProduto);
    const bronzer = document.getElementById('bronzer');
    bronzer.addEventListener('click', trazProduto);
    const blush = document.getElementById('blush');
    blush.addEventListener('click', trazProduto);
    const eyeshadow = document.getElementById('eyeshadow');
    eyeshadow.addEventListener('click', trazProduto);
    const mascara = document.getElementById('mascara');
    mascara.addEventListener('click', trazProduto);
    const eyeliner = document.getElementById('eyeliner');
    eyeliner.addEventListener('click', trazProduto);
    const lipstick = document.getElementById('lipstick');
    lipstick.addEventListener('click', trazProduto)
  });

  let docs = [];

  function erro(){
    console.log("erro");
  }

  function trazProduto(click){
    event.preventDefault();

    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${click}';

    $.ajax({
      type: 'GET',
      url,
      success: carregaProdutos,
      error: erro
    })
  }
  
  function carregaProdutos(data){
    docs = data.response.docs;
    exibeProdutos();
  }

  function exibeProdutos(){
    let produtos = document.getElementById('results');
    produtos.innerHTML = `
    <div class="row">
      <div id="${product.id}" class="col-4 col-md-3 col offset-md-2">
        ${produtos.map(product => `
        <div id="${product.id}">
          <h3>${product.name}</h3>
          <h5>${product.brand}</h5>
          <h6>${product.price}</h6>
          <img src="${product.image_link}">
          <a href="/${product.product_type}/${product.id}">Leia mais</a>
        </div>`).join('')}
      </div>
      <button id="buy" type="button" class="btn btn-warning">Comprar</button>
    </div>`;
  };
}

function renderCart(){
  $('main').html('<h1>Eeeeeeita, vai comprar tudo isso mesmo?</h1>')
}

