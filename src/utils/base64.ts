export const encodeBase64 = (text: string) => {
	const buff = Buffer.from(text, "utf-8");

	return buff.toString("base64");
};

export const decodeBase64 = (base64: string) => {
	const buff = Buffer.from(base64, "base64");

	return buff.toString("utf-8");
};
