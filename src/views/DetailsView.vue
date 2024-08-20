// src/views/DetailsPage.vue
<template>
    <div class="container">
        <!-- v-if="item.VulnerableVersions.length !== undefined || item.affectedVersions !== undefined" -->
        <div v-for="item in vulnerabilities.key" class="table">
            <div class="table-header">
                <div class="header-div"><span class="title">Name:</span> {{ item.name }}</div>
                <div class="header-div"><span class="title">CVEID:</span> {{ item.CVEID }}</div>
                <div class="header-div"><span class="title">Published Date:</span> {{ item.publishedDate }}</div>
                <div class="header-div"><span class="title">Last Modified:</span> {{ item.lastModified }}</div>
                <div v-if="item.severity !== undefined" class="header-div"><span class="title">Severity: </span> {{ item.severity }}</div>
            </div>
            <div v-if="item.summary!== undefined" class="summary"><span class="title">Summary: </span> {{ item.summary }}</div>
            <div class="description"><span class="title">Description: </span> {{ item.description }}</div>
            <div class="version-container">
                <div class="vulnerable-container">
                    <span class="title">Vulnerable Versions: </span>
                    <div v-if="item.affectedVersions !== undefined" class="vulnerable-versions">{{ item.affectedVersions }}
                    </div>
                    <div v-else class="vulnerable-container">
                        <div v-for="vulnerability in item.VulnerableVersions">{{ vulnerability }}</div>
                    </div>
                </div>
                <div class="fixed-version"><span class="title">Fixed Versions: </span>{{ item.patchedVersions }}</div>
                <div class="score"><span class="title">Score : </span>{{ item.NVDScore }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref } from 'vue';

const store = useStore();
const sharedData = computed(() => store.getters.getSharedData);
const vulnerabilities = sharedData.value
console.log(sharedData.value)
const items = ref([{ name: 'Foo' }, { name: 'Bar' }])
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
.vulnerable-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.title {
    color: #a6c74d;
    font-weight: bold;
}

</style>