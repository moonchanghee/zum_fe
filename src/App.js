import Component from "./cors/Component.js";
import Main from "./page/main/Main.js";
import detail from './page/detail/Detail'

export default class App extends Component {
  setup () {
    this.$state =  {
      url: "" , 
      data : [{}],
      pk : ""
    };
  }
    
template () {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted(){
   const historyRouter = (state , title,url) => {
      history.pushState(state, title, url);
      this.setState({
        pk : state
    });
    }
    const catchUrl = (url) => {
      this.setState({
          url: url //url 변경
      });
    }
    window.onpopstate = function(e) { //뒤로가기 버튼클릭시 활성화되는 함수
      // console.log(e)
      // console.log(`${JSON.stringify(e.state)} | ${location.origin} | ${location.pathname}`);
      catchUrl(window.location.pathname) //뒤로가기 버튼을 클릭했을때 url 변화 알림 
    }

    const $items = this.$target.querySelector('[data-component="items"]');
    if(window.location.pathname == "/"){
        new Main($items,{
          historyRouter: historyRouter,
            data : this.$state.data
        });
    }else if(window.location.pathname == "/detail"){
        new detail($items,{
          data : window.location.search.substr(1).split('&')
        });
    }
  }

  
  setEvent(){
       fetch("http://localhost:3001/")
        .then((response) => response.json())
        // .then((data) => console.log(data.data))
        .then((data) => this.setState({
          data: data.data
      }))
  }

}
