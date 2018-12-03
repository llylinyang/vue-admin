<template>
<div>
    <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: (height - 181) + 'px', background: '#fff'}">
        Content
    </Content>
</div>
</template>

<script>
export default {
    name: 'ContentTable',
    data() {
        return {
            height: 400
        }
    }
}
</script>
