<script setup></script>

<template>
  <div class="admin-layout">
    <el-container class="admin-container">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            default-active="2"
            text-color="#fff"
            class="admin-aside-menu"
          >
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
              <el-icon><document /></el-icon>
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
        <el-header>Header</el-header>
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
</style>
