import Component from "./cors/Component.js";
import Main from "./page/main/Main.js";
import detail from './page/Detail'

export default class App extends Component {
    setup () {
        this.$state =  {
          url: "" , 
          data : ""
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
    const {catchUrl} = this;
    const $items = this.$target.querySelector('[data-component="items"]');
    if(this.$state.url == ""){
      fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => this.setState({
        data: data.data
    }));
    
        new Main($items,{
            catchurl: catchUrl.bind(this),
            data : this.$state.data
        });
    }else if(this.$state.url == "/home"){
        new detail($items);
    }
  }

  catchUrl (url) {
    this.setState({
        url: url
    });
  }
}






