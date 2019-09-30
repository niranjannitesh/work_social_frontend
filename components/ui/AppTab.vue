<script>
export default {
  props: ["dataTitle", "titleSlot", "disabled"],
  render() {
    return (
      <div class="app-tabpanel" role="tabpanel" title={this.title}>
        {this.$slots.default}
      </div>
    );
  }
};
</script>
