<template>
    <div v-if="user">
        <!-- Agar user mavjud bo'lsa, ma'lumotni ko'rsatamiz -->
        <span>{{ user.name }}</span>
        <ul>
            <li v-for="message in messages" :key="message.id">
                {{ message.user.name }}: {{ message.message }}
            </li>
        </ul>
        <input
            v-model="message"
            @keyup.enter="sendMessage"
            placeholder="Xabar yozing..."
        >
    </div>
    <div v-else>
        <!-- User ma'lumotlari yuklanayotgan paytda ko'rsatish -->
        Yuklanmoqda...
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            message: '',
            messages: [],
            user: null, // User uchun boshlang'ich qiymat null
        };
    },
    methods: {
        sendMessage() {
            if (this.message.trim() !== '') {
                axios.post('/chat/send', { message: this.message })
                    .then(() => {
                        this.message = ''; // Xabar yuborilgandan keyin inputni tozalash
                    })
                    .catch(error => {
                        console.error('Xabar yuborishda xato:', error);
                    });
            }
        },
        test() {
            console.log('well');
        }
    },
    mounted() {
        // User ma'lumotlarini yuklash
        axios.get('/api/user')
            .then(response => {
                this.user = response.data; // User ma'lumotlarini saqlash
            })
            .catch(error => {
                console.error('User ma\'lumotlari yuklanmadi:', error);
            });

        this.test();

        // Real-time chat uchun Echo kanali
        window.Echo.channel('chat')
            .listen('ChatMessageSent', (e) => {
                this.messages.push({
                    message: e.message,
                    user: e.user
                });
            });
    }
};
</script>

<style scoped>
/* Bu yerda kerakli CSS qo‘shishingiz mumkin */
</style>
