import type IMessage from "../../services/types/messaage";

const mockMessages: IMessage[] = [
	{ message: 'Hey there how are you?', author: 'Trek', createdAt: new Date(323424324523), _id: '0' },
	{ message: 'Guyssss?', author: 'Trek', createdAt: new Date(132432), _id: '1' },
	{ message: "What's up?", author: 'You', createdAt: new Date(8678567452), _id: '2' },
	{ message: 'Just chilling my dude', author: 'Trek', createdAt: new Date(86785674588), _id: '2' },
	{ message: 'Just chilling my dude', author: 'Trek', createdAt: new Date(86785674588), _id: '3' },
	{ message: 'GUYSSSSSS, I HAVE SOMETHING TO REVEAL', author: 'Sofia', createdAt: new Date(86785674588), _id: '4' },
	{ message: 'I CAN WRITE VERY LONG SENTENCES, REALLY REALLY LONG SENTENCES THAT SEEM TO NEVER END', author: 'Sofia', createdAt: new Date(516516516448), _id: '5' },
]

export default mockMessages;