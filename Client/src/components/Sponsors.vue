<template>
    <div class="font-ray text-center mt-20 mx-auto w-full px-5 sm:px-0 sm:w-2/3 lg:w-1/2 text-white" dir="rtl">
        <p class="text-4xl font-black mb-20 font-ray">حامیان</p>
        <div class="flex flex-col xl:flex-row gap-8">
            <img :src="Datin" alt="datin" class="w-40 mx-auto">
            <div style="border-color:#B3F5CD; color:#B3F5CD; border-width: 1px;" class="text-base text-right p-4 rounded-lg leading-10">
                داتین با مدرسه داتین به کمک افراد مشتاقی می‌آید که به‌دنبال کسب تجربه در فضای کاری شرکت‌های نرم‌افزاری هستند. مدرسه داتین، اقدام داتین برای پرورش نیروهای متخصص در فضای مالی و بانکی است. افرادی که وارد مدرسه داتین می‌شوند، با همراهی منتورها روی پروژه‌های
                واقعی کار می‌کنند و با توانمندسازی در حوزه فنی و کاری، برای حل مسائل واقعی کسب‌وکاری آماده می‌شوند. داتین شرکت نرم‌افزاری با بیش از ۱۷۰۰ نفر متخصص است که در شهرهای تهران، پردیس، مشهد و اصفهان دفتر دارد و افراد از سراسر کشور با آن همکاری دارند.
                این شرکت علاوه بر طراحی و تولید نرم‌افزارهای مورد نیاز بانک‌ها، بیمه‌ها و‌سازمان‌های مالی، شعبه دیجیتال بانک پاسارگاد را به نام «ویپاد» که یک نئوبانک است، تولید و توسعه داده است.
            </div>
        </div>
        <button @click="goTo('https://ats.hire.camp/dotin')" style="background-color:#B3F5CD;" class="font-ray text-black px-4 py-2 rounded-lg font-black text-2xl my-10">فرصت های شغلی داتین</button>
    
        <div class="flex flex-col xl:flex-row gap-8">
            <img :src="Yektanet" alt="yektanet" class="w-40 mx-auto">
            <div style="border-color:#FFFDCA; color:#FFFDCA; border-width: 1px;" class="text-xl text-right p-4 rounded-lg leading-10">یکتانت بزرگترین پلتفرم تبلیغات آنلاین ایران است. ما در یکتانت به دنبال توسعه و ارائه‌ی زیرساخت جامع دیجیتال مارکتینگ هستیم و ماموریت‌ ما این است که به صورت مستمر نوآوری داشته باشیم. در راستای همین هدف تمام تلاش خود را می‌کنیم که محل کار را به
                محیطی پر از خلاقیت و ایده تبدیل کنیم.</div>
        </div>
        <button @click="goTo('https://careers.yektanet.com/')" style="background-color:#FFF84B;" class="font-ray text-black px-4 py-2 rounded-lg font-black text-2xl my-10">فرصت های شغلی یکتانت</button>
    </div>
</template>

<script>
import Datin from "@/assets/svg/datin.svg"
import Yektanet from "@/assets/svg/yektanet.svg"
export default {
    data() {
        return {
            Datin,
            Yektanet
        }
    },
    methods: {
        goTo(location){
            window.location = location
        }
    },

}
</script>