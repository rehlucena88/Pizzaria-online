 //Funçoes auxiliares criadas para facilitar a escrita do codigo e deixa-lo mais organizado.
 const c = (el)=>document.querySelector(el);
 const cs =(el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);           
    //quando usamos o clonenode clonamos o elemento html para preencher as info e joga-las na tela


    c('.pizza-area').append(pizzaItem);//usamos o append para clonar todos itens e nao substituir um por um.
});