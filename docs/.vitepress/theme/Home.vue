<template>
  <!-- <div class="home">vue3</div> -->
  <Layout>
    <!-- <template #doc-top> doc-top </template>
    <template #doc-bottom> doc-bottom </template>
    <template #doc-footer-before> doc-footer-before </template>
    <template #doc-before> doc-before </template>
    <template #doc-after> doc-after </template>
    <template #sidebar-nav-before> sidebar </template>
    <template #sidebar-nav-after> sidebar-nav-after </template>
    <template #aside-top> aside-top </template>
    <template #aside-bottom> aside-bottom </template>
    <template #aside-outline-before> aside-outline-before </template>
    <template #aside-outline-after> aside-outline-after </template>
    <template #aside-ads-before> aside-ads-before </template>
    <template #aside-ads-after> aside-ads-after </template> -->
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
console.log(DefaultTheme);
const { Layout } = DefaultTheme;
</script>

<style lang="scss" scoped>
.home {
  font-size: 20px;
  color: #f90;
}
.copyright {
  margin: 0 auto;
  text-align: center;
}
</style>