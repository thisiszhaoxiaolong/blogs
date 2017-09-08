<template>
<div class="body">
    <ul v-for="(i,index) in alldata">
        <li class="tit">
            <span>一级类名：{{i.onedata.cnname}}</span>
            <span>标识：{{i.onedata.enname}}</span>
            <span>文章数量</span>
            <span>
                <el-button type="warning" @click="handleEdit_one(index,i.onedata)">修改</el-button>
                <el-button type="danger" @click="delete_one(i.onedata.id,i.onedata.enname)">删除</el-button>    
            </span>
        </li>
        <li v-for="item in i.twodata">
            <span>二级类名：{{item.cnname}}</span>
            <span>标识：{{item.enname}}</span>
            <span>文章数量：{{item.article_num}}</span>
            <span>
                <el-button type="warning" @click="handleEdit_two(item)">修改</el-button><el-button type="danger" @click="delate_two(i.onedata.id,item.id,item.enname)">删除</el-button>   
            </span>
        </li>
    </ul>
    <!--<div v-for="(i,index) in alldata">
        <el-table
            :data="i.twodata"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
            :prop="i.onedata.cnname"
            :label="i.onedata.cnname"
            width="180">
            </el-table-column>
            <el-table-column
            :prop="i.onedata.enname"
            :label="i.onedata.enname"
            width="180">
            </el-table-column>
            <el-table-column
            prop="文章数量"
            label="文章数量"
            width="180">
            </el-table-column>
            <el-table-column label="操作" width="200">
            <template scope="scope">
                <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
</el-table-column>
</el-table>
</div>-->
<el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
    <span>确定删除此接口文档</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteFn_one">确 定</el-button>
  </span>
</el-dialog>
<el-dialog title="提示" :visible.sync="dialogVisible_two" size="tiny">
    <span>确定删除此接口文档</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_two = false">取 消</el-button>
    <el-button type="primary" @click="deleteFn_two">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>
<style scoped>
    .body {
        margin: 20px 0;
    }
    
    .block {
        margin: 40px auto;
    }
    
    .tit {
        background: goldenrod;
        margin-top: 20px;
    }
    
    li {
        border: 1px solid #ccc;
    }
    
    span {
        width: 180px;
        height: 40px;
        display: inline-block;
        line-height: 40px;
        text-align: center;
    }
    
    button {
        display: inline-block;
    }
</style>

<script>
    export default {
        methods: {
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            },
            // 修改
            handleEdit_one(index, rows) {
                // console.log(rows)
                this.$router.push({
                    name: "add_amend",
                    params: rows
                })
            },
            handleEdit_two(rows) {
                // console.log(rows)
                this.$router.push({
                    name: "add_amend_two",
                    params: rows
                })
            },
            // 一级删除
            delete_one(id, enname) {
                this.item_one.id = id; //一级类名的id
                this.item_one.enname_one = enname;
                this.dialogVisible = true;
            },
            //二级删除
            delate_two(oneId, twoId, enname) {
                this.item_two.oneId = oneId; //一级类名的id
                this.item_two.twoId = twoId; //二级类名的id
                this.item_two.enname_one = enname;
                this.dialogVisible_two = true;
            },
            // 确定后调用删除接口
            deleteFn_one() {
                this.axios.post("/api/back_class/delete_one", this.item_one).then(function(data) {
                    // console.log(data.data)
                    if (data.data.code == "1071") {
                        this.dialogVisible = false
                        this.open2()
                        this.$router.go(0)
                    } else {
                        this.dialogVisible = false
                        this.open4()
                    }
                    // console.log(this.alldata)
                }.bind(this))
            },
            // 确定后调用删除接口
            deleteFn_two() {
                this.axios.post("/api/back_class/delete_two", this.item_two).then(function(data) {
                    // console.log(data.data)
                    // console.log(data.data.code)
                    if (data.data.code == "1073") {
                        this.dialogVisible_two = false
                        this.open2()
                        this.$router.go(0)
                    } else {
                        this.dialogVisible_two = false
                        this.open4()
                    }
                    // console.log(this.alldata)
                }.bind(this))
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，删除消息成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，删除失败');
            }
        },
        data() {
            return {
                item_one: {}, //删除时使用的id
                item_two: {}, //删除时使用的id
                dialogVisible: false, //删除弹窗的控制
                currentPage4: 0, //当前显示页
                alldata: [], //请求的元数据
                dialogVisible_two: false
            }
        },
        mounted() {
            this.axios.get("/api/back_class/class_list").then(function(data) {
                this.alldata = data.data.data
                    // console.log(data.data.data)
            }.bind(this))
        }
    }
</script>