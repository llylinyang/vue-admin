<template>
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
</template>
<script>
export default {
    name: 'SiderMenu',
    data () {
        return {
            
        }
    },
}
</script>
