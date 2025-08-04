<template>
    <div class="containerIndividualFilters">
        <button class="dropdownToggle" @click="toggleDropdown">
            {{ selectedCompanies.length ? `${selectedCompanies.length} companies` : 'Company' }}
            <span>▼</span>
        </button>

        <div v-if="isOpen" class="dropdownMenu">
            <span class="dropdownTitle">Companies</span>
            <button class="dropdownClearButton" @click="clearSelectionAndSearch">
                <span>Clear</span>
            </button>
            <div class="containerDropdownSearch">
                <i class="fas fa-search"></i>
                <input type="text" v-model="searchTerm" class="dropdownSearchInput" placeholder="Search" />
            </div>

            <hr />

            <label v-for="companySelected in selectedCompanies" :key="companySelected"
                class="dropdownSelectedCompanies">
                <input type="checkbox" :value="companySelected" v-model="selectedCompanies" />
                <img :src="companySelected.logo" alt="Logo" class="companyLogo" />
                {{ companySelected.name }}
            </label>

            <hr v-if="selectedCompanies.length" />

            <label v-for="company in filteredCompanies" :key="company" class="dropdownItem">
                <input type="checkbox" :value="company" v-model="selectedCompanies" />
                <img :src="company.logo" alt="Logo" class="companyLogo" />
                {{ company.name }}
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    jobs: {
        type: Array,
        default: () => [],
    },
    selectedCompanies: {
        type: Array,
        default: () => [],
    },
    searchTerm: {
        type: String,
        default: '',
    }
})

const isOpen = ref(false)

const emit = defineEmits([
  'update:selectedCompanies',
  'update:searchTerm'
])

const selectedCompanies = computed({
    get: () => props.selectedCompanies,
    set: (val) => emit('update:selectedCompanies', val)
})

const searchTerm = computed({
    get: () => props.searchTerm,
    set: (val) => emit('update:searchTerm', val)
})

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const uniqueCompanies = computed(() => {
    const seen = new Set()
    const result = []

    for (const job of props.jobs) {
        const key = job.companyName

        if (!seen.has(key)) {
            seen.add(key)
            result.push({
                name: job.companyName,
                logo: job.companyLogoUrl
            })
        }
    }

    return result.sort((a, b) => a.name.localeCompare(b.name))
})

const filteredCompanies = computed(() => {
    const term = searchTerm.value.trim().toLowerCase()

    return uniqueCompanies.value.filter(company => {
        const name = company.name.toLowerCase()

        const matchesSearch = !term || name.includes(term)
        const isNotSelected = !selectedCompanies.value.some(selected => selected.name === company.name)

        return matchesSearch && isNotSelected
    })
})

const clearSelectionAndSearch = () => {
    selectedCompanies.value = []
    searchTerm.value = ''
}

</script>