<template>
    <div class="containerIndividualFilters">
        <button class="dropdownToggle" @click="toggleDropdown">
            <span>Type of work <i class="fas fa-chevron-down"></i></span>
        </button>

        <div v-if="isOpen" class="dropdownMenu">
            <span class="dropdownTitle">Type of work</span>
            <button class="dropdownSelectAllButton" @click="selectAll">
                <span>Select all</span>
            </button>

            <hr />

            <label v-for="type in typeOfWorks" :key="type"
                class="dropdownItem">
                <input type="checkbox" :value="type" v-model="selectedTypes" />
                {{ type }}
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    selectedTypes: {
        type: Array,
        default: () => [],
    }
})

const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const emit = defineEmits([
  'update:selectedTypes'
])

const selectedTypes = computed({
    get: () => props.selectedTypes,
    set: (val) => emit('update:selectedTypes', val)
})

const typeOfWorks = ['Full time', 'Part time', 'Contractor', 'Temporary', 'Intern', 'Volunteer', 'Other']

const selectAll = () => {
    selectedTypes.value = [...typeOfWorks]
}

</script>