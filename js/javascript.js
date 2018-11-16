let app = new function() {
  this.el = document.getElementById('products');
  this.products = ['Milk'];

  //Змiна назви i кiлькiсть продуктiв
  this.Count = data => {
    let el   = document.getElementById('product');
    let name = 'product';
    if (data) {
      if (data > 1) {
        name = 'products';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  //Створюэмо список наших продуктiв
  this.FetchAll = () => {
    let data = '';
    if (this.products.length > 0) {
      for (i = 0; i < this.products.length; i++) {
          data += '<tr>';
          data += '<td>' + (i+1) + '. ' + this.products[i] + '</td>';
          data += '<td><button class = "btn-edit" onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button class = "btn-delete" onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';       
      }
    }
    this.Count(this.products.length);
    return this.el.innerHTML = data;
  };

  //Дадоэмо
  this.Add = () => {
    el = document.getElementById('add-name');
    let product = el.value;
    if (product) {
        this.products.push(product);
        console.log(this.products)
        el.value = '';
        this.FetchAll();
    }else {
      alert('123123');
    }
  };

  //Редагуэм
  this.Edit = item => {
    let el = document.getElementById('edit-name');

    el.value = this.products[item];
    document.getElementById('spoiler').style.display = 'block';
    document.getElementById('saveEdit').onsubmit = () => {
      let product = el.value;
      if (product) {
        this.products.splice(item, 1, product.trim());
        this.FetchAll();
        CloseInput();
      }
    }
  };

  //Видаляэмо
  this.Delete = item => {
    this.products.splice(item, 1);
    this.FetchAll();
  };

}

app.FetchAll();

//Закриваэмо наш редактор продукту
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}