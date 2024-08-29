<template>
    <div>
        <div v-if="loading" class="spinner-overlay">
            <span class="loader"></span>
        </div>
        <div v-else>
            <div class="container">
                <div v-for="item in vulnerabilities.vulnerabilities" class="table">
                    <div class="table-header">
                        <div class="header-div"><span class="title">Name:</span> {{ item.name }}</div>
                        <div class="header-div"><span class="title">CVEID:</span> {{ item.CVEID }}</div>
                        <div class="header-div"><span class="title">Published Date:</span> {{ item.published_date.substring(0, 10) }}</div>
                        <div class="header-div"><span class="title">Last Modified:</span> {{ item.last_modified.substring(0, 10) }}</div>
                    </div>
                    <div v-if="item.summary !== undefined" class="summary"><span class="title">Summary: </span> {{
                        item.summary }}</div>
                    <div class="description"><span class="title">Description: </span> {{ item.description }}</div>
                    <div class="version-container">
                        <div class="vulnerable-container">
                            <div class="vulnerable-versions"><span class="title">Vulnerable Versions: </span>{{
                                item.affected_versions }}
                            </div>
                        </div>
                        <div class="fixed-version"><span class="title">Fixed Versions: </span>{{ item.patched_versions }}
                        </div>
                        <div v-if="item.severity !== undefined" class="header-div"><span class="title">Severity: </span> {{
                            item.severity }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id;

const vulnerabilities = ref(null);
const loading = ref(true);


const fetchVulnerability = async (id) => {
    loading.value = true;
    try {
        const apiUrl = `http://37.32.7.91:3000/api/vulnerabilities/detail/${id}`;
        const response = await axios.get(apiUrl);

        vulnerabilities.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        vulnerabilities.value = null
    } finally {
        loading.value = false;
    }
};


onMounted(async () => {
    await fetchVulnerability(id);
});
</script>
  

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
}

.table {
    display: grid;
    width: 80%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 10% 20% 50% 20%;
    margin-top: 50px;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 10px;
}

.table-header {
    grid-column: 1 / 6;
    grid-row: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.header-div {
    margin-right: 30px;
}

.summary {
    grid-column: 1 / 6;
    grid-row: 2;
    margin-top: 20px;
}

.description {
    grid-column: 1 / 6;
    grid-row: 3;
    margin-top: 20px;
}

.version-container {
    grid-column: 1 / 6;
    grid-row: 4;
    display: grid;
    margin-top: 20px;
    grid-template-columns: 50% 30% 20%;
    height: auto;
}

.vulnerable-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.title {
    color: #a6c74d;
    font-weight: bold;
}

.spinner-overlay {
    position: fixed;
    /* Fixed position to cover the entire screen */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    /* Dark semi-transparent background */
    display: flex;
    /* Flexbox to center the spinner */
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* High z-index to ensure it's on top */
}

/* Simple spinner styles */
.spinner {
    border: 4px solid #f3f3f3;
    /* Light grey */
    border-top: 4px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

}

.spinner {
    color: #CAFF33;
    background-color: #CAFF33 !important;
    /* Replace with your desired color */
}

.loader {
    position: relative;
    display: flex;
}

.loader:before,
.loader:after {
    content: '';
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    margin: 0 5px;
    border-radius: 50%;
    color: #FFF;
    background: currentColor;
    box-shadow: 50px 0, -50px 0;
    animation: left 1s infinite ease-in-out;
}

.loader:after {
    color: #CAFF33;
    animation: right 1.1s infinite ease-in-out;
}


@keyframes right {

    0%,
    100% {
        transform: translateY(-10px)
    }

    50% {
        transform: translateY(10px)
    }
}

@keyframes left {

    0%,
    100% {
        transform: translateY(10px)
    }

    50% {
        transform: translateY(-10px)
    }
}

@media (max-width:800px) {
    .table {
        display: grid;
        width: 80%;
        grid-template-columns: 50% 50%;
        grid-template-rows: 10% 10% 10% 10% 40% 20%;
        margin-top: 50px;
        border: 1px solid white;
        padding: 10px 20px;
        border-radius: 10px;
    }

    .table-header {
        grid-column: 1 / 3;
        grid-row: 1 / 4;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }

    .summary {
        grid-column: 1 / 3;
        grid-row: 4;
        margin-top: 20px;
    }

    .description {
        grid-column: 1 / 3;
        grid-row: 5;
        margin-top: 20px;
        
    }

    .version-container {
        grid-column: 1 / 3;
        grid-row: 6;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        flex-wrap: wrap;
        height: auto;
        
    }
    .vulnerable-container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    
    .header-div {
        margin-bottom: 10px;
    }

    .version {
        margin-bottom: 10px;
    }
}
</style>