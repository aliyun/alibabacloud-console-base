import { ELanguage } from '../const';
/**
 * 获取控制台支持的语言，这里表示控制台能够支持这些语言，但右上角的切换语言菜单还会根据功能开关来决定是否要展示该语言。
 * 无论如何，支持的语言中，英语和中文肯定是有的。
 */
export default function parseLanguages(languagesInSettings?: ELanguage[]): ELanguage[];
