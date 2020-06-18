<template>
  <main>
    <section class="hero is-fullheight splash">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Nate Richardson</h1>
          <h2 class="subtitle">Maker, Gamer, Breakfast Enthusiast</h2>
        </div>
      </div>
    </section>
    <section class="section about columns">
      <div class="column"></div>
      <div class="container column is-four-fifths">
        <h1 class="title">Hi there, I'm Nate!</h1>
        <h2
          class="subtitle"
        >I am a Software Engineer with a passion for helping people do what they love, better.</h2>
        <div class="about-content-wrapper columns">
          <div class="about-text-wrapper column">
            <p class="about-text">
              <strong>I'm Co-Owner of Devlytic, and Lead Application Engineer at ADP</strong>. I have extensive experience prototyping, designing, developing, and optimizing applications and UIs for the Web. I enjoy creating software that is both lightweight and functional, while going above and beyond to bring quality code that fulfills its intended use.
            </p>
            <br />
            <p
              class="about-text"
            >I bring about a decade of software architecture and engineering experience, and over a decade of experience building and maintaining all types of computers. Ultimately, I enjoy learning about and using different technology and languages to keep current in the industry and always know what tech is good for a specific use-case.</p>
            <br />
            <p class="about-text">
              <strong>When I'm not building an application or computer,</strong> I'm probably hanging out with my amazing family, or photographing something.
            </p>
            <br />
            <div class="level">
              <p class="level-left">
                Here's a few things I'm experienced with:
                <br />&nbsp;&nbsp;❯ JavaScript
                <br />&nbsp;&nbsp;❯ TypeScript
                <br />&nbsp;&nbsp;❯ HTML & CSS
                <br />&nbsp;&nbsp;❯ Angular
                <br />&nbsp;&nbsp;❯ Vue
                <br />&nbsp;&nbsp;❯ Node.js
              </p>
              <p class="level-right">
                <a
                  style="margin-right: 150px;"
                  class="button is-outlined is-link is-large"
                  href="https://www.dropbox.com/s/swwugjps0kqxirh/Nate_Richardson_Software_Engineer2.pdf?dl=0"
                >View My Resume</a>
              </p>
            </div>
          </div>
          <div class="has-text-centered column">
            <figure class="image is--4by5">
              <img class="headshot" src="@/static/smaller.jpg" alt="headshot" />
            </figure>
            <hr />
            <h3>Let's Talk!</h3>
            <span>
              <a href="https://github.com/naterchrdsn">
                <fa class="icon is-medium" :icon="['fab', 'github']" />
              </a>
              <a href="https://linkedin.com/in/naterchrdsn">
                <fa class="icon is-medium" :icon="['fab', 'linkedin']" />
              </a>
              <a href="mailto:hello@naterichardson.com">
                <fa class="icon is-medium" :icon="['fas', 'envelope']" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ©
          <span id="copyright-year">{{ getCurrentYear() }}</span> Copyright: Devlytic LLC.
        </p>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Nilland;
  src: url('/fonts/Nilland.ttf');
}
@font-face {
  font-family: Nilland-Black;
  src: url('/fonts/Nilland-Black.ttf');
}
@font-face {
  font-family: Nilland-Bold;
  src: url('/fonts/Nilland-Bold.ttf');
}
@font-face {
  font-family: Nilland-SmallCaps;
  src: url('/fonts/Nilland-SmallCaps.ttf');
}
.splash {
  background-image: url('/splash.jpg');
  background-size: cover;
  background-position: top;

  .title {
    color: #fff;
    font-family: 'Nilland';
    font-size: 4rem;
  }
  .subtitle {
    color: #dadada;
    font-family: 'Nilland-SmallCaps';
    text-transform: uppercase;
  }
}
.about {
  .image {
    border-radius: 200px;
    overflow: hidden;
    height: 250px;
    width: 250px;
    margin: auto;

    .headshot {
      top: -75px;
      position: relative;
    }
  }
  .about-text-wrapper {
    display: inline-block;
    width: 75%;
  }
}
.footer {
  .logo {
    width: 50px;
  }
}
</style>

