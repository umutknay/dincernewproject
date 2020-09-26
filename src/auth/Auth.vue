<template>
    <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-primary p-3 border"
                 :class="{'border-primary' : isUser, 'border-success' : !isUser }">
        
                <hr>
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label>E-posta Adresiniz</label>
                        <input v-model="user.email" type="email" class="form-control"
                               placeholder="E-posta adresinizi giriniz">
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" 
                                class="btn btn-block mb-2 btn-primary">
                            Giriş Yap
                        </button>
                        <!-- <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                            {{ isUser ? 'Üye değilim' : 'Üyeliğim var'}}
                        </a> -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {
                user: {
                    email: null,
                    password: null
                },
                isUser: false
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("login", {...this.user, isUser : true })
                .then(response => {
                    this.$router.push("/home")
                })
            }
        }
    }
</script>