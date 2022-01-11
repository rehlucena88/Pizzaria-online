 let modalQt = 1; //variavel criada para sempre começar o modal em 1.
 
 //Funçoes auxiliares criadas para facilitar a escrita do codigo e deixa-lo mais organizado.
 const c = (el)=>document.querySelector(el);
 const cs =(el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);           
    //quando usamos o clonenode clonamos o elemento html para preencher as info e joga-las na tela

    // Adicionado as infos das pizzas
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item. price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   // adicionando o modal e previnindo a açao de default da tag a.
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault();           
            modalQt = 1; //toda vez que o modal abrir o numero vai ser 1 na quantidade.           
    //preenchimento das informaçoes do modal e abri-lo 
    let key = e.target.closest('.pizza-item').getAttribute('data-key');   
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');//reset de tamanho quando selecionamos um tamanho diferente de grande 
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');//reset toda a vez que abrimos um modal com pizza diferente ja pre-selecionando o grande.
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
            
        c('.pizzaInfo--qt').innerHTML = modalQt; // quantidade padrao ao abrir o modal.

    //animaçao criada para suavisar a açao do modal 
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 300);
    });

    c('.pizza-area').append(pizzaItem);//usamos o append para clonar todos itens e nao substituir um por um.
});

// Eventos do modal
//Funçao closeModal criada usamos o opacity para dar um efeito de animaçao e o timer para dar o display none.
function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
};
//Executa o closeModal quando clicado.
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
       item.addEventListener('click', closeModal);
})
// botoes para adicionar e reduzir quantidade de pizza 
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if (modalQt > 1){
        modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
}); 
//Botoes selecionar tamanho.
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});