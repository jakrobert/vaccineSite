<template>
  <div class="userAppointments">
    <UserAppointmentsHeader />
    <AppointmentsSchedule />
  </div>
</template>

<script>
import UserAppointmentsHeader from "../components/appointments/UserAppointmentsHeader.vue";
import AppointmentsSchedule from "../components/appointments/AppointmentsSchedule.vue";
export default {
  components: {
    UserAppointmentsHeader,
    AppointmentsSchedule,
  },
};
</script>

<style scoped>
</style>