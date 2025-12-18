import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export interface JWTPayload {
	id: string;
	email: string;
	iat?: number;
	exp?: number;
}

export function signJwt(payload: JWTPayload, expiresIn = 7) {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn * 24 * 60 * 60 });
}

export function verifyJwt(token: string): JWTPayload | null {
	try {
		const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;

		// Ensure decoded payload contains expected fields
		if (!decoded || typeof decoded !== 'object' || !decoded.id || !decoded.email) {
			return null;
		}

		return decoded;
	} catch {
		return null;
	}
}
