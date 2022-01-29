import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: {
      intro: 'Processing text for better FANDOM experience',
      replaceText: 'Text replacement',
      replaceTextInfo: 'Text replacement module. Nothing extra!',
      addPrefix: 'Add prefix',
      addPrefixInfo: 'Module for adding prefix for every string.',
      fileNames: 'Files list',
      fileNamesInfo: 'Module for unused files page. Allow to get correct filenames ' +
        'which are difficult to get otherwise.',
      quoteReplacement: 'Quote replacement',
      quoteReplacementInfo: 'Module for quote replacement. Pretty simple and doesn\'t process nesting quotes.',
      navboxGenerator: 'Navbox generator',
      navboxGeneratorInfo: 'Module for generating navbox links.',
      galleryGenerator: 'Gallery generator',
      galleryGeneratorInfo: 'Module for generating file names with numbers. Used for galleries, now it lost relevance ' +
        'but I don\'t want to throw it away.',
    }
  },
  ru: {
    translation: {
      intro: 'Преобразование текста для удобной работы на FANDOMе',
      replaceText: 'Замена текста',
      replaceTextInfo: 'Модуль для замены текста. Ничего лишнего!',
      addPrefix: 'Добавление префикса',
      addPrefixInfo: 'Модуль для добавления префикса в начале каждой строки.',
      fileNames: 'Список файлов',
      fileNamesInfo: 'Модуль для страницы неиспользуемых файлов. Позволяет вытащить нужные названия файлов, ' +
        'до которых сложно добраться иначе.',
      quoteReplacement: 'Замена кавычек',
      quoteReplacementInfo: 'Модуль для замены кавычек. Довольно простой (не учитывает вложенность).',
      navboxGenerator: 'Генератор навбоксов',
      navboxGeneratorInfo: 'Модуль для генерации ссылок для навбоксов.',
      galleryGenerator: 'Генератор галерей',
      galleryGeneratorInfo: 'Модуль для генерации списка файлов с нужным номером. Использовался раньше для ' +
        'галерей, сейчас немного утратил актуальность, но выкидывать не хочется.'
    }
  }
}

i18n.use(detector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
});

export default i18n;