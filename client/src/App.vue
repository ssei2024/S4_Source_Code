<template>
    <div class="bg-black text-white overflow-hidden">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
    components: {
        Header
    }
}
</script>