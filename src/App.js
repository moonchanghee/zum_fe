import Component from "./components/Component.js";
import Items from "./components/Items.js";
import detail from './page/detail'
export default class App extends Component {

    setup () {
        this.$state = {
          url: "",
        };
      }

template () {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
      ${this.$state.url}
    `;
  }

  mounted(){
    const {catchurl} = this;
    const $items = this.$target.querySelector('[data-component="items"]');
    if(this.$state.url == ""){
        new Items($items,{
            catchurl: catchurl.bind(this)
        });
    }else if(this.$state.url == "/home"){
        new detail($items);
    }

  }

  catchurl (contents) {
    // const {url} = this.$state;
    this.setState({
        url: contents
    });
  }
}

