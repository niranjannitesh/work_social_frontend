<script>
export default {
  props: ["title", "titleSlot", "disabled"],
  render() {
    return (
      <div class="app-tabpanel" role="tabpanel">
        {this.$slots.default}
      </div>
    );
  }
};
</script>
