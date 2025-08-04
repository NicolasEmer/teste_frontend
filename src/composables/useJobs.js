import { ref } from 'vue'

const jobsJson = ref([])

const pathJobsJson = '/jobs-list.json'

export function getJobs() {
    const allJobs = ref([])

    const loadJobs = async (filters = {}) => {
        try {
            if (!allJobs.value.length) {
                const response = await fetch(pathJobsJson)
                allJobs.value = await response.json()
            }

            const jobsFiltered = allJobs.value.filter(job => {
                if (filters.name && !job.jobTitleText.toLowerCase().includes(filters.name.toLowerCase())) {
                    return false
                }

                if (filters.locationSearchTerm && !job.locationName.toLowerCase().includes(filters.locationSearchTerm.toLowerCase())) {
                    return false
                }

                if ((filters.salaryMin && filters.salaryMax) && (job.annualWage < filters.salaryMin || job.annualWage > filters.salaryMax)) {
                    return false
                }

                if (filters.companies?.length > 0) {
                    const companiesSelected = filters.companies.map(e => e.toLowerCase())
                    if (!companiesSelected.includes(job.companyName.toLowerCase())) {
                        return false
                    }
                }

                return true
            })

            jobsJson.value = jobsFiltered
        } catch (error) {
            console.error('Erro ao carregar empregos:', error)
        }
    }

    return { jobsJson, loadJobs }
}