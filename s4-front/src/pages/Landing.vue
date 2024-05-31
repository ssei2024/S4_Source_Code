<template>
    <div class="w-full mt-20 mb-28 lg:mb-40">
        <Introduction/>
        <S4 />
        <Sponsors id="sponsors"/>
        <Timing id="timing"/>
        <FAQ/>
    </div>
    <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue"
import Sponsors from '@/components/Sponsors.vue'
import S4 from '@/components/S4.vue'
import Timing from '@/components/Timing.vue'
import Introduction from '@/components/Introduction.vue'
import FAQ from '@/components/FAQ.vue'

export default {
    components: {
        Footer,
        Sponsors,
        S4,
        Timing,
        Introduction,
        FAQ
    }
}
</script>