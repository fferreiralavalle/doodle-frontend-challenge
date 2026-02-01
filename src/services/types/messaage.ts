export default interface IMessage {
	message: string;
	author: string;
	createdAt: Date;
	_id: string;
}

export interface IPostMessage {
	message: string;
	author: string;
}