<template>
    <div class="flex lg:mt-20 xl:mt-24 mb-16">
        <div class="hidden lg:block lg:mr-10 lg:pl-32 xl:w-1/2 xl:pl-48 2xl:pl-56">
            <img class="absolute w-1/4 ml-44 inset-y-48 hidden 2xl:block" :src="Earth" alt="!!!">
            <div class="2xl:relative">
                <p class="mb-3 font-ray text-left text-lg">اولین دوره رویداد نرم افزاری</p>
                <div class="text-8xl font-thin tracking-wide flex flex-col">
                    <p class="leading-tight"><b>S</b>harif</p>
                    <p class="leading-tight"><b>S</b>oftware</p>
                    <p class="leading-tight"><b>S</b>eminar</p>
                    <p class="leading-tight"><b>S</b>eries</p>
                </div>
            </div>
        </div>
        <div class="w-full mt-20 px-10 sm:px-20 lg:mt-0 lg:px-0 text-right lg:pr-32 xl:mx-20 2xl:ml-64 2xl:mr-20 font-ray">
            <p class="text-5xl lg:text-5xl xl:text-7xl font-black mb-5">ثبت‌نام</p>
            <div>
                <p class="font-black lg:text-lg xl:text-2xl mb-2" :class="[!isNameFilled?'text-red-500':'']">* نام و نام خانوادگی</p>
                <input v-model="name" type="text" class="bg-transparent border border-gray text-right py-2.5 rounded-md mb-4 text-xl pr-4 w-full">
                <p class="font-black lg:text-lg xl:text-2xl mb-2" :class="[!isEmailFilled?'text-red-500':'']">* ایمیل</p>
                <input v-model="email" type="text" class="bg-transparent border border-gray text-right py-2.5 rounded-md mb-4 text-xl pr-4 w-full">
                <p class="font-black lg:text-lg xl:text-2xl mb-2" :class="[!isNationalCodeFilled?'text-red-500':'']">کد ملی‌ * <span class="font-thin text-sm text-gray-400"> | برای اخذ مجوز</span></p>
                <input v-model="nationalCode" type="text" class="bg-transparent border border-gray text-right py-2.5 rounded-md mb-4 text-xl pr-4 w-full">
                <p class="font-black lg:text-lg xl:text-2xl mb-2"> شماره دانشجویی <span class="font-thin text-sm text-gray-400 w-full xl:text-sm"> | صرفا برای دانشجویان دانشگاه شریف به جهت هماهنگی مجوز</span></p>
                <input v-model="studentId" type="text" class="bg-transparent border border-gray text-right py-2.5 rounded-md mb-4 text-xl pr-4 w-full">
                <p class="font-black lg:text-lg xl:text-2xl mb-2"> رزومه <span class="font-thin text-sm text-gray-400 w-full xl:text-xs"> | جهت هماهنگی و ریفرال به حامی رویداد</span></p>
                <span class="text-gray-400 text-sm" dir="rtl">(لطفا فایل ارسالی PDF و حداکثر 20 مگابایت باشد.)</span>
    
                <div class="border-4 border-gray-600 w-full p-2.5 mb-7">
                    <input type="file" @change="handleFileUpload" class="border-4 w-full border-dotted p-1">
                </div>
                <div class="flex flex-row-reverse mb-10">
                    <p class="font-black lg:text-lg xl:text-2xl mb-2 ml-10"> :نحوه شرکت در رویداد</p>
                    <select class="text-black rounded-lg" v-model="attendType">
                            <option value="virtual">مجازی</option>
                        </select>
                </div>
                <div v-if="!isSignupDone && !error" class="flex w-full font-ray">
                    <button v-if="!isLoading" class="bg-white text-black w-full py-3 px-20 m-auto font-black text-3xl rounded-lg" @click="checkSignupConditions">ثبت‌نام</button>
                    <button v-else class="buttonload bg-gray-500 text-black w-full py-3 px-20 m-auto font-black text-3xl rounded-lg" disabled>... لطفا صبر کنید</button>
                </div>
                <div v-else-if="!isSignupDone && error" class="w-full">
                    <p dir="rtl" class="bg-red-950 border border-red-600 text-red-600 py-2.5 rounded-md mb-4 text-xl pr-4 font-ray">مشکلی پیش آمده است. لطفا با پشتیبانی تماس بگیرید.</p>
                </div>
                <div v-else class="w-full">
                    <p dir="rtl" class="bg-green-950 border border-green-600 text-green-600 py-2.5 rounded-md mb-4 text-xl pr-4 font-ray">ثبت نام شما تکمیل شد.</p>
                    <p dir="rtl" class="text-right text-sm font-ray">امیدواریم S4 برات مفید باشه 3>. اگر اطلاعاتت رو اشتباه وارد کردی نگران نباش صفحه رو ریفرش کن و دوباره ثبت‌نام کن. هر مشکل دیگه‌ایم به وجود اومد، به اکانت پیشتییانی‌مون تو تلگرام بگو تا بررسی بشه.</p>
                </div>
    
                <ul class="list-disc mt-7 mr-7" dir="rtl" v-if="!isSignupDone && !error">
                    <li>تکمیل فیلد‌های * دار الزامی است.</li>
                    <li>دانشجویان درس مهندسی نرم‌افزار به جهت تکمیل فرایند دریافت نمرات خود، بایستی فیلد «شماره دانشجویی» را پر نمایند.</li>
                    <li>با ثبت‌نام در رویداد در خبرنامه انجمن علمی مهندسی نرم‌افزار عضو می‌شوید.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

import Earth from "@/assets/svg/signup-earth.svg"
import axios from "axios"
export default {
    data() {
        return {
            Earth,
            name: "",
            email: "",
            nationalCode: "",
            studentId: "",
            isNameFilled: true,
            isEmailFilled: true,
            isNationalCodeFilled: true,
            isSignupDone: false,
            error: false,
            selectedFile: "",
            attendType: "virtual",
            isLoading: false,
            allOnSiteUsersCount: 0
        }
    },
    methods: {
        checkSignupConditions() {
            this.isLoading = true

            this.initStates()

            this.checkUnfilledInputs()

            if (!this.isNameFilled || !this.isEmailFilled || !this.isNationalCodeFilled) {
                this.isLoading = false
                return;
            }

            this.sendDataToBack()
        },
        initStates() {
            this.isNameFilled = true;
            this.isEmailFilled = true;
            this.isNationalCodeFilled = true;
            this.error = false;
        },
        checkUnfilledInputs() {
            if (!this.name)
                this.isNameFilled = false;
            if (!this.email)
                this.isEmailFilled = false;
            if (!this.nationalCode)
                this.isNationalCodeFilled = false;
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        async sendDataToBack() {
            const formData = {
                name: this.name,
                email: this.email,
                nationalCode: this.nationalCode,
                studentId: this.studentId,
                attendType: this.attendType
            }

            try {
                await this.submitResume()
                await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, formData).then(() => {
                    this.selectedFile = "";
                    this.isSignupDone = true;
                })
            } catch (e) {
                this.isLoading = false
                this.error = true
                console.log(e);
            }

            this.selectedFile = "";
        }, 
        async submitResume() {
            try {
                const formData = new FormData()
                formData.append('file', this.selectedFile)
                if (this.selectedFile.size / 1000 > 20000 || this.selectedFile.type !== "application/pdf") return;
                await axios.post(`${import.meta.env.VITE_BASE_URL}/resumes`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }) 
            } catch (e) {
                this.isLoading = false
                this.error = true
                console.log(e);
            }
        },
    },
}
</script>
