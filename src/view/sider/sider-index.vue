<template>
    <Menu :theme="theme" active-name="1" width="auto">
        <MenuItem name="1">
            <Icon type="md-document" />
            用户统计
        </MenuItem>
        <MenuItem name="2">
            <Icon type="md-chatbubbles" />
            文章统计
        </MenuItem>
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
