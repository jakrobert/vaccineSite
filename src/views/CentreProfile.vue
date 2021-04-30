<template>
  <div>
     <CenterInfo/>
     <CenterScheduled/>
  </div>
</template>

<script>
import CenterInfo from '../components/centerProfile/CenterInfo'
import CenterScheduled from '../components/centerProfile/CenterScheduled'
export default {
name:'CentreProfile',
components:{
  CenterInfo,
  CenterScheduled
}
};
</script>

<style scoped>
</style>