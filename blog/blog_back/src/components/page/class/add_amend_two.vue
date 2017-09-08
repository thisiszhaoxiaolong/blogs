<template>
    <div class="body">
        <el-form>
        <h3>二级类名设置</h3>
        <el-form-item label="中文类名" prop="cn">
            <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="entwo">
            <el-input v-model.number="ruleForm2.enname_two"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };

            return {
                ruleForm2: {
                    oldenname_two: "", //原二级类名的英文标识
                    enname_two: "", //新改变二级类名的英文标识
                    cnname_two: ""//新改变二级中文类名
                },
                rules2: {
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                },
                options: [

                ],
                value: ""
            };
        },
        methods: {
            submitForm(formName) {
                var _this = this;
                // console.log(this.ruleForm2)
                this.axios.post("/api/back_class/amend_class_two",
                    this.ruleForm2
                ).then(function(data) {
                    _this.$message(data.data.msg);
                })
            }
        },
        created() {
            console.log(this)
            this.ruleForm2.oldenname_two = this.$route.params.enname
        }
    }
</script>

<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
    
    .body {
        padding-left: 30px;
    }
</style>