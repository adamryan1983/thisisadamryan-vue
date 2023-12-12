<template>
  <div class="resumeContainer">
    <div>
      <h3>
        <span>adamryan-resume.txt</span>
      </h3>
      <div>=======================</div>
      <div class="terminalContainer">
        <v-shell
          :banner="state.banner"
          :shell_input="state.sendToTerminal"
          :commands="state.commands"
          @shell_output="prompt"
        >
        </v-shell>
        <div
          :class="resumeRef ? 'resumeContent' : 'resumeInvisible'"
          ref="resumeContent"
          id="resumeContent"
        >
          <pre class="ascii">
                  <code>{{`
             _                   _____                   
    /\\      | |                 |  __ \\                  
   /  \\   __| | __ _ _ __ ___   | |__) |   _  __ _ _ __  
  / /\\ \\ / _' |/ _' | '_ ' _ \\  |  _  / | | |/ _' | '_ \\ 
 / ____ \\ (_| | (_| | | | | | | | | \\ \\ |_| | (_| | | | |
/_/    \\_\\___|\\__,__|_| |_| |_| |_|  \\_\\__, |\\__ _|_| |_|   B.A.
                                        __/ |            
                                       |___/                
            `}}</code>
                </pre>
          <div class="contactInfo">
            <div>address: Bell Island, NL, A0A4H0</div>
            <div>ph: 709 690 8380</div>
            <div>email: adam@thisisadamryan.me</div>
          </div>
          <div>
            <div>
              <span class="textBlue">### Objective ###</span>
            </div>
            <div class="contentText">
              Seeking employment in the field of information technology by using
              skills obtained in a combination of formal training, personal
              growth and learning, and past employment.
            </div>
            <div>
              <span class="textBlue">### Education ###</span>
            </div>
            <div class="contentText">
              2019 - 2022
              <div class="textRed">
                Programmer Analyst - College of the North Atlantic{{ " " }}
                <span class="locationResume"> St John's, NL </span>
              </div>
              <div class="contentText">
                Completed a 3-year program at the College of the North Atlantic
                which incorporated work terms as part of the program. Areas of
                study included Python programming, HTML5, CSS, computer
                security, database creation, Microsoft Office, Javascript, and
                Java.
                <div class="textYellow">GPA: 4.0</div>
              </div>
            </div>
            <div class="contentText">
              2004 - 2009
              <div class="textRed">
                Bachelor of Arts, English Major - Memorial University{{ " " }}
                <span class="locationResume"> St John's, NL </span>
              </div>
              <div class="contentText">
                Successfully graduated from Memorial University in 2009 with a
                B.A. with an English major.
              </div>
            </div>

            <div>
              <span class="textBlue">### Experience ###</span>
            </div>
            <div class="contentText">
              2021 - Current
              <div class="textRed">
                Sr Customer Support/Ops Analyst - Verafin{{ " " }}
                <span class="locationResume"> St. John's, NL </span>
              </div>
              <div class="contentText">
                Part of the support team which include duties such as ensuring
                data is being properly entered and maintained in the client
                database, working with a team, and problem solving issues using
                Vim, postgresql, java, and AWS.
              </div>
            </div>
            <div class="contentText">
              2021 (Work Term)
              <div class="textRed">
                Web Developer - Target Marketing{{ " " }}
                <span class="locationResume"> St. John's, NL </span>
              </div>
              <div class="contentText">
                Responsible for building websites using React/NextJS, creating
                and implementing Firebase for a backend, deploying sites to a
                VPS, creating/maintaining Wordpress sites, and
                creating/maintaining email marketing campaigns for mailing
                lists.
              </div>
            </div>
            <div class="contentText">
              2014 - Current
              <div class="textRed">
                Owner/Photographer - Adam Ryan Photography{{ " " }}
                <span class="locationResume"> Bell Island, NL </span>
              </div>
              <div class="contentText">
                Created my own photography company which supplied living income
                for multiple years. Responsiblities incude designing my own
                website for the business, creating a logo, operating a camera,
                editing photos with Adobe software, managing expenses,and
                interacting with clients.
              </div>
            </div>
            <div class="contentText">
              2016 - 2019
              <div class="textRed">
                Station Manager @ Radio Bell Island{{ " " }}
                <span class="locationResume"> Bell Island, NL </span>
              </div>
              <div class="contentText">
                Ran a community radio station which was governed by a board of
                directors. Responsibilities included creating a webpage for the
                station, creating commercials and ads for potential clients,
                recording radio programs, interviewing people for radio
                syndication, writing radio programs, and handling finances of
                the station operation.
              </div>
            </div>

            <div>
              <span class="textBlue">### Skills ###</span>
            </div>
            <div class="skillSection">
              <div>
                Professional
                <div class="textRed">
                  <span>{{ ">" }} Problem Solving</span>
                </div>
                <div class="textRed">{{ ">" }} Time Management</div>
                <div class="textRed">
                  {{ ">" }} Adapting to current trends/technology
                </div>
                <div class="textRed">{{ ">" }} Writing</div>
                <div class="textRed">{{ ">" }} Creative</div>
              </div>
              <div>
                Technical
                <div class="textRed">{{ ">" }} Flutter/Dart</div>
                <div class="textRed">{{ ">" }} React framework</div>
                <div class="textRed">{{ ">" }} NextJS framework</div>
                <div class="textRed">{{ ">" }} VueJS framework</div>
                <div class="textRed">{{ ">" }} Python</div>
                <div class="textRed">{{ ">" }} Tailwind CSS framework</div>
                <div class="textRed">{{ ">" }} Github</div>
              </div>
            </div>
          </div>
          <p>
            <span class="textYellow">adamryan@localhost</span>:
            <span class="textBlue">~</span>
            <span class="textPink">$ </span>
          </p>
          <p>
            <span class="textYellow">adamryan@localhost</span>:
            <span class="textBlue">~</span>
            <span class="textPink">$ </span>
          </p>
          <p>
            <span class="textYellow">adamryan@localhost</span>:
            <span class="textBlue">~</span>
            <span class="textPink">$ </span>exit
            <span class="blinkingCursor">|</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useThemeStore } from "../stores/themeStore";

const resumeRef = ref(false);
const store = useThemeStore();

const state = reactive({
  sendToTerminal: "",
  banner: {
    header: "Resume Boot Loader 5.5",
    subHeader: "",
    helpHeader: 'Enter "help" for more information.',
    emoji: {
      first: "📁",
      second: "📂",
      time: 750,
    },
    sign: "adamryan@localhost ~ $",
    img: {
      align: "left",
      link: "/images/headshot.webp",
      width: 100,
      height: 100,
    },
  },
  commands: [
    {
      name: "info",
      get() {
        return `<p>Created by Adam Ryan</p>`;
      },
    },
    {
      name: "resume",
      get() {
        resumeRef.value = true;
        return "loading adamryan-resume.txt";
      },
    },
  ],
});

const prompt = (value: string) => {
  if (value.trim() === "ifconfig") {
    state.sendToTerminal = `
    Wi-Fi wireless network card:
        
    Local link IPv6 address. . . : fe80 :: 340f: 6f02: 41e9: 477b% 24
    IPv4 address. . . . . . . . .: 192.168.1.2
    Subnet mask. . . . . . . . . : 255.255.255.0
    Default Gateway. . . . . . . : 192.168.1.1`;
  } else {
    state.sendToTerminal = `'${value}' is not recognized as an internal command or external,
an executable program or a batch file`;
  }
};
</script>

<style lang="scss" scoped>
@use "../constants/variables.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

.resumeContainer {
  padding: 3rem 4rem;
  margin: 2rem 0 0 2rem;
  & h1,
  h2,
  h3,
  h4,
  h5 {
    color: $headerColor;
    font-weight: bold;
  }
}

.resumeInvisible {
  display: none;
}

.ascii {
  margin: -2rem 0 1rem 0;
  height: 10rem;
  line-height: 1rem;
  align-self: center;
  font-size: 0.9rem;
}

.contactInfo {
  display: flex;
  flex-direction: row;
  align-self: center;
  padding-bottom: 2rem;
  & > * {
    width: 40%;
  }
}

.resumeContent {
  display: flex;
  background: black;
  flex-direction: column;
  padding: 1.5rem 1.5rem 1rem 5rem;
}

.terminalContainer {
  font-family: "VT323", monospace;
  background: black;
  padding: 1rem 4rem;
  width: 90%;
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin: 2rem 0;
}

.skillSection {
  display: flex;
  flex-direction: row;
  & > * {
    padding: 0 2rem;
    width: 50%;
  }
}

.contentText {
  margin: 0.3rem 2rem 1rem;
}

.locationResume {
  padding-left: 2rem;
  font-style: italic;
}

.textYellow {
  color: #fbbf24;
}
.textBlue {
  color: #60a5fa;
}
.textPink {
  color: #f472b6;
}
.textRed {
  color: #dc2626;
  & > div {
    margin-left: 2rem;
  }
}

//blinking cursor animation
@mixin animate($name, $duration, $iteration, $direction) {
  -webkit-animation-duration: $duration;
  -moz-animation-duration: $duration;
  -o-animation-duration: $duration;
  animation-duration: $duration;

  -webkit-animation-iteration-count: $iteration;
  -moz-animation-iteration-count: $iteration;
  -o-animation-iteration-count: $iteration;
  animation-iteration-count: $iteration;

  -webkit-animation-name: $name;
  -moz-animation-name: $name;
  -o-animation-name: $name;
  animation-name: $name;

  -webkit-animation-direction: $direction;
  -moz-animation-direction: $direction;
  -o-animation-direction: $direction;
  animation-direction: $direction;
}
@mixin animate2($name, $duration, $direction) {
  -webkit-animation-duration: $duration;
  -moz-animation-duration: $duration;
  -o-animation-duration: $duration;
  animation-duration: $duration;

  -webkit-animation-name: $name;
  -moz-animation-name: $name;
  -o-animation-name: $name;
  animation-name: $name;

  -webkit-animation-direction: $direction;
  -moz-animation-direction: $direction;
  -o-animation-direction: $direction;
  animation-direction: $direction;
}

@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}

@include keyframes(pulsate) {
  from {
    color: transparent;
  }
  to {
    color: white;
  }
}

@mixin pulsate {
  @include animate(pulsate, 0.75s, infinite, step-end);
}
@mixin typing {
  @include animate2(typing, 3.5s, steps(30, end));
}

.blinkingCursor {
  font-weight: 200;
  font-size: 25px;
  padding-left: 1rem;
  color: #2e3d48;
  @include pulsate;
}
.typing {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid white; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  @include typing;
  // animation:
  //   typing 3.5s steps(40, end),
  //   pulsate .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

//responsive queries
@media only screen and (max-width: 1024px) {
  .contactInfo {
    margin: 0;
    & > * {
      padding: 1rem;
    }
  }
}

@media only screen and (max-width: 960px) {
  .resumeContainer {
    width: 100%;
    margin: 0;
  }

  .terminalContainer {
    width: 100%;
    margin: 1rem 0;
    padding: 0;
  }

  .resumeContent {
    padding: 1.5rem 0rem 1rem 1rem;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;
    margin-bottom: 1rem;
    & > * {
      width: 100%;
      padding: 0;
    }
  }
  .ascii {
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-top: 1rem;
    height: 8rem;
  }
}
@media only screen and (max-width: 720px) {
  .ascii {
    font-size: 0.6rem;
    margin-top: 0.2rem;
    height: 7rem;
  }
}
@media only screen and (max-width: 520px) {
  .ascii {
    margin-top: 1rem;
    font-size: 0.45rem;
    line-height: 0.7rem;
    height: 7rem;
  }
}
</style>

<!-- 
            <p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span> cd adamryan/resume
            </p>
            <p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span> sudo nano
              adamryan-resume.txt{{' '}}
            </p>
            <p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span>
              {{'>'}} Enter admin password:{{' '}}
            </p>
            <p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span>
              {{'>'}} Password correct
            </p>
            <p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span>
              {{'>'}}{{' '}}
              <span>{{`${words[state.index].substring(0, state.subIndex)}${
                state.blink ? '|' : ' '
              }`}}</span>
            </p>
              <span class="textYellow">adamryan@localhost</span>:
              <span class="textBlue">~</span>
              <span class="textPink">$ </span> -->
