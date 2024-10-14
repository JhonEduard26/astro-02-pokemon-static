import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true)

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const deleteFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoritePokemons') || '[]') as FavoritePokemon[]

    const newFavorites = favorites.filter(favorite => favorite.id !== pokemon.id)

    localStorage.setItem('favoritePokemons', JSON.stringify(newFavorites))
    setIsVisible(false)
  }

  return (
    <Show when={isVisible()}>
      <div>
        <a href={`/pokemons/${pokemon.name}`}>
          <img style={{
            "view-transition-name": `${pokemon.name}-image`
          }} src={imageUrl} alt={pokemon.name} width={100} height={100} />
          <p class="font-semibold capitalize">#{pokemon.id} {pokemon.name}</p>
        </a>
        <button class="text-purple-500" onClick={deleteFavorite}>
          Borrar
        </button>
      </div>
    </Show>
  )
}