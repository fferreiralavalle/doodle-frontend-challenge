const dateOptions = {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
}

const formatDate = (date: Date, options: object = dateOptions) =>
	`${date.toLocaleDateString(undefined, options)} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`

export default formatDate;