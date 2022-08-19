<template>
    <div class="message">
        <h1 class="subheading grey--text">Send a Massage</h1>
        <v-container>
            <div class="px-16 mx-16">
                <br>
                <v-row>
                    <h2>Please leave your e-mail</h2>
                </v-row>
                <v-row>
                    <v-text-field label="e-mail" v-model="emailadd" prepend-icon="email"></v-text-field>
                </v-row>
                <v-row>
                    <v-textarea  label="Information" v-model="text" prepend-icon="edit"></v-textarea>
                </v-row>

                <v-row justify="center">
                    <v-btn color="primary" @click="send">확인</v-btn>
                </v-row>
            </div>

            <br><br>

            <div>
                <div v-for="mail in mails" :key="mail.email">
                    <v-card class="px-16 mx-16">
                    <div>
                        <h3>e-mail</h3>
                        <p class="text-center">{{ mail.email }}</p>
                    </div>
                        <h3>content</h3>
                        <p class="text-center">{{ mail.content }}</p>
                    </v-card>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
//import db from '/@/fb'
export default {
    data() {
        return {
            email: '',
            content: '',
            id: [
                {email: 'dkrakqkrwnl@gmail.com', pw: 'mint1019'}
            ],
            mails: [
                {email: '1234@gmail.com',content: 'qwert'},
                {email: '1234@gmail.com',content: 'asdfasdf'},
            ]
        }
    },methods: {
        send(e) {
            this.mails.push({
                email: e.email,
                content: e.content
            })
        }
    }
}
</script>
