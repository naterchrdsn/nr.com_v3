<template>
  <main>
    <section class="hero is-fullheight">
      <video loop muted autoplay class="bg-video sweet-background">
        <source src="@/static/bgloop.mp4" type="video/mp4">
      </video>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Nate Richardson
          </h1>
          <h2 class="subtitle">
            Maker, Gamer, Breakfast Enthusiast
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight">
      <h1 class="section-heading">Hi there, I'm Nate!</h1>
          <h3 class="section-subheading">I am a Software Developer with a passion for creating and optimizing technology to help people do what they love, better.</h3>
          <span class="divider"></span>
          <div class="about-wrapper">
              <img class="headshot" src="img/headshot.jpg" alt="headshot">
              <div class="about-text-wrapper">
                  <p class="about-text"><strong>I'm a Software Developer & Photographer @ Richardson Media House</strong> based in Atlanta, Georgia. I have extensive experience prototyping, designing, developing, and optimizing applications and UIs for the Web. I enjoy creating software that is both lightweight and functional, while going above and beyond to bring quality code that fulfills its intended use.</p>
                  <p class="about-text">I bring almost a decade of development experience, over a decade of experience building and maintaining all types of computers, as well as a penchant for the details of minimalist design. Ultimately, I enjoy learning about and using different technology and languages to keep current in the industry and always know what tech is good for a specific use-case.</p>
                  <p class="about-text"><strong>When I'm not building an application or computer,</strong> I'm probably hanging out with my son, Luca, or photographing something.</p>
              </div>
          </div>
    </section>
  </main>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>

<style>
  @font-face {
    font-family: Nilland;
    src: url('/assets/fonts/Nilland.ttf');
  }
  @font-face {
    font-family: Nilland-Black;
    src: url('/assets/fonts/Nilland-Black.ttf');
  }
  @font-face {
    font-family: Nilland-Bold;
    src: url('/assets/fonts/Nilland-Bold.ttf');
  }
  @font-face {
    font-family: Nilland-SmallCaps;
    src: url('/assets/fonts/Nilland-SmallCaps.ttf');
  }
  .sweet-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    z-index: -100;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
  }
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
</style>

