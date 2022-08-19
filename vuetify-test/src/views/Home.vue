<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Introduction</h1>

    <v-content>
      <v-container class="my-3">
        <div>
            <v-flex>
              <h1>Developer</h1>
              <v-layout row class="ml-1">
                <v-flex>
                  <h1>AkeNeko</h1>
                </v-flex>

                <v-flex>
                  <img src="/me.JPG">
                </v-flex>
              </v-layout>
            </v-flex>
            <br>
        </div>

        <v-divider></v-divider>

        <h3>학력</h3>
        <div class="pa-2" v-for="school in schools" :key="school.graduation">
          <p>
            {{ school.graduation }}
          </p>
        </div>

        <v-divider></v-divider>
        <h3>진행한 프로젝트</h3>
        <div class="pa-2" v-for="pName in pNames" :key="pName.title">
          <p>
            {{pName.due}}
            {{pName.title}}
          </p>
        </div>

        <v-divider></v-divider>

        <h3>이용하는 프로그래밍 언어</h3>
        <div>
          <template>
              <v-text class="pa-3" v-for="project in projects" :key="project.title">
                {{ project.title }}
                <v-progress-circular
                  class="ma-1"
                  :size="60"
                  :width="10"
                  :value="project.value"
                  :color="project.color"
                >
                  {{ project.value }}
                </v-progress-circular>
              </v-text>
          </template>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        schools: [
          {graduation: '2003년 백양초등학교 입학'}, {graduation: '2009년 백양중학교 입학'}, {graduation: '2012년 동래고등학교 입학'}
        ],
        pNames: [
          {title: 'Cafe Pos System', due: '2018.11~2018.12',value: 90},
          {title: 'Smart Farm', due: '2019.06~2019.07', e6: 1},
          {title: '음식점 전산관리 홈페이지', due: '2019.11~2019.12'},
          {title: 'CCTV 사진 확대시 화질 개선 프로그램', due: '2019.11~2019.12'},
          {title: '문자 복구 프로그램', due: '2021.05 ~ 2021.06'}
        ],
        projects : [
          {title: 'JAVA', value: 80, color: "blue"},
          {title: 'C++', value: 85, color: "green"},
          {title: 'C#', value: 90, color: "red"},
          {title: 'Python', value: 70, color: "pink"},
          {title: 'JSP', value: 70, color: "pink"}
        ]
      }
    }
  }
</script>
