<template>
    <div class="sectionSearchBar">
        <div class="containerTitle">
            <span class="smallTitle">Remote jobs</span>
            <h1>Remote jobs</h1>
            <span class="infoTitle">
                Find your next remote job as companies like
                <span class="company">Intercom</span>,
                <span class="company">Spotify</span>,
                <span class="company">Square</span>,
                and <span class="company">Twitter</span>
            </span>
        </div>

        <div class="containerSearchBars">
            <div class="containerJobSearchBar">
                <i class="fas fa-search"></i>
                <input type="text" class="searchInput" placeholder="Job title or keyword" v-model="titleSearchTerm" />

            </div>
            <div class="containerCountrySearchBar">
                <i class="fas fa-search"></i>
                <input type="text" class="searchInput" placeholder="Country or timezone" v-model="locationSearchTerm" />
                <button class="clearButton" @click="clearTitleLocationTerms">
                    <span>Clear</span>
                </button>
                <button class="searchButton" @click="searchJobs">
                    <span>Search</span>
                </button>
            </div>
        </div>

        <div class="containerFilters">
            <CompanyFilter v-model:selectedCompanies="selectedCompanies" v-model:searchTerm="CompaniesSearchTerm"
                :jobs="jobsBase" />

            <SalaryFilter ref="salaryFilterRef" v-model:selectedSalaryRange="selectedSalaryRange" />

            <TypeWorkFilter v-model:selectedTypes="selectedTypes" />

            <button class="clearAllFiltersButton" @click="clearAllFilters">
                <span>Clear all</span>
            </button>
        </div>
    </div>

    <JobsSection :jobs="jobsJson" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CompanyFilter from './CompanyFilter.vue'
import SalaryFilter from './SalaryFilter.vue'
import TypeWorkFilter from './TypeWorkFilter.vue'
import { getJobs } from '../composables/useJobs.js'
import JobsSection from './JobsSection.vue';

const salaryFilterRef = ref(null)

const selectedCompanies = ref([])
const CompaniesSearchTerm = ref('')
const selectedSalaryRange = ref([])
const selectedTypes = ref([])
const titleSearchTerm = ref('')
const locationSearchTerm = ref('')

const clearTitleLocationTerms = () => {
    titleSearchTerm.value = ''
    locationSearchTerm.value = ''
}

const clearAllFilters = () => {
    selectedCompanies.value = []
    salaryFilterRef.value.clearSelection()
    selectedTypes.value = []
    CompaniesSearchTerm.value = ''
}

const { jobsJson, loadJobs } = getJobs()

const jobsBase = ref([])

const searchJobs = async () => {
    await loadJobs({
        name: titleSearchTerm.value,
        location: locationSearchTerm.value,
        salaryMin: selectedSalaryRange.value.min,
        salaryMax: selectedSalaryRange.value.max,
        companies: selectedCompanies.value.map(c => c.name)
    })
}

onMounted(async () => {
    await loadJobs()
    jobsBase.value = [...jobsJson.value]
})

</script>
