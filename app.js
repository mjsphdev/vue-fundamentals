const { ref, computed, createApp } = Vue 
createApp({
  setup() {
      const header = ref("Shopping List App")

      const editing = ref(false)

      const items = ref([
          {id: 1, label: "10 party hats", purchased: true, highPriority: false},
          {id: 2, label: "2 board games", purchased: true, highPriority: false},
          {id: 3, label: "20 cups", purchased: false, highPriority: true}
      ])


      const newItem = ref("")

      const newItemHighPriority = ref(false)


      const saveItem = () => {
          items.value.push(
            {
                id: items.value.length + 1, 
                label: newItem.value,
                highPriority: newItemHighPriority.value
            })
          newItem.value=""
          newItemHighPriority.value =  false
      }
      
      const doEdit = (e) =>{
        editing.value = e
        newItem.value = ""
        newItemHighPriority.value =  false
      }

      const togglePurchased = (item) =>{
            item.purchased = !item.purchased
      }

      const reversedItems = computed(() => [...items.value].reverse())

      return {

         //ref
          header,
          items,
          newItem,
          newItemHighPriority, 
          editing,

          //methods
          saveItem,
          doEdit,
          togglePurchased,

          //computed props
          reversedItems
      }
  }
}).mount('#app')