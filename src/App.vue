<template>
  <div id="reports">
    <h1>Reports</h1>
    <Dropdown
        v-model="selectedReport"
        :options="reports"
        @change="onChangeSelect"
        optionLabel="name"
        />
    <table-component></table-component>
    <p>* Столбцы, выравнивание которых было задано по центру в подготовленных данных, обозначены зеленым цветом.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from './components/UI/TableComponent.vue';
import {reportFromServer1, reportFromServer2, reportFromServer3} from './utils/consts';
import { useReportStore } from './stores/reportStore';

const reportStore = useReportStore();

const reports = [] 
parseJson()

const selectedReport = ref(reports[0])
reportStore.selectedReport = selectedReport.value

const onChangeSelect = () => {
  reportStore.selectedReport = selectedReport.value
}

function parseJson() {
  const JSONReports = [reportFromServer1, reportFromServer2, reportFromServer3] 
  for(let i = 0; i < JSONReports.length; i++) {
    reports.push({"name" : `Report ${i + 1}`, "report" : JSON.parse(JSONReports[i])})
  }
  reportStore.reports = reports
}
</script>

<style scoped>
#reports {
  display: flex; 
  flex-direction: column; align-items: center;
}
</style>
