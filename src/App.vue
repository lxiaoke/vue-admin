<script setup></script>

<template>
  <div class="admin-layout">
    <el-container class="admin-container">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu
            active-text-color="#409eff"
            background-color="#545c64"
            default-active="2"
            text-color="#fff"
            class="admin-aside-menu"
          >
            <el-affix>
              <el-menu-item index="0" class="admin-logo">
                <span>通用后台管理系统</span>
              </el-menu-item>
            </el-affix>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><i-ep-home-filled /> </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><i-ep-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><i-ep-document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><i-ep-setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header class="admin-header">
          <div class="flex-grow"></div>
          <el-dropdown class="admin-header-user">
            <span class="admin-header-user-link">
              <el-avatar>
                <i-ep-user-filled></i-ep-user-filled>
              </el-avatar>
              <span>李晓珂</span>
              <i-ep-arrow-down />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.admin-layout {
  height: 100vh;
}
.admin-container {
  height: 100%;
}
.admin-aside-menu {
  min-height: 100vh;
}
.admin-logo {
  background-color: #333;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
}
.admin-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  height: 56px;
}
.admin-header-user {
  cursor: pointer;
  align-items: center;
}
.admin-header-user-link {
  outline: none;
  display: flex;
  align-items: center;
  height: 100%;
}
.admin-header-user-link > *:not(:first-child) {
  margin-left: 5px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
