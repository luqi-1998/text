<script setup>
import CityApi from "../api/citys";
import { ref } from "vue";
const checkedCities = ref([]);
const citys = ref([]);
const pronce = ref([]);
CityApi.getCity().then((res) => {
  citys.value = res.data.data;
});
const checkAll = ref(false);
const isIndeterminate = ref(true);
const handleCheckAllChange = (val) => {
  checkedCities.value = val ? ["110000"] : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === citys.value.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < citys.value.length;
};
</script>
<template>
  <div>
    <div class="area-container">
      <div class="city-search"></div>
      <div class="bui-tab-pane">
        <div class="select-panel">
          <div
            class="select-panel-left select-panel-scrolling-left select-panel-scrolling-right"
          >
            <div class="montear">
              <div class="item">
                <el-checkbox
                  v-model="checkAll"
                  :indeterminate="isIndeterminate"
                  @change="handleCheckAllChange"
                  >全部</el-checkbox
                >
              </div>
              <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                <div class="item1" v-for="item in citys" :key="item.code">
                  <el-checkbox :label="item.code">
                    {{ item.name }}
                  </el-checkbox>
                  <el-icon><ArrowRight /></el-icon>
                </div>
              </el-checkbox-group>
            </div>
          </div>
          <div class="select-panel-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.area-container {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px 16px 0;
  .city-search {
    width: 320px;
    height: 50px;
  }
  .bui-tab-pane {
    height: 310px;
  }
  .select-panel {
    width: 280px;
    height: 100%;
    display: flex;
    .select-panel-left {
      margin-right: 16px;
      //width: calc(100% - 216px);
      .montear {
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        .item1 {
          width: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 15px 0px 0px;
        }
      }
    }
    .select-panel-right {
      width: 200px;
    }
  }
}
/*里面的代码可以根据自己需求去进行更改*/
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(239, 237, 237, 0.4);
}
</style>
