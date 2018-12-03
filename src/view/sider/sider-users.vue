<template>
    <Menu active-name="1-1" :theme="theme" width="auto" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-filing" />
                角色管理
            </template>
            <MenuItem name="1-1">Option 5</MenuItem>
            <MenuItem name="1-2">Option 6</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                会员管理
            </template>
            <MenuItem name="2-1" to="/users/list">会员列表</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
export default {
    data () {
        return {
            theme: 'dark'
        }
    },
}
</script>
