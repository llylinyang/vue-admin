<template>
<div class="box">
    <Content class="content-box" :style="{height: (height - 108) + 'px'}">
        <div class="content-view">
            <router-view></router-view>
        </div>
    </Content>
</div>
</template>

<script>
export default {
    data() {
        return {
            height: 400
        }
    },
    created() {
        this.height = window.innerHeight;
    }
}
</script>

<style scoped>
.content-box {
    padding: 12px;
}
.content-view {
    overflow: hidden;

}
</style>
