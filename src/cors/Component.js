export default class Component {
  $target;
  $state;
  $props;
  constructor ($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
  }
  setup () {}
  mounted () {}
  template () { return ''; }
  render () {
    this.$target.innerHTML = this.template();
    this.mounted()
    this.setEvent()
  }
  setEvent () {}
  setState (newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}