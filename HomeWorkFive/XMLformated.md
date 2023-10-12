## Задача №1:

Проверить код в XML Formated.
Код:
```XML
<req>

    <surname>Иванов</surname>

    <name>Иван</name>

    <patronymic>Иванович</patronymic>

    <birthdate>01.01.1990</birthdate>

    <birthplace>Москва</birthplace>

    <phone>8 926 766 48 48</phone>

</req
```
<image src="scrinXML.png" alt="Скрин проверки №1">

На скришоте №1 видно, что __в коде содержиться ошибка синтаксиа:__ отсутвует закрывающая скобка `>`, закрывающего тэга `</req`.
Такой код просто не бует работать. (хотя, возможно код задания был просто криво/не полностью скопирован).

Исправление данной ошибки чинить код, что видно на скрине №2:

<image src="scrinXML2.png" alt="Скрин проверки №2">

Следующее замечание.

Тэг `req`, не совсем понятен, возможно имеет смысл подобрать более говорящее название контейнера, описывающее его назначение, как и у остальных полей.


_Ну и так как просто больше ничего такого не вижу, то просто размышления._

Если предпложить что контенер должен будет хранить не одного, а множество "персонажей". То имеет смыл добавить допонительные контейнер, который бы разграничевал текущего персонажа с его данными и потенциалных других.
Кроме того, имеело бы смысл, добавить и уникальные индентификаторы для каждой персоны.

Что-то в этом роде:
<image src="scrinXML3.png" alt="Скрин проверки №3">
```xml
<user>
    <person>
        <id>1</id>
        <fullName>
            <surname>Иванов</surname>
            <name>Иван</name>
            <patronymic>Иванович</patronymic>
        </fullName>
        <information>
            <birthdate>01.01.1990</birthdate>
            <birthplace>Москва</birthplace>
            <phone>8 926 766 48 48</phone>
        </information>
    </person>
</user>
```




