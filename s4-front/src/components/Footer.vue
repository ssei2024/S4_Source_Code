<template>
    <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 leading-9 py-2 lg:py-4 xl:py-6 lg:px-10 xl:px-10 2xl:px-20 font-ray" style="background-color:#121212;">
        <div class="m-auto text-left hidden sm:block">
            <p class="font-ray">ارتباط با ما</p>
            <p class="font-ray">sharif.software.engineering@gmail.com</p>
        </div>
        <div class="m-auto text-center md:pr-10 lg:pl-2">
            <img class="mx-auto mb-2" :src="SharifLogo" alt="!!!">
            <p class="font-ray text-xl" dir="rtl">تمامی حقوق برای دستیاران آموزشی درس مهندسی نرم‌افزار محفوظ است.</p>
        </div>
        <div class="text-right font-black text-lg m-auto hidden lg:flex lg:flex-col lg:gap-4">
            <a class="font-ray" href="/about-us">درباره ما</a>
            <a class="font-ray" href="https://docs.google.com/forms/d/e/1FAIpQLSfn2jFqvjDeWrvOs5aRRJqtzcuiFTlgc9pvxYappAklPAW4WQ/viewform?usp=sf_link">همکاری با ما</a>
        </div>
    </div>
</template>

<script>
import router from "@/libraries/vue-router.js"
import logo from "@/assets/svg/logo.svg"
import back from "@/assets/svg/back-button.svg"
import SharifLogo from "@/assets/svg/sharif-logo.svg"
export default {
    data() {
        return {
            logo,
            back,
            SharifLogo,
            headerItems: ["چیست S4", "زمان‌بندی", "درباره ما", "حامیان"]
        }
    },
    methods: {
        isLandingPage() {
            return router.currentRoute.value.name === "landing"
        },
        goBack() {
            router.go(-1)
        }
    },
}
</script>