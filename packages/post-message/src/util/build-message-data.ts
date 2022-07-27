import {
  TMessageData
} from '../types';

export default function buildMessageData(type: string, payload?: unknown): TMessageData {
  return payload === undefined ? {
    type
  } : {
    type,
    payload
  };
}