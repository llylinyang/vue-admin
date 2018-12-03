<template>
<div>
    <Content :style="{padding: '24px', minHeight: (height - 108) + 'px', background: '#fff'}">
        Content
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
        
        const data = {
                grant_type: 'password',
                client_id: '3',
                client_secret: 'Lp9gDTX0kXczJWjJC6QrBBy727kXc50RA41omQBb',
                username: '1228380958@qq.com',
                password: 'lly123456'
            }
        this.axios.post('http://api.com/oauth/token', data).then(res => {
            console.log('res=>', res);
            // console.log('provinces=>', JSON.parse(res.data.province));
            // console.log('citys=>', JSON.parse(res.data.city));
            // console.log('areas=>', JSON.parse(res.data.area));
        }).catch(res => {
            console.log('error=>', res);
        });
        this.axios.post('/oauth/token', data).then(res => {
            console.log('res=>', res);
            // console.log('provinces=>', JSON.parse(res.data.province));
            // console.log('citys=>', JSON.parse(res.data.city));
            // console.log('areas=>', JSON.parse(res.data.area));
        }).catch(res => {
            console.log('error=>', res);
        });

       
    }
}
</script>
