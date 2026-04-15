<script lang="ts">
import PokemonCard from '@/components/pokedex/PokemonCard.vue';
import axios from 'axios';

export default {
    name: "ListView",
    components: {
        PokemonCard
    },
    data() {
        return {
            pokemons: []
        }
    },
    mounted() {
        console.log("Componente montado")
        this.listarPokemons()
    },
    methods: {
        async listarPokemons() {
            const api = axios.create({
                baseURL: "https://pokeapi.co/api/v2/pokemon"
            })

            try {
                let resposta = await api.get("")
                console.log(resposta)
                this.pokemons = resposta.data.results
            } catch (erro) {
                console.log(erro)
            }
        }
    }
}
</script>
<template>
    <div class="d-flex container align-items-center">
        <b-row>
            <b-col class="mb-3" v-for="pokemon in pokemons" :key="pokemon.name">
                <PokemonCard :pokemon="pokemon"></PokemonCard>
            </b-col>
        </b-row>
    </div>
</template>