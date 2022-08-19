<template>
    <div class="project">
        <h1>Project</h1>

        <v-container>
            <v-expansion-panels>
                <v-expansion-panel v-for="project in projects" :key="project.title">
                    <v-expansion-panel-header>
                        <h3>{{ project.title }}</h3>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <div>
                          <h4>프로젝트 소개</h4>
                          {{ project.content }}
                        </div>

                          <br>

                        <div>
                          <h4>사용 언어</h4>
                          {{ project.language }}
                        </div>

                          <br>
                        <div>
                          <h4>사용 알고리즘 or 라이브러리(기능)</h4>
                          {{ project.used }}
                        </div>

                        <br>

                        <div>
                          <h4>실행 결과</h4>
                        </div>
                        <v-stepper
                          v-model="project.e6"
                          vertical
                        >
                          <v-stepper-step
                            :complete="project.e6 > 1"
                            step="1"
                          >
                          </v-stepper-step>

                          <v-stepper-content step="1">
                            <div>
                              <img :src="project.img1">
                              <p>{{ project.text1 }}</p>
                            </div>
                            <v-btn
                              color="primary"
                              @click="project.e6 = 2"
                            >
                              Continue
                            </v-btn>
                          </v-stepper-content>

                          <v-stepper-step
                            :complete="project.e6 > 2"
                            step="2"
                          >
                          </v-stepper-step>

                          <v-stepper-content step="2">
                            <div>
                              <img :src="project.img2">
                              <p>{{ project.text2 }}</p>
                            </div>
                            <v-btn
                              color="primary"
                              @click="project.e6 = 3"
                            >
                              Continue
                            </v-btn>
                          </v-stepper-content>

                          <v-stepper-step
                            :complete="e6 > 3"
                            step="3"
                          >
                          </v-stepper-step>

                          <v-stepper-content step="3">
                            <div>
                              <img :src="project.img3">
                              <p>{{ project.text3 }}</p>
                            </div>
                            <v-btn
                              color="primary"
                              @click="project.e6 = 4"
                            >
                            Continue
                            </v-btn>
                          </v-stepper-content>

                          <v-stepper-step step="4">
                          </v-stepper-step>
                          <v-stepper-content step="4">
                            <div>
                              <img :src="project.img4">
                              <p>{{ project.text4 }}</p>
                            </div>
                            <v-btn
                              color="primary"
                              @click="project.e6 = 1"
                            >
                              Back To First Step
                            </v-btn>
                          </v-stepper-content>
                        </v-stepper>

                        <br>

                        <div>
                          <h4>후기 및 개선점</h4>
                          {{ project.reformation }}
                        </div>
                        
                        <br>

                        <div class="font-weight-bold">
                          Due By {{ project.due }}
                        </div>

                        <hr>

                        <div class="font-weight-bold grey--text">
                          Made By {{ project.person }}
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        projects : [
          {title: 'K-means clusterring',
          person: '박지훈', 
          due: '2021.05~2021.06', 
          state: 'complete',
          content: 'K-means clustering 알고리즘을 사용하여 c++로 .NET Framework에서 지원하는 Windows Form App으로 좌표를 K값의 변동에 따른 각 클러스터의 군집 정도와 수행시간을 그룹화 및 시각화 한 프로그램',
          language: 'C++',
          used: '.net framework Windows From, K-means Clustering Algorithm',
          img1: '/K-means/K-means1.png',
          img2: '/K-means/K-means2.png',
          img3: '/K-means/K-means3.png',
          img4: '/K-means/K-means4.png',
          text1: '데이터 셋이 1000개 일 때 클러스터의 수가 3일 경우',
          text2: '데이터 셋이 1000개 일 때 클러스터의 수가 10일 경우',
          text3: '데이터 셋이 1000개 일 때 클러스터의 수가 K개일 경우 (K = √데이터셋의 갯수/2)',
          text4: '데이터 셋의 갯수에 따른 K-means Clustring의 수행 시간',
          reformation: '4차 산업 혁명의 중요 도에 따라 C++로 K-means Clustring 알고리즘을 사용해서 데이터를 그룹화 하는것을 해볼수 있어서 데이터 셋을 x, y 좌표가 아닌 위도 경도를 이용해서 지도상에의 생물 자생 분포도를 만들거나 영화 타이틀별 매출 현황에 적용해 보는것이 실용성이 있음',
          e6: 1},

          {title: 'Cafe Pos System',
          person: '박지훈',
          due: '2018.11~2018.12',
          state: 'complete',
          content: 'JAVA GUI라이브러리와 파일 저장 및 불러오는 라이브러리를 이용하여 주문을 밭고 파일 입출력을 통해 일일 매출을 확인할 수있는 간단한 Pos System',
          language: 'JAVA',
          used: 'JAVA라이브러리 중 Contaner, javax.swing, FileWriter, event, PrintWriter 등 을 사용',
          img1: '/pos/pos1.JPG',
          img2: '/pos/pos2.JPG',
          img3: '/pos/pos3.JPG',
          img4: '/pos/pos4.JPG',
          text1: 'JAVA에서 지원하는 GUI 라이브러리를 이용하여 POS시스템의 주문을 등록하는 화면',
          text2: 'JTable 메쇼드를 이용하여 주문할 메뉴, 사이즈, 온도, 갯수, 음료를 마실 장소를 선택하면 table에 저장하고 textbox에 출력 이후 주문 확인 버튼을 누르면 text파일로 저장',
          text3: '메출 확인을 누르면 새 프레임에 매출을 확인하는 화면 출력',
          text4: '일일 매출확인 탭을 ',
          reformation: 'JAVA라이브러리를 이용해 간단한 포스 시스템을 데이터 베이스를 이용하고 GUI 디자인을 더 깔끔하게 다듬으면 조금더 나을 프로그램이 될 수 있음',
          e6: 1},

          {title: '게임소개 및 리뷰 페이지',
          person: '박지훈',
          due: '2019.06~2019.07',
          state: 'complete',
          content: 'html과 css를 이용해 이미지에 동영상 링크를 걸고 좌측 고정 메뉴를 넣은 간단한 개임소개 및 리뷰 사이트',
          language: 'html',
          used: 'html, css',
          img1: '/game/game1.JPG',
          img2: '/game/game2.JPG',
          img3: '/game/game3.JPG',
          img4: '/game/game4.JPG',
          text1: '메인 페이지',
          text2: '리그 오브 레전드 소개 및 리뷰 페이지',
          text3: 'GTA5 페이지 소개 및 리뷰 페이지',
          text4: '고정 메뉴를 누를 경우 해당 태그로 이동',
          reformation: '서버밑 데이터 베이스 이용하고 부트스트랩을 이용하면 모던한 웹페이지를 만들 수 있음',
          e6: 1},
          
          {title: '홉필드 알고리즘을 이용한 자음 복구 프로그램',
          person: '박지훈',
          due: '2019.11~2019.12',
          state: 'complete',
          content: '홉필드 알고리즘을 이용하여 문자를 학습 시키고 문자가 깨져서 보일 경우 깨진 문자를 정상적으로 복구 시켜주는 프로그램',
          language: 'C#',
          used: '.net framework Windows From, Hopfield Network Algorithm',
          img1: '/hop/hop1.JPG',
          img2: '/hop/hop2.JPG',
          img3: '/hop/hop3.JPG',
          img4: '/hop/hop4.JPG',
          text1: '손상된 ㄱ 복구',
          text2: '손상된 ㄴ 복구',
          text3: '손상된 ㄷ 복구',
          text4: '손상된 ㄹ 복구',
          reformation: 'ㅁ과 ㄷ 같이 비슷한 문자를 복구 시키면 혼동되어 복구가 되지 않을 때가 있어서 이를 해결해야함',
          e6: 1},
        ],
      }
    }
  }
</script>