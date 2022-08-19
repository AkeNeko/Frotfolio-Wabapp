<template>
    <div class="team">
        <h1>Person</h1>

        <v-container >
            <v-row>
                <v-col cols="12" sm="4" md="3" v-for="person in team" :key="person.name">
                    <v-card flat outlined class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100">
                                <img :src="person.avatar" :href="{}">
                            </v-avatar>
                        </v-responsive>

                        <v-card-text>
                            <div>{{person.name}}</div>
                            <div>{{person.role}}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                team : [
                    {name: '강민석', role: 'Database Developer, Back-end Developer, Team Leader', avatar: '/photo1.png'},
                    {name: '박지훈', role: 'Web Developer, Full-stack Developer', avatar: '/photo.JPG'},
                    {name: '이동현', role: 'Back-end Developer, Team Leader', avatar: '/photo1.png'},
                    {name: '이병관', role: 'Back-end Developer, Team Leader', avatar: '/photo1.png'},
                    {name: '정재교', role: 'Back-end Developer', avatar: '/photo1.png'},
                    {name: '황성재', role: 'Full-stack Developer, Team Leader', avatar: '/photo1.png'}
                ]
            }
        }
    }
</script>
