<style scoped>
.layout{
    border: 1px solid #d7dde4;
    border-bottom: 0;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.main-box {
}
.layout-footer-center {
    padding: 0;
    line-height: 40px;
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <HeaderMenu />
            <Layout>
                <Sider hide-trigger>
                    <router-view name="sider"></router-view>
                </Sider>
                <Layout class="main-box">
                    <router-view name="main"></router-view>
                </Layout>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>

import HeaderMenu from './components/HeaderMenu.vue';
export default {
    name: 'LayoutBox',
    components: {
        HeaderMenu
    },
    data() {
        return {
        }
    },
    created() {
        
    }
}
</script>
