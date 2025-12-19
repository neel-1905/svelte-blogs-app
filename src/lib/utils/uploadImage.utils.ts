import { IMGBB_API_KEY } from '$env/static/private';
import { PUBLIC_IMGBB_URL } from '$env/static/public';

export async function uploadToImgBB(file: File): Promise<string> {
	const buffer = Buffer.from(await file.arrayBuffer());
	const base64 = buffer.toString('base64');

	const fd = new FormData();
	fd.append('image', base64);

	const res = await fetch(`${PUBLIC_IMGBB_URL}?key=${IMGBB_API_KEY}`, { method: 'POST', body: fd });

	if (!res.ok) {
		throw new Error('ImgBB upload failed');
	}

	const json = await res.json();
	return json.data.image.url;
}
