export default class Component {
  $target;
  $state;
  $props;
  constructor ($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent()
  }
  setup () {}
  mounted () {}
  template () { return ''; }
  render () {
    this.$target.innerHTML = this.template();
    this.mounted()
    this.setEvent2()
  }
  setEvent () {}
  setEvent2 () {}
  setState (newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

}
