<template>
    <div class="containerJobs">
        <div class="jobCard">
            <div class="job">
                <img :src="job.companyLogoUrl" alt="Logo" class="jobCompanyLogo" />

                <div class="jobInfo">
                    <h2 class="jobTitle">{{ job.jobTitleText }}</h2>

                    <div class="jobMeta">
                        <span class="companyName">{{ job.companyName }}</span>
                        <span>• 11–50</span>
                        <span>• ${{ job.annualWage.toLocaleString('en-US') }}</span>
                        <span class="locationTag">Australia only</span>
                    </div>

                    <div class="jobTags">
                        <span class="tag tagPurple">Full time</span>
                        <span class="tag tagBlue">Software Developer</span>
                    </div>
                </div>
            </div>

            <div class="jobTime">2 hours ago</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    job: {
        type: Object,
        required: true
    }
})
</script>