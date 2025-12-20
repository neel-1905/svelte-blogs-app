import { ObjectId } from 'mongodb';

export const isMongoId = (value: unknown) => typeof value === 'string' && ObjectId.isValid(value);
