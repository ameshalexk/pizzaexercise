import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public total = 15;
  public option = '0';

  public toppings: any = {
    pepperoni: 0.50,
    sausage: 1.50,
    peppers: 0.50,
    onions: 0.50,
    mushrooms: 0.75,
    pineapple: 1.00,
    bacon: 1.00,
    ham: 0.75,
    spinach: 0.75,
    cheese: 0,
    sauce: 0,
  }

  public toppingsList = Object.keys(this.toppings);

  public selection = [] as any;
  public price = [] as any;

  changeSelection(val: string) {
    if (this.selection.indexOf(val) === -1 || this.price.indexOf(this.toppings[val]) === -1) {
      this.selection.push(val);
      this.price.push(this.toppings[val]);
      this.total = this.total + this.toppings[val];
    } else if (this.selection.indexOf(val) >= 0 && this.price.indexOf(this.toppings[val]) >= 0) {
      this.selection.splice(this.selection.indexOf(val), 1);
      this.price.splice(this.price.indexOf(this.toppings[val]), 1);
      this.total = this.total - this.toppings[val];
    }
  }
  changeOption(val: string) {
    this.option = val;

  }
}
