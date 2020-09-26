<template>
     <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" to="/">Ana Sayfa</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Kullanıcı" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    
</template>
<script>
export default {
     methods: {
      logout() {
        this.$store.dispatch("logout");
        //console.log("test");
        this.$router.push("/auth")
      }
    },
    computed: {
      logoutClass() {
        return {
          'd-none': !this.$store.getters.isAuthenticated
        }
      }
    }
}
</script>

<style scoped>

</style>