<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">DashBoard</h1>

    <v-content>
      <v-container class="my-3">
        <v-row class="mb-3 ml-2">
          <v-btn small plain @click="sortBy('title')">
            <v-icon dark class="mr-2">topic</v-icon>
            <span>By Project Name</span>
          </v-btn>
        
          <v-btn small plain @click="sortBy('person')">
            <v-icon dark class="mr-2">person</v-icon>
            <span>By Person</span>
          </v-btn>
        </v-row>

        <v-card flat class="pa-5 grey lighten-4" v-for="project in projects" :key="project.title">
          <v-row no-gutters :class="`pa-3 project ${project.state}`">
            <v-col cols="12" md="6">
              <div class="caption grey--text"> Project Title </div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="4">
              <div class="caption grey--text"> Person </div>
              <div>{{ project.person }}</div>
            </v-col>
            <v-col cols="8" md="2" sm="5">
              <div class="caption grey--text"> Due </div>
              <div>{{ project.due }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="3">
              <div class="caption grey--text">  State </div>
              <div>{{ project.state }}</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects : [
          {title: '', person: 'AkeNeko', due: '2019.06~2019.07', state: 'complete'},
          {title: 'K-means clustering', person: 'Cat Tower', due: '2021.03~2021.07', state: 'complete'},
          {title: 'AK-means clustering', person: 'Cat Tower', due: '2021.03~2021.07', state: 'complete'},
          {title: 'BK-means clustering', person: 'Cat Tower', due: '2021.03~2021.07', state: 'complete'},
          {title: '포트폴리오 제작', person: 'AkeNeko', due: '2021.11 ~', state: 'ongoing'}
        ]
      }
    },
    methods : {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
      }
    }
  }
</script>

<style>
  .project.complete {
    border-left: 4px solid #3cd;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
</style>
