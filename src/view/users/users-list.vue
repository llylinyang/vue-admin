<template>
    <div>
        <div class="search-box">
            <Form :model="formItem" :label-width="80">
                    <Row>
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
                
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
                
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
                
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
                
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
              
                    <Col span="6">
                        <FormItem label="Input">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem> 
                    </Col>
              
                    <Col span="6" style="text-align: center;">
                        <Button type="primary" icon="ios-search" style="width: 100px;font-size: 14px">查询</Button>
                    </Col>
                </Row>
            
            </Form>
        </div>
        <div class="table-box">
            <Table border ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="page-box">
            <Page :total="100" width="980" show-sizer show-elevator show-total />
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {

                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        width: 120
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100,
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 120
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'left',
                        width: 140,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginLeft: '5px'
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                     {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                     {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                     {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }, {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.search-box {
    width: 100%;
}
.page-box {
    margin-top: 15px;
    margin-bottom: 15px;
    overflow: hidden;
    text-align: center;
}
</style>
