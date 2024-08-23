<template>
  <div class="custom-select">
    <button @click.prevent="toggleDropdown" class="select-button">
      <span class="selected-value">{{ selectedFaction }}</span>
      <Icon
        name="material-symbols:arrow-drop-down"
        class="arrow"
        :class="{ 'arrow--opened': isDropdownOpen }"
        size="24px"
      />
    </button>
    <ul v-show="isDropdownOpen" class="select-dropdown">
      <li v-for="faction in factionsList" :key="faction.id">
        <input type="radio" :id="faction.filterName" name="faction" />
        <label :for="faction.filterName" @click="selectValue(faction)">{{ faction.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['selectFaction'])

const factionsStore = useFactionsStore()
const charactersStore = useCharactersStore()

const { factionsList } = storeToRefs(factionsStore)
const { selectedFaction } = storeToRefs(charactersStore)

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectValue = faction => {
  isDropdownOpen.value = false
  emit('selectFaction', faction)
}
</script>

<style scoped lang="scss">
@use 'assets/scss/variables' as *;

.custom-select {
  position: relative;
  width: 400px;
  max-width: 100%;
  font-size: 18px;
  color: #000;

  .select-button {
    width: 100%;
    font-size: 16px;
    background-color: $nestedCardBackgroundColor;
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .selected-value {
    text-align: left;
    color: $whiteColor;
  }

  .arrow {
    color: $whiteColor;
    transition: 0.2s ease;
  }

  .arrow--opened {
    transform: rotate(180deg);
  }

  .select-dropdown {
    position: absolute;
    list-style: none;
    width: 100%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    background-color: $nestedCardBackgroundColor;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    margin-top: 10px;
    max-height: 300px;
    overflow-y: auto;
    transition: 0.5s ease;
    z-index: 100;

    li {
      position: relative;
      cursor: pointer;
      display: flex;
      gap: 1rem;
      align-items: center;
      color: $whiteColor;

      @media (hover: hover) {
        &:hover {
          background-color: $bodyBackgroundColor;
        }
      }

      label {
        width: 100%;
        padding: 15px;
        cursor: pointer;
      }
    }

    input[type='radio'] {
      position: absolute;
      left: 0;
      opacity: 0;
    }

    input:checked + label {
      background-color: $bodyBackgroundColor;
    }

    input:focus + label {
      background-color: $bodyBackgroundColor;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 25px;
    }
  }
}
</style>
