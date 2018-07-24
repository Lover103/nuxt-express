<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-nav">
      <nuxt-link to="/guide">
        <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        教程
        </MenuItem>
      </nuxt-link>
      <nuxt-link to="/api">
        <MenuItem name="2">
        <Icon type="ios-keypad"></Icon>
        API
        </MenuItem>
      </nuxt-link>
      <nuxt-link to="/examples">
        <MenuItem name="3">
        <Icon type="ios-analytics"></Icon>
        示例
        </MenuItem>
      </nuxt-link>
      <nuxt-link to="/faq">
        <MenuItem name="4">
        <Icon type="ios-paper"></Icon>
        常见问题
        </MenuItem>
      </nuxt-link>
    </div>
  </Menu>
</template>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>