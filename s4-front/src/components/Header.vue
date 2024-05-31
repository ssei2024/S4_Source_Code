<template>
    <div class="px-5 flex flex-row-reverse pt-16 sm:px-10 lg:px-52 font-ray mx-auto">
        <img :src="logo" class="ml-10 block cursor-pointer" @click="goToLanding" />
     
        <a class="ml-10 my-auto hidden sm:block" href="/#s4">چیستS4</a>
        <a class="ml-10 my-auto hidden sm:block" href="/#timing">زمان‌بندی</a>
        <a class="ml-10 my-auto" href="/about-us">درباره‌ما</a>
        <a class="ml-10 my-auto" href="/#sponsors">حامیان</a>
    
        <div v-if="isLandingPage()" class="flex-1 flex">
            <a class="bg-white text-black py-2 px-6 my-auto font-black text-2xl rounded-lg" href="/signup">ثبت‌نام</a>
        </div>
        <div v-else class="flex-1 flex">
            <img :src="back" class="ml-10 hover:cursor-pointer w-7" @click="goBack" />
        </div> 
    </div>
</template>

<script>
import router from "@/libraries/vue-router.js"
import logo from "@/assets/svg/logo.svg"
import back from "@/assets/svg/back-button.svg"
export default {
    data() {
        return {
            logo,
            back,
        }
    },
    methods: {
        isLandingPage() {
            return router.currentRoute.value.name === "landing"
        },
        goBack() {
            router.go(-1)
        },
        goToLanding() {
            router.push("/")
        }
    },
}
</script>