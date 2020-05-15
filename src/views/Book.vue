<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>书名</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                msg:"hello vue",
                books: [
                    {
                        id: 1,
                        name: 'html',
                        author: '小明'
                    },{
                        id: 2,
                        name: 'css',
                        author: '小红'
                    },{
                        id: 3,
                        name: 'js',
                        author: '小亮'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>