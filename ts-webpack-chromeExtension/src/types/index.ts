export interface Message {
  type: string;
  payload?: any;
}

export interface ClipData {
  url: string;
  title: string;
  content: string;
  timestamp: number;
} 