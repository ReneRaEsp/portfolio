<template>
  <div class="resume">
    <div class="resume-glass">
      <div class="left">
        <div class="header">{{ $t('experience') }}</div>
        <div class="body">
          <Card
            :title="$t('exp-2-title')"
            :place="$t('exp-2-place')"
            :dates="$t('exp-2-date')"
            :text="$t('exp-2-text')"
            :isExp="true"
          />
          <Card
            :title="$t('exp-1-title')"
            :place="$t('exp-1-place')"
            :dates="$t('exp-1-date')"
            :text="$t('exp-1-text')"
            :isExp="true"
          />
        </div>
      </div>
      <div class="right">
        <div class="header">{{ $t('education') }}</div>
        <div class="body">
          <Card
            :title="$t('edu-1-title')"
            :place="$t('edu-1-place')"
            :dates="$t('edu-1-date')"
            :text="$t('edu-1-text')"
            :isExp="false"
          />
          <Card
            :title="$t('edu-2-title')"
            :place="$t('edu-2-place')"
            :dates="$t('edu-2-date')"
            :text="$t('edu-2-text')"
            :isExp="false"
          />
          <Card
            :title="$t('edu-3-title')"
            :place="$t('edu-3-place')"
            :dates="$t('edu-3-date')"
            :text="$t('edu-3-text')"
            :isExp="false"
          />
          <Card
            :title="$t('edu-4-title')"
            :place="$t('edu-4-place')"
            :dates="$t('edu-4-date')"
            :text="$t('edu-4-text')"
            :isExp="false"
          />
        </div>
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
    border-radius: 7px;
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
      border-radius: 0px 07px 07px 0px;
      border: 1px solid rgba(202, 242, 262, 0.3);
    }
  }
}

@media screen and (max-width: 770px) {
  .resume {
    .resume-glass {
      border-radius: 03px;
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
