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
                console.log(id)
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif` 
            } else {
                return ''
            }
        }
    }
}
</script>
<template>
    <b-card 
        :title="capitalize"
        class="text-center mb-3"
        style="height: 100%;"
    >
        <b-img 
            :src="pegarImagem"
            style="height: 100px;"
            class="mb-2"
        />
        <b-button variant="primary">
            Ver Detalhes
        </b-button>
    </b-card>
</template>