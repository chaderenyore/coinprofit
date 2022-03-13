<template>
  <nav>
    <TheHeader></TheHeader>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --light-color: #f2f8ff;
  --dark-color: #13141c;
  --third-color: #ffffff; /* for white background like the boxes, FAQ and the footer section */
  --fourth-color: #525b6d; /* for paragraphs..*/
  --fifth-color: #000000; /* for paragraphs with black background*/
  --tab-sm: 48.75rem;
}

.dark-theme {
  --light-color: #13141c;
  --dark-color: #f2f8ff;
  --third-color: #09090b;
  --fourth-color: #f2f8ff;
  --fifth-color: #f2f8ff;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: var(--light-color);
  font-family: "Montserrat", sans-serif;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  border: 2px solid #95c8d1;
}
::-webkit-scrollbar-thumb {
  border-radius: 30px;
  background-color: #3374ea;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.backdrop.active {
  width: 100vw;
  height: 94vh;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.scrollTop {
  position: fixed;
  bottom: 400px;
  right: 30px;
  z-index: 10; /* Make sure it does not overlap */
  background: #ffa94f url("./assets/images/rocket.png");
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 25px;
  border-radius: 50%;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.scrollTop.scrollactive {
  bottom: 40px;
  visibility: visible;
  opacity: 1;
}
</style>
