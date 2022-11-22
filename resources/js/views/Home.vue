<template>
    <header>
        <div class="container">
            <div class="row aic">
                <div class="col-6">
                    <img src="@/static/logo.svg" alt="vrisc logo" class="logo">
                </div>
                <div class="col-6 jcfe">
                    <div class="login-btn btn btn-border" @click="login = true; bodyOverflow(false)">Вход</div>
                    <div class="register-btn btn btn-default" @click="register = true; bodyOverflow(false)">Регистрация</div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <AppLoginForm v-if="login" @close="login = false; bodyOverflow(true)" @switchReg="changeModal" @forget="toggleForget()"/>
        <keep-alive>
            <AppForgetPassword v-if="forget" @close="forget = false; bodyOverflow(true)" @change="toggleForget()"/>
        </keep-alive>
        <keep-alive>
            <AppRegisterForm v-if="register" @close="register = false; bodyOverflow(false)" @switchReg="changeModal" />
        </keep-alive>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="home-container">
                        <div class="home-main">
                            <h1>Добро пожаловать,<br> на виртуальный<br> Кубок ИТМО<br> по парусному спорту</h1>
                            <div class="btn btn-default" @click="register = true; bodyOverflow(false)">Принять участие</div>
                        </div>
                        <div class="home-links">
                            <div class="home-link"><div class="home-link__hover"></div><span>Результаты регат</span></div>
                            <div class="home-link"><div class="home-link__hover"></div><span>Регламент</span></div>
                            <div class="home-link"><div class="home-link__hover"></div><span>О проекте</span></div>
                            <div class="home-link"><div class="home-link__hover"></div><span>Рейтинг участников</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {ref} from 'vue';
import AppLoginForm from "../components/public/AppLoginForm.vue";
import AppRegisterForm from "../components/public/AppRegisterForm.vue";
import AppForgetPassword from "../components/public/AppForgetPassword.vue";
import bodyOverflow from "../utils/bodyOverflow.js";

export default {
    name: "Home",
    components: {
        AppLoginForm, AppRegisterForm, AppForgetPassword,
    },
    setup() {
        const login = ref(false);
        const register = ref(false);
        const forget = ref(false);

        const changeModal = () => {
            login.value = !login.value;
            register.value = !register.value;
        };
        const toggleForget = () => {
            login.value = !login.value;
            forget.value = !forget.value;
        };

        return {
            login, register, changeModal,
            bodyOverflow, forget, toggleForget,
        }
    }
}
</script>

<style scoped>

</style>
