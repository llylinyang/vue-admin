<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    created() {
        this.axios.get('/api/getArea').then(res => {
            console.log('provinces=>', JSON.parse(res.data.province));
            console.log('citys=>', JSON.parse(res.data.city));
            console.log('areas=>', JSON.parse(res.data.area));
        }).catch(res => {
            console.log('error=>', res);
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
