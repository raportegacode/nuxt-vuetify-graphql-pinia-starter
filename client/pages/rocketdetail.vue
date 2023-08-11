<template>
    <v-container>
        <Navigationbar></Navigationbar>
        <h2>Rocket Details</h2>
        <v-table>
            <thead>
                <tr>
                    <th>Rocket</th>
                    <th>First Flight</th>
                    <th>Height(meters)</th>
                    <th>Diameter(meters)</th>
                    <th>Mass(kg)</th>
                    <th>No. of Stages</th>
                    <th>Description</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>{{ rocket.name }}</td>
                    <td>{{ rocket.first_flight }}</td>
                    <td>{{ rocket.height.meters }}</td>
                    <td>{{ rocket.diameter.meters }}</td>
                    <td>{{ rocket.mass.kg }}</td>
                    <td>{{ rocket.stages }}</td>
                    <td class="desc">{{ rocket.description }}</td>
                </tr>
            </tbody>
        </v-table>



    </v-container>
</template>
  
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const rocket = JSON.parse(route.query.myObject);
console.log(rocket.name)

</script>
<style>
.desc {
    width: 20vh;
}

td {

    width: 8vh;
}

th {
    font-size: larger;
    font-weight: 800;
}
</style>