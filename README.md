# Get Followings Instagram

This project was made with html, and native javascript (css was omitted for practical reasons). To obtain your followers you must follow the instructions in the documentation described in this document

## Authors

- [@EmmanuelIngSystem](https://github.com/EmmanuelIngSystem)

## Documentation

1. First we must go to the url of our Instagram profile
2. Enter the list of people you are following and scroll until you reach the end
3. We must click inspect in the browser and extract the html from the list container (copy html)
4. [We format the html since it copies it in one line](https://www.freeformatter.com/html-formatter.html#before-output). We paste it inside the body of the index
5. We identify the tags that contain the names of the people we are following and add a class (I put "container_data_following" and that is the same one I select in the javascript in case you put another one, just remember to change it in the javascript) all of those (possibly you will see a corks error and for this you only have to delete the lines in which that error is marked)
6. For practical reasons we hide (with a CSS "display: none") the parent div

> [!NOTE]
> This code can be adopted for example if you want to get your followers and extend it if desired. It is an easy to understand code

## Link references

- [Manual de Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)