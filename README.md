## Запуск проекта

npm run dev - запуск проекта.  
Необходимо открыть [http://localhost:3000](http://localhost:3000) в браузере.  
Страница с кейсами находится по адресу [http://localhost:3000/cases](http://localhost:3000/cases)

## Скрипты

`npm run dev` - Запуск приложения в dev режиме  
`npm run build` - Запуск приложения в prod режиме  
`npm run start` - Запуск производственного сервера Next.js.  
`npm run lint` - Проверка ts файлов линтером  
`npm run lint:fix` - Исправление ts файлов линтером  
`npm run lint:scss` - Проверка scss файлов style линтером  
`npm run lint:scss:fix` - Исправление scss файлов style линтером  
`npm run prepare` - Прекоммит хуки  
`npm run prettier` - Запуск prettier  
`npm run storybook` - Запуск storybook  
`npm run build-storybook` - Сборка storybook билда

## Архитектура проекта

В корне проекта находятся папки:

- app - содержит страницы приложения с навигацией
- public - содержит статические файлы (шрифты, иконки)
- src - содержит исходный код приложения

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

#### Запуск линтеров

- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

## pre commit хуки

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

## Работа с данными

Для работы с данными используется state-менеджер react-query

## Storybook

В проекте для ui компонентов описываются стори-кейсы.  
Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx  
Запустить сторибук можно командой: `npm run storybook`
