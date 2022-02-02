import Component from "../../cors/Component";


export default class Modify extends Component {

  setup () {
    this.$state =  {
      modify : history.state,
    };
  }
    template () {
console.log(this.$state.modify)

        return `
        <h1>수정 페이지</h1>    
        
        `
      }

      
}