<template>
  <div>
    <div class="bg-green-10 text-white q-pa-md text-h5">Vital Sign</div>
    <div>
      <q-input
        v-model="text"
        label="รหัสผู้ป่วย"
        stack-label
        :dense="dense"
        class="q-pa-md q-mt-md"
        outlined
        placeholder="XXXXddmmyy"
        hint="ใช้รหัสผู้ป่วย รวมกับตัวเลขวันเดือนปีเกิด"
      />
    </div>
    <div class="q-pt-md" align="center">
      <q-btn label="เข้าสู่ระบบ" rounded color="green-10" @click="loginBtn()" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginBtn() {
      this.$router.push("/confirm");
    }
  }
};
</script>

<style scoped>
</style>