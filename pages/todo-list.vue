<template >
  <div class="todo-list">
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="100px" inline label-position="left">
        <el-form-item label="Task name：" prop="taskName">
          <el-input v-model="form.taskName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="Time：" prop="time" >
          <el-date-picker 
            type="datetime" 
            format="YYYY/MM/DD HH:mm:ss" 
            value-format="YYYY/MM/DD HH:mm:ss"
            v-model="form.time" 
            placeholder="datetime">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="addTask">confirm</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list">
      <div class="list-item flex-start-center">
        <div class="col">Task Name</div>
        <div class="col">Time</div>
        <div class="col">Operate</div>
      </div>
      <div class="list-item flex-start-center" v-for="(item, index) in list" :key="index">
        <div class="col">{{ item.taskName }}</div>
        <div class="col">{{ item.time }}</div>
        <div class="col">
          <el-button type="danger" size="small" @click="deleteRow(index)">delete</el-button>
        </div>
      </div>
      <div class="list-item text-center" v-if="!list.length">
        <div class="col">暂无数据~</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

interface ItemInterface {
  taskName: string,
  time: string,
}

const form = reactive<ItemInterface>({
  taskName: '',
  time: ''
})


const list = ref([
  { taskName: 'Runing', time: '2023/10/19 08:00:00' },
  { taskName: 'Eat food', time: '2023/10/19 09:00:00' },
  { taskName: 'Read book', time: '2023/10/19 10:00:00' },
  { taskName: 'Listen music', time: '2023/10/19 11:00:00' },
])

const addTask = () => {
  if (!form.taskName || !form.time) {
    return ElMessage.error('Task Name and Time is required')
  };
  list.value.push({...form})
}


const deleteRow = (index: number) => {
  list.value.splice(index, 1)
}

</script>

<style lang="less" scoped>
.todo-list {
  .list {
    max-width: 760px;
    border-top: 1px solid #ccc;
    min-height: 300px;
    margin-top: 40px;

    .list-item {
      border-bottom: 1px solid #ccc;
      padding: 10px;

      .col {
        flex: 1;
      }
    }
  }
}
</style>