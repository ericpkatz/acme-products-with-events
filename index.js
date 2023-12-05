const names = ['foo', 'bar', 'bazz', 'quq', 'fizz', 'buzz'];
const colors = ['red', 'blue', 'yellow', 'green'];

const productsList = window.document.querySelector('#productsList');
const addButton = document.querySelector('#addButton');
const spanCount = document.querySelector('#spanCount');

addButton.addEventListener('click', function(){
  products.push(generateRandom());
  render();
});

productsList.addEventListener('click', (ev)=> {
  if(ev.target.tagName === 'LI'){
    const li = ev.target;
    const ul = li.parentNode;
    const children = Array.from(ul.children);
    const idx = children.indexOf(li);
    products.splice(idx, 1);
    render();
  }
});

function generateRandom(){
  const nameIdx = Math.floor(Math.random()*names.length);
  const name = names[nameIdx];
  const colorIdx = Math.floor(Math.random()*colors.length);
  const color = colors[colorIdx];
  const cost = Math.ceil(Math.random() * 10);

  return {
    name,
    color,
    cost
  };
}

function render(){
  const lis = products.map(function(product){
    return `
      <li>
      ${ product.name } is ${product.color} 
      and costs ${product.cost}
      </li>
    `;
  }).join('');
  productsList.innerHTML = lis;
  spanCount.innerHTML = products.length;
}

const products = [];
products.push(generateRandom());
products.push(generateRandom());

render();