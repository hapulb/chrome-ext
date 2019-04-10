import Component from 'vue-class-component';

@Component
export default class AppFooter {
  render() {
    return (
      <div class="app-footer">
        <b-icon class="app-setting" pack="fas" icon="sliders-h" />
      </div>
    );
  }
}
