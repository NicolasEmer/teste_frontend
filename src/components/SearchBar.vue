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
                <input type="text" class="searchInput" placeholder="Job title or keyword" />

            </div>
            <div class="containerCountrySearchBar">
                <i class="fas fa-search"></i>
                <input type="text" class="searchInput" placeholder="Country or timezone" />
                <button class="clearButton">
                    <span>Clear</span>
                </button>
                <button class="searchButton">
                    <span>Search</span>
                </button>
            </div>
        </div>

        <div class="containerFilters">
            <CompanyFilter v-model:selectedCompanies="selectedCompanies" v-model:searchTerm="searchTerm" :jobs="jobsJson"/>

            <SalaryFilter v-model:selectedSalaryRange="selectedSalaryRange" />

            <TypeWorkFilter v-model:selectedTypes="selectedTypes" />

            <button class="clearAllFiltersButton" @click="clearAllFilters">
                <span>Clear all</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CompanyFilter from './CompanyFilter.vue'
import SalaryFilter from './SalaryFilter.vue'
import TypeWorkFilter from './TypeWorkFilter.vue'


const pathJobsJson = '/jobs-list.json'

const jobsJson = ref([])

const selectedCompanies = ref([])
const searchTerm = ref('')
const selectedSalaryRange = ref([])
const selectedTypes = ref([])

const clearAllFilters = () => {
  selectedCompanies.value = []
  selectedSalaryRange.value = null
  selectedTypes.value = []
  searchTerm.value = ''
}

const loadJobs = async () => {
    try {
        const response = await fetch(pathJobsJson)
        const data = await response.json()
        jobsJson.value = data
    } catch (error) {
        console.error('Erro ao carregar empregos:', error)
    }
}

onMounted(() => {
    loadJobs()
})

</script>
