<template>
  <div class="zf-button-group">
      <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from '@vue/runtime-core'
export default {
  name:"ZfButtonGroup",
  setup(props) {

    onMounted(()=>{
      let context = getCurrentInstance();
      let ele = context.ctx.$el;
      let children = ele.children;

      for(let i = 0;i<children.length;i++){
        console.assert(children[i].tagName == 'BUTTON', "包裹的元素必须是button")
      }
    })



  }
}
</script>

<style>

</style>