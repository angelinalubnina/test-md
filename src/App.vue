<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h1 style="margin-bottom: 15px">Reports</h1>
    <Dropdown
        v-model="selectedReportTest"
        :options="reports"
        @change="onChangeSelect"
        optionLabel="name"
        style=""
        class="w-full md:w-14rem"
        />
    <div>
      <table-component></table-component>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from './components/UI/TableComponent.vue';
import {obj1, obj2, obj3} from './utils/consts';
import { useReportStore } from './stores/reportStore';

const reportStore = useReportStore();

const reportsJSON = [obj1, obj2, obj3] 
const reports = [] 
parseJson(reportsJSON)

const selectedReportTest = ref(reports[0])
reportStore.selectedReport = selectedReportTest.value

const onChangeSelect = () => {
  reportStore.selectedReport = selectedReportTest.value
}

function parseJson(reportsJSON) {
  for(let i =1; i < 4; i++) {
    let a = reportsJSON[i - 1]
    reports.push({"name" : `obj${i}`, "report" : JSON.parse(a)})
  }
  reportStore.reports = reports
}
</script>

<style scoped>
body {
  margin-bottom: 15px;
}
</style>
