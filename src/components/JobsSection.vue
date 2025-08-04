<template>
    <div class="containerJobsSection">
        <div class="containerJobsSectionTitle">
            <span>{{ jobs.length }} jobs</span>
        </div>
        <div class="containerJobsSectionContent">
            <Jobs v-for="(job, index) in jobs" :key="index" :job="job" />
        </div>
    </div>
</template>

<script setup>
import Jobs from './Jobs.vue'

const props = defineProps({
    jobs: {
        type: Array,
        default: () => []
    }
})

</script>