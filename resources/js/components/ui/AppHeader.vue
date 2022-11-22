<template>
    <header class="dashboard-header">
        <h1><slot /></h1>
        <div class="header-content">
            <div class="btn btn-border support-btn" @click="support = true; bodyOverflow(false)">Обратная связь</div>
            <div class="header-notification">
                <span class="header-notification__counter">1</span>
                <i class="ri-notification-2-fill"></i>
            </div>
        </div>
    </header>
    <keep-alive>
        <AppSupport v-if="support" @close="support = false; bodyOverflow(true)" />
    </keep-alive>
</template>

<script>
import { ref } from 'vue';
import bodyOverflow from "@/utils/bodyOverflow.js";
import AppSupport from "./AppSupport.vue";

export default {
    name: "AppHeader.vue",
    components: {
        AppSupport
    },
    setup() {
        const support = ref(false);


        return {
            support, bodyOverflow
        };
    }
}
</script>
