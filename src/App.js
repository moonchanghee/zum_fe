import Component from "./components/Component.js";
import Items from "./components/Items.js";

export default class App extends Component {


template () {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted(){
    const $items = this.$target.querySelector('[data-component="items"]');
    new Items($items);
  }
}

