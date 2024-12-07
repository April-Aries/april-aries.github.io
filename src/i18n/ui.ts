/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "zh_TW": {
        "site.title": {
            text: "AA's blog"
        },
        "site.description": {
            text: ""
        },
        "profile.description": {
            text: "正在學習的工程師、熱忱的教育者、未來的駭客"
        },
        "blog.lastUpdated": {
            text: "最近一次更新："
        },
        "sidebar.tableOfContents": {
            text: "目錄"
        },
        "project.platform": {
            text: "PLATAFORMA"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "en": {
        "site.title": {
            text: "AA's blog"
        },
        "site.description": {
            text: ""
        },
        "profile.description": {
            text: "On my path to an engineer, passionate teacher, and future hacker" 
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };