<template>
    <v-container>
        <Navigationbar></Navigationbar>
        <div class="title-header">
            <h1>Space-X Launches</h1>
            <div class="filter">
                <v-txt>Sort By: </v-txt>
                <v-btn @click="sortbyYear">
                    {{ sortedByYear ? 'Year Descending' : 'Year Ascending' }}
                </v-btn>

            </div>
        </div>
        <v-table>

            <thead>
                <tr>
                    <th>Mission</th>
                    <th>Launch Date</th>
                    <th>Rocket Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="launch in  sortedLaunches " :key="launch.id">
                    <td>

                        {{ launch.mission_name }}

                    </td>
                    <td>{{ launch.launch_date_local }}</td>
                    <td>

                        <NuxtLink :to="{ name: 'Rocket', query: { myObject: JSON.stringify(launch.rocket.rocket) } }">

                            {{ launch.rocket.rocket_name }}
                        </NuxtLink>



                    </td>
                    <td>{{ launch.details }}</td>
                </tr>
            </tbody>
        </v-table>
        <Footer></Footer>
    </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import VueRouter from 'vue-router'

const query = gql`
	query getLaunches {
        launches {
            id
            mission_name
            launch_date_local
            launch_site {
                site_id
                site_name
                site_name_long
            }
            rocket {
                rocket_name
                rocket {
                    name
                    id
                    description
                    first_flight
                    height {
                    meters
                    }
                    diameter {
                    meters
                    }
                    mass {
                    kg
                    }
                    stages
                }
                }
            details
        }
	}
`




const { data } = useAsyncQuery<{
    launches: {

        mission_name: String
        launch_date_local: String
        rocket: {
            rocket_name: String
            rocket: {
                id: String
            }
        }
        id: String
        details: String
    },
}>(query)


var launches = computed(() => data.value?.launches ?? []);

const sortedByYear = ref(true);

const sortedLaunches = computed(() => {
    const launchesCopy = [...launches.value];

    if (sortedByYear.value) {
        launchesCopy.sort((a, b) => {
            return new Date(a.launch_date_local).getTime() - new Date(b.launch_date_local).getTime();
        });
    } else {
        launchesCopy.sort((a, b) => {
            return new Date(b.launch_date_local).getTime() - new Date(a.launch_date_local).getTime();
        });
    }

    return launchesCopy;
});

function sortbyYear() {
    sortedByYear.value = !sortedByYear.value;
}


</script>
<style>
.title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.filter {
    align-items: center;

    display: flex;
}

.filter>* {
    margin: 1vh;
}


td {
    width: 10vh;
}
</style>

