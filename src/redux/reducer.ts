export function reducer(state: any = {conversations: {}}, action: any) {
  switch (action.type) {
    case 'users_online':
        /** Реагирование и сохранение всех активных пользователей */
      const conversations = {...state.conversations};
      const usersOnline = action.data;
      for (let i = 0; i < usersOnline.length; i++) {
        const userId = usersOnline[i].userId;
        if (conversations[userId] === undefined) {
          conversations[userId] = {
            messages: [],
            username: usersOnline[i].username,
          };
        }
      }
      return {...state, usersOnline, conversations};
    case 'private_message':
        /** Получение нового сообщения и сохранения его*/
      const conversationId = action.data.conversationId;
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [conversationId]: {
            ...state.conversations[conversationId],
            messages: [
              action.data.message,
              ...state.conversations[conversationId].messages,
            ],
          },
        },
      };
    case 'self_user':
        /** Получение данных о своем пользователе */
      return {...state, selfUser: action.data};
    default:
      return state;
  }
}
