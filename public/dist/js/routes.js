page('/', home);
page('/about', about);
page('/products', products);
page('/cart', cart)

function home(){
  $('main').html(renderHome());
}

function about(){
  $('main').html(renderAbout());
}

function products(){
  $('main').html(renderProducts());
}

function cart(){
  $('main').html(renderCart());
}