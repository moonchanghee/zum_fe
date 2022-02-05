import Component from "../../cors/Component";


export default class Write extends Component {

 

template () {

        return `
        <h1>작성 페이지</h1>    
        <input type="text" class="title" value="" placeholder = "제목"/>
        </br></br>
        <input type="text" class="contents" value="" placeholder = "내용"/>
        </br></br>
        <input type="text" class="writer" value= "" placeholder = "작성자"/>
        </br></br>
        <button class = "submit">전송</button>
        `
      }

      setEvent2(){
        let {cacheCheck,historyRouter} = this.$props
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜

        this.$target.querySelector('.submit').addEventListener('click' , () => {
          console.log("length" , this.$props.length) 
          let data = {
                title : this.$target.querySelector('.title').value ,
                writer : this.$target.querySelector('.writer').value ,
                contents : this.$target.querySelector('.contents').value ,
                date : year + "." +month + "."+date
              }
              fetch("http://localhost:3001/write", 
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",//해석
                },
                body: JSON.stringify(data)
              }).then((response) => response.json()).then((e) => {
                if(e.msg === "success"){
                  window.alert(e.msg) 
                  cacheCheck(true)
                  history.back()
                }else{
                  window.alert(e.msg) 
                }})
        }
        
      )
      }

}
