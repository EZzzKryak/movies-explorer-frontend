# Movies explorer
![alt teg](https://i.ibb.co/0GG5dxT/hero-ID-2.jpg)
### Описание проекта :book:
Фуллстэк приложение-визитка с библиотекой любимых фильмов и CRUD-функционалом. 
### Возможности и функционал :computer:
Приложение завязано на двух API - это открытая API с фильмами, которую предоставляет Яндекс.Практикум, и которые отрисовываются на странице. А также моя база данных MongoDB, содержащая избранные фильмы, а также зарегистрированных пользователей.

На главной странице вы можете познакомиться с разработчиком данного проекта (то есть со мной :grin:). Для просмотра предложенных фильмов, а также добавлении их в избранные, вы должны пройти этап регистрации и аутентификации в приложении.

После вы попадёте на страницу с фильмами. Для удобства организован поиск и фильтрация фильмов по длительности. При нажатии на фильм, вас перенаправляет на его трейлер. При нажатии на "сердечко" фильм добавляется в ваши избранные фильмы (а также записывается в отдульную БД).

На вкладке "Сохранённые" вы можете ознакомиться с фильмами, которые вы добавляли себе в коллекцию, для их удаления снова нажмите на закрашенное "сердечко".

### Стэк, технологии и инструменты :wrench:
Проект развернут с `create-reactrapp`, адаптирован для различных устройств с помощью `медиазапросов`.

Написана БД с фильмами на `MongoDB` и `express`, а также используется открытая API с библиотекой фильмов Яндекс.Практикума.
Прописаны схемы для сущностей фильма и пользователя, которые дополнительно валидируются при обработке запроса с фронта.

Реализована авторизацию/аутентификацию на `jwt-токенах`, хранящихся в `localStorage`, данные валидируются как на фронте так и бэке.
На фронте реализован роутинг, поиск фильмов на странице, добавление/удаление фильмов в профиле, редактирование профиля. Сборка `webpack`.

Использованы кастомные хуки, небольшая `seo-оптимизация` с помощью react-helmet, `Context API`.

Проект задеплоен на `nginx` сервере на тачке Я.Облака, выписаны `https-сертификаты`, настроен `CORS`, сервер защищён от падения с помощью `pm2`.


[Ссылка на демо проекта](https://rocket-movies.nomoredomainsrocks.ru)

_P.S. это фронтовая часть репы всего приложения, бэк репозиторий скрыт за ненадобностью показа_
