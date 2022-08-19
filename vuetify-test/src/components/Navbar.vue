<template>
    <nav>
        <v-toolbar dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title>PARK JIHUN</v-toolbar-title>
            
            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer"
        absolute
        temporary>
            <v-layout column align-center>
                <v-flex class="mt-4">
                    <v-avatar size="100">
                        <img src="/photo1.png">
                    </v-avatar>
                    <p class="white--gray subheading mt-3">
                        PARK JI HUN
                    </p>
                </v-flex>

                <v-flex class="mt-4 mb-3">
                    <Popup></Popup>
                </v-flex>
            </v-layout>

            <v-list nav dense>
                <v-list-item-group 
                v-model="group"
                active-class="light-blue--text text--darken-4">
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.router">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default{
        data : () => ({
            drawer : false,
            group : null,
            items : [
                {icon : 'mdi-forum', text : 'Introduction', router:'/'},
                {icon : 'mdi-inbox', text : 'My Project', router:'/project'},
                {icon : 'mdi-account-multiple', text : 'Person', router:'/person'},
                {icon : 'mdi-domain', text : 'Dashboard', router:'/dashboard'},
                {icon : 'mdi-message', text : 'Send a Message', router:'/message'}
            ]
        }),
        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>
