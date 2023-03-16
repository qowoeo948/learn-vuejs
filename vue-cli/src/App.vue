<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewstr"
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

// new Vue({
//   data: {
//     str: 'hi'
//   }
// });

//위에랑 같은 거임, data내부에 reutnr을 꼭 넣어줘야함
export default {
  data: function() {
    return {
      str: 'Header',
    }
  },
  components: {
    'app-header' : AppHeader,
  },
  methods: {
    renewstr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>