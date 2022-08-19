<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Add New Project
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                <span class="text-h5">Add s New Project</span>
            </v-card-title>

            <v-card-text>
                <v-form class="px-3"> 
                    <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Picker without buttons"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>

                    <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
          </v-card-text>
      </v-card>
    </v-dialog>
</template>


<script>
import db from '/@/fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: '',
            person: '',
            status: '',

            menu2: false,
        }
    }  ,
    methods : {
        submit() {
            const project = {
                title: db.title,
                content: db.content,
                due: db.due,
                person: db.person,
                status: db.status
            }
            
        }
    } 
}
</script>