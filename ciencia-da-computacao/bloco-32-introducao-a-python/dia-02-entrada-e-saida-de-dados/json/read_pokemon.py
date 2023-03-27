import json

# loads
with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]

print(pokemons[0])

# load
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])


# dumps
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = [pokemon for pokemon in pokemons if "Grass" in pokemon["type"]]

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_type_pokemons)
    file.write(json_to_write)


# dump
import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = [pokemon for pokemon in pokemons if "Grass" in pokemon["type"]]

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
