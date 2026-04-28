<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { capitalize } from 'vue';

export default {
    name: 'DetailsView',
    data() {
        return {
            pokemon: null,
            id: null
        }
    },
    mounted() {
        this.id = useRoute().params.id
        this.buscarDetalhes()
    },
    computed: {
        capitalizar() {
            console.log('aqui')  
            return capitalize(this.pokemon.name)
        },
        pegarImagem() {
            // 'https://pokeapi.co/api/v2/pokemon/2/'
            if (this.id) {
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.id}.gif` 
            } else {
                return ''
            }
        }
    },
    methods: {
        async buscarDetalhes() {
             const api = axios.create({
                baseURL: "https://pokeapi.co/api/v2/pokemon"
            })

            try {
                let resposta = await api.get(this.id)
                // console.log(resposta)
                this.pokemon = resposta.data
            } catch (erro) {
                console.log(erro)
            }
        }
    
    }
}
</script>
<template>
    <div class="container d-flex flex-column text-center">
        <b-card v-if="pokemon">
            <h3>{{ capitalizar }}</h3>
            <b-img
                class="img-pokemon mb-3"
                :src="pegarImagem"
            />
            <p><b>Altura: </b>{{ pokemon.height / 10 }}m</p>
            <p><b>Peso: </b>{{ pokemon.weight / 10 }}kg</p>
            <p><b>Tipos: </b>
                <span v-for="(pokemon_type, index) in pokemon.types">
                    {{pokemon_type.type.name}}<span v-if="index < pokemon.types.length - 1">, </span> 
                </span>
            </p>
            <b-button variant="secondary" class="mt-2" @click="$router.back()">
                Voltar
            </b-button>
        </b-card>
    </div>
</template>
<style>
.img-pokemon {
    width: 200px;
}
</style>