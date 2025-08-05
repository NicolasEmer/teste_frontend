<template>
    <div class="containerJobsSection">
        <div class="containerJobsSectionContent">
            <span>{{ jobs.length }} jobs</span>
            <Jobs v-for="(job, index) in jobs" :key="index" :job="job" />
        </div>
        <Email />
    </div>
</template>

<script setup>
import Jobs from './Jobs.vue'
import Email from './Email.vue'

const props = defineProps({
    jobs: {
        type: Array,
        default: () => []
    }
})

</script>