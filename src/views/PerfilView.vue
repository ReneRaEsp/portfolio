<template>
  <div class="perfil">
    <div class="perfil-glass">
      <div class="header">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="body">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scope>
.perfil {
  display: flex;
  align-items: center;
  margin: auto;
  background: rgba(50, 210, 219, 0.03);
  width: 100%;
  height: 100%;
  .perfil-glass {
    margin: auto;
    width: 90%;
    height: 90%;
    background: radial-gradient(circle, rgba(44, 48, 50, 1) 0%, rgba(20, 24, 26, 0) 100%);
    background: rgba(44, 48, 50, 0.4);
    border-radius: 40px;
    border: 1px solid rgba(202, 242, 262, 0.3);

    .header {
      display: flex;
      width: 100%;
      height: 15%;
      border-radius: 40px 40px 0px 0px;
      flex-direction: row;
      flex-wrap: nowrap;

      .left {
        width: 50%;
        height: 100%;
        border: 1px solid rgba(202, 242, 262, 0.3);
        border-radius: 40px 0px 0px 0px;
      }
      .right {
        width: 50%;
        height: 100%;
        border: 1px solid rgba(202, 242, 262, 0.3);
        border-radius: 0px 40px 0px 0px;
      }
    }
    .body {
      display: flex;
      width: 100%;
      height: 85%;
      border-radius: 0px 0px 40px 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      .left {
        width: 50%;
        height: 100%;
        border: 1px solid rgba(202, 242, 262, 0.3);
        border-radius: 0px 0px 0px 40px;
      }
      .right {
        width: 50%;
        height: 100%;
        border: 1px solid rgba(202, 242, 262, 0.3);
        border-radius: 0px 0px 40px 0px;
      }
    }
  }
}
</style>
