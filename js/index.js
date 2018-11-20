let app = () => {
  this.el = document.getElementsByClassName('products');
  this.products = ['Milk'];

  //Change name and count products
  this.Count = data => {
    let name = 'product';
    let el = document.getElementsByClassName('product');
    if (data && data > 1) {
        name = 'products';
      	el.innerHTML = `${data}  ${name}` ;
    } else {
      el.innerHTML = `No  ${name}`;
    }
  };
  
  //Create 
  this.FetchAll = () => {
    let data = '';
    let lengthProd = this.products.length;
    if (lengthProd > 0) {
      for (i = 0; i < this.products.length; i++) {
          data += '<tr>';
          data += `<td> + ${i+1} .${this.products[i]} + </td>`;
          data += '<td><button class = "btn-edit" onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button class = "btn-delete" onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';       
      }
    }
    this.Count(this.products.length);
    return this.el.innerHTML = data;
  };

  //Add product in list
  this.Add = () => {
    el = document.getElementsByClassName('add-name');
    let product = el.value;
    if (product) {
        this.products.push(product);
        el.value = '';
        this.FetchAll();
    } else {
      alert('123123');
    }
  };

  //Edit this product
  this.Edit = item => {
    let el = document.getElementsByClassName('edit-name');

    el.value = this.products[item];
    document.getElementsByClassName('spoiler').style.display = 'block';
    document.getElementsByClassName('saveEdit').onsubmit = () => {
      let product = el.value;
      if (product) {
        this.products.splice(item, 1, product);
        this.FetchAll();
        CloseInput();
      }
    }
  };

  //Delete this product
  this.Delete = item => {
    this.products.splice(item, 1);
    this.FetchAll();
  };

}

app.FetchAll();

//Close edit
function CloseInput() {
  document.getElementsByClassName('spoiler').style.display = 'none';
}