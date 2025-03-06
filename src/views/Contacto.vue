<template>
  <div class="contact">
    <div class="contact-glass">
      <div class="left">
        <div class="header">{{ $t('contact') }}</div>
        <div class="body">
          <Card :title="'Email'" text="rdejramirez@gmail.com" link="mailto:rdejramirez@gmail.com" />
          <Card :title="$t('phone')" text="+51 912569594" link="https://wa.pe/reneraespt" />
          <Card :title="$t('location')" text="Lima, Perú" />
          <Card
            :title="'Telegram'"
            :text="'https://t.me/rrteam7'"
            :image="'/img/telegramqr.webp'"
            :link="'https://t.me/rrteam7'"
          />
        </div>
      </div>
      <div class="right">
        <div class="header"></div>
        <div class="body">
          <!-- <MaxiCard
            title="Linkedin"
            text="https://www.linkedin.com/in/rene-ramirez-6674b31a5/"
            link="https://www.linkedin.com/in/rene-ramirez-6674b31a5/"
            />-->
          <MaxiCard
            title="Codewars"
            text="https://www.codewars.com/users/ReneRaEsp"
            link="https://www.codewars.com/users/ReneRaEsp"
          />
          <MaxiCard
            title="Gitlab"
            text="https://gitlab.com/reneraespteam"
            link="https://gitlab.com/reneraespteam"
          />
          <MaxiCard
            title="Github"
            text="https://github.com/ReneRaEsp"
            link="https://github.com/ReneRaEsp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from './../components/contact/Card.vue'
import MaxiCard from './../components/contact/MaxiCard.vue'
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 20px;
  font-size: 22px;
  color: rgba(202, 242, 262, 0.73);
}
.contact {
  display: flex;
  align-items: center;
  margin: auto;
  background: rgba(50, 210, 219, 0);
  width: 100%;
  height: 100%;
  .contact-glass {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    width: 90%;
    height: 90%;
    background: rgba(44, 48, 50, 1);
    border-radius: 42px;
    border: 1px solid rgba(202, 242, 262, 0.3);
    overflow-y: auto;
    .left {
      width: 50%;
      height: auto;
      background: rgba(202, 242, 262, 0);
      border-radius: 0px 0 0px 0px;
      border: 1px solid rgba(202, 242, 262, 0.3);
    }
    .right {
      width: 50%;
      height: auto;
      background: rgba(202, 242, 262, 0);
      border-radius: 0px 40px 40px 0px;
      border: 1px solid rgba(202, 242, 262, 0.3);
    }
  }
}

@media screen and (max-width: 770px) {
  .contact {
    .contact-glass {
      .left {
        width: 100%;
        height: auto;
        background: rgba(202, 242, 262, 0);
        border-radius: 0px 0 0px 0px;
        border: 1px solid rgba(202, 242, 262, 0.3);
      }
      .right {
        width: 100%;
        height: auto;
        background: rgba(202, 242, 262, 0);
        border-radius: 0px 0px 0px 0px;
        border: 1px solid rgba(202, 242, 262, 0.3);
      }
    }
  }
}
</style>
