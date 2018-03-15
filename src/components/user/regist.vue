<template>
    <div class="regist">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="区域">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width:
        100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时生效">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="类型">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="A" name="type"></el-checkbox>
              <el-checkbox label="B" name="type"></el-checkbox>
              <el-checkbox label="C" name="type"></el-checkbox>
              <el-checkbox label="D" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="CC">
            <el-radio-group v-model="form.resource">
              <el-radio label="上"></el-radio>
              <el-radio label="下"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="DD">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        alert("submit!");
      }
    }
  }
</script>
