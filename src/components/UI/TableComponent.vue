<template>
  <div>
    <div class="card">
      <DataTable :value="rows" showGridlines tableStyle="max-width: 60rem; margin: auto; margin-top: 15px" rowHover stripedRows>
        <Column
          v-for="column in columns"
          :key="column.id"
          :field="column.caption"
          :header="column.caption"
          :style="{
            'text-align': column.align ? column.align :
                column.type === 'string'
                ? 'left'
                : column.type === 'int' || column.type === 'float'
                ? 'right'
                : column.type === 'boolean'
                ? 'center'
                : 'left',
          }"
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
  let rows3 = selectedReport.value.report.data;
  let data = [];
  for (const row of rows3) {
    let obj = {};
    for (let i = 0; i < row.length; i++) {
      let r = row[i];
      console.log(typeof r);
      if (typeof r === "object") {
        let w = row[i].d;
        obj[columns.value[i].caption] = w;
      } else {
        obj[columns.value[i].caption] = row[i];
      }
    }
    data.push(obj);
  }
  return data;
});

</script>


<style scoped>
</style>

