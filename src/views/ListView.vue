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
            pokemons: [],
            total_pokemons: 0,
            limit: 20,
            pagina_atual: 1,
            offset: 0,
            busca: ''
        }
    },
    mounted() {
        console.log("Componente montado")
        this.listarPokemons()
    },
    computed: {
        pokemonsFiltrados() {
            console.log('Aqui')
            return this.busca 
                ? this.pokemons.filter(pokemon => pokemon.name.includes(this.busca.toLowerCase()))
                : this.pokemons
        }
    },
    watch: {
        pagina_atual(novo_valor) {
            this.offset = (novo_valor - 1) * this.limit 
            this.listarPokemons()
        }
    },
    methods: {
        async listarPokemons() {
            const api = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
            })
            try {
                let resposta = await api.get("")
                this.pokemons = resposta.data.results
                this.total_pokemons = resposta.data.count
            } catch (erro) {
                console.log(erro)
            }
        }
    }
}
</script>
<template>
    <div class="d-flex container align-items-center flex-column">
        <b-form-input
            class="w-50 mb-3"
            placeholder="Busque pelo nome de um pokemon"
        />
        <b-row>
            <b-col class="mb-3" v-for="pokemon in pokemonsFiltrados" :key="pokemon.name">
                <PokemonCard :pokemon="pokemon"></PokemonCard>
            </b-col>
        </b-row>
        <b-pagination
            class="mt-3"
            v-model="pagina_atual"
            :total-rows="total_pokemons"
            :per-page="limit"
        />
    </div>
</template>