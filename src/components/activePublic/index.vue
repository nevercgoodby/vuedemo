<template>
    <div class="activePublic">
      <!-- 组件 -->
      <el-steps :space="200" :active="step" class="step">
        <el-step title="提交" description=""></el-step>
        <el-step title="回源" description=""></el-step>
        <el-step title="预处理" description=""></el-step>
        <el-step title="注入" description=""></el-step>
        <el-step title="通知播控" description=""></el-step>
        <el-step title="完成" description=""></el-step>
      </el-steps>

        <!-- 视图 -->
      <router-view class="view"></router-view>

      <div class="but-group">
        <el-button >预览</el-button>
        <el-button >上一步</el-button>
        <el-button  type="primary">下一步</el-button>
        <el-button  type="primary">发布</el-button>
      </div>
    </div>
</template>
