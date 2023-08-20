<template>
  <div>
    <div class="card">
      <DataTable :value="rows" showGridlines tableStyle=" margin: auto; margin-top: 15px" resizableColumns>
        <Column
          v-for="column in columns"
          :key="column.id"
          :field="column.caption"
          :header="column.caption"
          :bodyStyle=getBackgroundColor(column)
          :style="{ 
            'text-align': getTextAlignment(column)}"
        />
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useReportStore } from "../../stores/reportStore";

const reportStore = useReportStore();

let selectedReport = computed(() => {
  return reportStore.selectedReportComp;
});

let columns = computed(() => {
  return selectedReport.value.report.headers;
});

let rows = computed(() => {
  const rowsSelectedReport = selectedReport.value.report.data;
  let data = [];
  for (const row of rowsSelectedReport) {
    let obj = {};
    for (let i = 0; i < row.length; i++) {
      if (typeof row[i] === "object") {
        obj[columns.value[i].caption] = row[i].d
      } else {
        obj[columns.value[i].caption] = row[i];
      }
    }
    data.push(obj);
  }
  return data;
});

function getTextAlignment(column) {
  if(column.align) {
    return column.align
  } else if (column.type === 'string') {
    return 'left'
  } else if (column.type === 'int' || column.type === 'float') {
    return 'right'
  } else if (column.type === 'boolean') {
    return 'center'
  } else {
    return 'left'
  }
}

function getBackgroundColor(column) {
  if(column.align) {
    return 'background-color: rgba(138, 255, 138, 0.5)'
  } else {
    return ''
  }
}


</script>

<style scoped>
</style>

