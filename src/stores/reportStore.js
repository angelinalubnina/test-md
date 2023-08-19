import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useReportStore = defineStore("reportStore", () => {
  const reports = ref([]);
  const selectedReport = ref({});

  const selectedReportComp = computed(() => {
    return selectedReport.value
  })

  return { reports, selectedReport, selectedReportComp };
});
