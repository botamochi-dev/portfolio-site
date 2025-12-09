// プロフィールデータの型定義
export interface Profile {
  name: string;
  title: string;
  university: string;
  department: string;
  grade: string;
  bio: string;
  profileImage: string;
}

// ヘッダーデータの型定義
export interface HeaderData {
  title: string;
  subtitle: string;
}

// スキルデータの型定義
export interface Skill {
  name: string;
  icon: string;
  experience: string;
  level: number;
}

// プロジェクトデータの型定義
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  image?: string;
}

// 連絡先データの型定義
export interface Contact {
  id: number;
  type: string;
  label: string;
  value: string;
  url: string;
  icon: "email" | "github";
}

// フッターデータの型定義
export interface FooterData {
  copyright: string;
  year: number;
  name: string;
}
