import Component from "../../cors/Component";

export default class Detail extends Component {
  
  setup () {
    this.$state =  {
      detail : [{}],
    };
  }
    

  template () {
    return `
    <h1>상세 페이지</h1>
    <form>
        제목 :  ${this.$state.detail[0].title}</br>
        작성자 : ${this.$state.detail[0].writer} <br/>
        작성시간 : ${this.$state.detail[0].date}<br/>
        내용 : ${this.$state.detail[0].contents}<br/>
    </form>

    <div>
     <button id = "upBtn">수정</button>
     <button id = "delBtn">삭제</button>
     <button id = "backBtn">목록</button>
    </div>
    `
  }

  setEvent(){
    fetch("http://localhost:3001/detail" +window.location.search )
    .then((response) => response.json())
    .then((data) => this.setState({
      detail: data.data
  }))
  }

  setEvent2(){
    const { historyRouter } = this.$props;

    this.$target.querySelector('#upBtn').addEventListener('click', () => {
      console.log("수정")
      const pk = window.location.search
      let url = '/modify' + pk 
      historyRouter(this.$state.detail[0] ,null,url)
  });

    this.$target.querySelector('#delBtn').addEventListener('click', () => {
    fetch("http://localhost:3001/detail" + window.location.search,{method: "delete"})
    .then((response) => response.json()).then((e) => {
      if(e.msg === "success"){
        window.alert(e.msg) 
        history.back()
      }else{
        window.alert(e.msg) 
      }})
  });
    this.$target.querySelector('#backBtn').addEventListener('click', () => {
    console.log("목록")
    history.back()
  });

  }
}


