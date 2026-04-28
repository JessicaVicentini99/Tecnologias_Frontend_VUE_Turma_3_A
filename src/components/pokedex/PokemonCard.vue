<script lang="ts">
import { capitalize } from 'vue';

export default{
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    computed: {
        capitalize() {
            if(this.pokemon) {
                let name = this.pokemon.name
                return name.charAt(0).toUpperCase() + name.slice(1)

            }
            // console.log(resultado)
        },
        pegarImagem() {
            // 'https://pokeapi.co/api/v2/pokemon/2/'
            if (this.pokemon) {
                let id = this.pokemon.url.split('/').filter(Boolean).pop()
                // console.log(id)
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif` 
            } else {
                return ''
            }
        }
    },
    methods: {
        verDetalhes() {
            if (this.pokemon) {
                let id = this.pokemon.url.split('/').filter(Boolean).pop()
                this.$router.push({name: 'pokemon-detalhes', params: {id}})
            }
        }
    }
}
</script>
<template>
    <b-card 
        :title="capitalize"
        class="mb-3"
        body-class="text-center card-pokemon"
    >
        <b-img 
            :src="pegarImagem"
            style="width: 100px; height: 100px;"
            class="mb-2"
        />
        <b-button variant="primary" @click="verDetalhes">
            Ver Detalhes
        </b-button>
    </b-card>
</template>
<style>
    .card-pokemon {
        width: 250px;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>