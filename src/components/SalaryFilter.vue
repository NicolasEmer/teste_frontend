<template>
    <div class="containerIndividualFilters">
        <button class="dropdownToggle" @click="toggleDropdown">
            <span>Salary <i class="fas fa-chevron-down"></i></span>
        </button>

        <div v-if="isOpen" class="dropdownMenu">
            <span class="dropdownTitle">Salary</span>
            <button class="dropdownClearButton" @click="clearSelection">
                <span>Clear</span>
            </button>
            <div class="custom-select-wrapper">
                <select class="custom-select">
                    <option>United States Dollars ($)</option>
                </select>
            </div>

            <div class="dropdownSelectedRange" v-if="selectedSalaryRange">
                <span>{{ selectedSalaryRange.labelMin }}</span>
                <span>{{ selectedSalaryRange.labelMax }}</span>
            </div>

            <hr />

            <label v-for="(salarySelected, index) in salaryRanges" :key="salarySelected"
                class="dropdownselectedSalaryRange">
                <input type="radio" :value="salarySelected" v-model="selectedSalaryRange" />
                <span v-if="index === 0">Show all</span>
                <span v-else>{{ salarySelected.labelMin }} - {{ salarySelected.labelMax }}</span>
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    selectedSalaryRange: {
        type: Object,
        default: () => null,
    }
})

const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const emit = defineEmits([
  'update:selectedSalaryRange'
])

const selectedSalaryRange = computed({
    get: () => props.selectedSalaryRange,
    set: (val) => emit('update:selectedSalaryRange', val)
})

const salaryRanges = [
    { label: 'Show all', labelMin: '$0', labelMax: '$180,000+', min: 0, max: Infinity },
    { labelMin: '$30,000', labelMax: '$60,000', min: 30000, max: 60000 },
    { labelMin: '$60,000', labelMax: '$90,000', min: 60000, max: 90000 },
    { labelMin: '$90,000', labelMax: '$120,000', min: 90000, max: 120000 },
    { labelMin: '$120,000', labelMax: '$150,000', min: 120000, max: 150000 },
    { labelMin: '$150,000', labelMax: '$180,000', min: 150000, max: 180000 },
    { labelMin: '$180,000+', labelMax: '', min: 180000, max: Infinity }
]

selectedSalaryRange.value = salaryRanges[0]

const clearSelection = () => {
    selectedSalaryRange.value = salaryRanges[0]
}

defineExpose({ clearSelection })

</script>