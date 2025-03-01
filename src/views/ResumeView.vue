<template>
  <div class="resume">
    <div class="resume-glass">
      <div class="left">
        <div class="header">Experiencia</div>
        <div class="body">
          <Card />
        </div>
      </div>
      <div class="right">
        <div class="header">Educación</div>
        <div class="body"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from './../components/resume/Card.vue'
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  border: 1px solid rgba(202, 242, 262, 0.2);
  padding: 20px;
  font-size: 22px;
  color: rgba(202, 242, 262, 0.73);
}
.resume {
  display: flex;
  align-items: center;
  margin: auto;
  background: rgba(50, 210, 219, 0);
  width: 100%;
  height: 100%;
  .resume-glass {
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
