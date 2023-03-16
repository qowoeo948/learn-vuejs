<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model='username'>
      </div>
      <div>
          <label for="password">pw: </label>
          <input id="password" type="password" v-model='password'>
      </div>
    <button type='submit'>login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    //component간의 객체가 공유되지 않게 return으로 감싸줘야함
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      /* event.preventDefault(); */
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users/';
      var data = {
        username: this.username,
        password: this.password,
      }

      axios.post(url,data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>