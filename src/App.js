import Component from "./cors/Component.js";
import Main from "./page/main/Main.js";
import Detail from './page/detail/Detail'
import Modify from './page/modify/Modify'
import Write from './page/write/Write'
import Notfound from './page/notfound/Notfound'

export default class App extends Component {
  setup () {
    this.$state =  {
      url: "" , 
      Bool : true 
    };
  }
    
template () {
    return `
      <header data-component="header"></header>
      <main data-component="main"></main>
      <footer data-component="footer"></footer>
    `;
  }

  setEvent2(){
  const cacheCheck = (data) => {
    this.setState({
      Bool: data //캐시 변경 알림
  });
  }

   const historyRouter = (state , title,url) => {
    history.pushState(state, title, url);
    changeUrl(url)
    }
    const changeUrl = (url) => {
      this.setState({
          url: url //url 변경
      });
    }
    window.onpopstate = function() { //뒤로가기 버튼클릭시 활성화되는 함수
      changeUrl(window.location.pathname) //뒤로가기 버튼을 클릭했을때 url 변화 알림 
    }


    const $main = this.$target.querySelector('[data-component="main"]');
    if(window.location.pathname == "/"){
        new Main($main,{
          historyRouter: historyRouter,
          data : this.$state.Bool,
          cacheCheck:cacheCheck
        });
    }
    else if(window.location.pathname== "/detail"){
        new Detail($main,{
          historyRouter: historyRouter,
          cacheCheck : cacheCheck
        });

    }
    else if(window.location.pathname == "/modify"){
      new Modify($main,{
        historyRouter: historyRouter,
        cacheCheck : cacheCheck
      })
    }
    else if(window.location.pathname == "/write"){
      new Write($main,{
        cacheCheck : cacheCheck
      })
    }
    else{
      new Notfound($main);
  }
  }

  
}
