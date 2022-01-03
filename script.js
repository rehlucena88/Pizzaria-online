 //Funçoes auxiliares criadas para facilitar a escrita do codigo e deixa-lo mais organizado.
 const c = (el)=>document.querySelector(el);
 const cs =(el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);           
    //quando usamos o clonenode clonamos o elemento html para preencher as info e joga-las na tela

    // Adicionado as infos das pizzas
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item. price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   // adicionando o modal e previnindo a açao de default da tag a.
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault();
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },300)
    });

    c('.pizza-area').append(pizzaItem);//usamos o append para clonar todos itens e nao substituir um por um.
});
