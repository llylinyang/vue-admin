<template>
<div class="header">
    <div class="header-left">
        <img src="../../../assets/img/logo.png" alt="logo">
    </div>
    <div class="header-middle">
          <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1" to="/home">
                <Icon type="ios-home" size="18"/>
                首页
            </MenuItem>
            <MenuItem name="2" to="/users">
                <Icon type="ios-paper" size="18"/>
                用户管理
            </MenuItem>
            <MenuItem name="3" to="/content">
                <Icon type="ios-people" size="18"/>
                内容管理
            </MenuItem>
        </Menu>
    </div>
    <div class="header-right">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Submenu name="3">
                <template slot="title">
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </template>
                <MenuGroup>
                    <MenuItem name="1-1">个人信息</MenuItem>
                    <MenuItem name="1-1">修改密码</MenuItem>
                    <MenuItem name="1-1">退出登录</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </div>
</div>
    
</template>
<script>
export default {
    name: 'HeaderMenu',
    props: {
       
    },
    data () {
        return {
            theme1: 'dark'
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    min-width: 1280px;
}
.header>div {
    float: left;
}
.header-left {
    position: relative;
    width: 200px;
    height: 100%;
    background-color: #515a6e;
}

.header-left>img {
    position: absolute;
    display: block;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header-middle {
     width: -moz-calc(100% - 300px);
    width: -webkit-calc(100% - 300px); 
    width: -o-calc(100% - 300px);
    width: -ms-calc(100% - 300px);
    width: calc(100% - 300px);
    min-width: 980px;
    height: 100%;
}
.header-right {
    width: 100px;
    height: 100%;
    background-color: #515a6e;
}
</style>
