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

    watch: {
      $route: {
        handler(to) {
          document.title = to.meta.title || "Coinprofit";
        },
        immediate: true,
      },
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  p {
    color: var(
      --dark-color
    ); /* paragraph tags without any styles will have this color code by default. */
  }

  :root {
    --light-color: #f2f8ff;
    --dark-color: #13141c;
    --nav-light: #ffffff;
    --navScroll-light: #ffffff; /*apply this color to the background when you scroll on desktop screen */
    --dropdown-content: #ffffff;
    --navScrollp: #313131;
    --navShadow: #a594941a;
    --third-color: #ffffff; /* for white background like the boxes, FAQ and the footer section */
    --fourth-color: #525b6d; /* for paragraphs..*/
    --fifth-color: #1d1c1c; /* for paragraphs with black background*/
    --help-hero-text: #525b6d;
    --help-hero-card: #ffffff;
    --help-search: #ffffff;
    --help-article-text: #525b6d;
    --help-contact-box: #ffffff;
    --help-contact-box-text: #525b6d;
    --article-container: #ffffff;
    --article-date: #8993a7;
    --article-tag: #ecf5ff;
    --author-bio: #707070;
    --article-text: #525b6d;
    --social-button-container: #f2f8ff;
    --plyr-color-main: #3374ea;
    --help-email-icon: #525b6d;
    /* --fifth-color: #000000; for paragraphs with black background */
  }

  .dark-theme {
    --light-color: #13141c;
    --dark-color: #f2f8ff;
    --nav-light: #09090b;
    --navScroll-light: #310909;
    --navScrollp: #d8d4d4; /* for nav li a  */
    --navShadow: #f1eaea1a;
    --navScroll-light: #160202;
    --dropdown-content: #13141c;
    --navScrollp: #d8d4d4; /* for nav li a  */
    --navShadow: #f1eaea1a;
    --third-color: #09090b;
    --fourth-color: #f2f8ff;
    --fifth-color: #f2f8ff;
    --help-hero-text: #b3bcce;
    --help-hero-card: #1c2029;
    --help-article-text: #b3bcce;
    --help-search: #202230;
    --help-contact-box: #202230;
    --article-container: #09090b;
    --article-date: #fccf3b;
    --article-tag: #202230;
    --author-bio: #b3bcce;
    --article-text: #b3bcce;
    --help-contact-box-text: #f2f8ff;
    --social-button-container: #202230;
    --help-email-icon: transparent;
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

  @media only screen and (max-width: 1024px) {
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
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

/* With this code, you can't click on a link that will open on a new tab. */

[target=_blank]{
  cursor: not-allowed;
  pointer-events: none;
  
}


  *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: none;
    touch-action: none;
  }
</style>
