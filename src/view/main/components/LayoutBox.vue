<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

</style>
<template>
    <div class="layout">
        <Layout>
            <HeaderMenu />
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                 用户管理
                            </template>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <ContentTable />
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import HeaderMenu from './HeaderMenu.vue';
import ContentTable from './ContentTable.vue'
export default {
    name: 'LayoutBox',
    components: {
        HeaderMenu,
        ContentTable
    },
    data() {
        return {
            // height: 400
        }
    },
    created() {
        // this.height = window.innerHeight;
    }
}
</script>
