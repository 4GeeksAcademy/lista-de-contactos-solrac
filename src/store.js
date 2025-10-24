export const initialStore = () => {
  return {
    contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    // case 'set_agenda':
    //   return {...store, agenda: action.payload};

    case 'set_contactos':
      return  {...store, contacts: action.payload};

    default:
      throw Error('Unknown action.');
  }
}
