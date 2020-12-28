<template>
  <div id="app">
    <mynav v-if="$route.meta.nav"></mynav>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import mynav from '@/components/mynav'
import myfooter from '@/components/myfooter'
export default {
  name: 'App',
  components: {
    mynav,myfooter
  },
  created() {
	let metas = document.getElementsByTagName('meta')
  	var scale = 0.5;
	metas.forEach(val => {
		if (val.name && val.name == 'viewport') {
			val.content = 'width=device-width,initial-scale=1.0'
		}
	})
	let body = document.getElementsByTagName('body')[0]
	body.style.fontSize = '12px'
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>