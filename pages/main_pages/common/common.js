document.addEventListener('DOMContentLoaded', function() {
    const MenuBoxArray = document.querySelectorAll('.MenuBox');
    MenuBoxArray.forEach( function(MenuBox) {
        MenuBox.querySelector('.Menu').addEventListener('click', function(e) {
            e.preventDefault();
            const ItemBox = MenuBox.querySelector('.ItemBox');
            const Arrow = MenuBox.querySelector('.MenuArrow');
            if (! ItemBox.classList.contains('ItemBox_')) {
                ItemBox.classList.add('ItemBox_');
                Arrow.classList.add('rotate');
            } else {
                
                ItemBox.classList.remove('ItemBox_');
                Arrow.classList.remove('rotate');
            }           
            //Arrow.classList.toggle('rotate'); 切换旋转类
            //两种写法都可以。切换的过程即为添加或移除rotate类，如下：
            // if (Arrow.classList.contains('rotate')) {
            //     Arrow.classList.remove('rotate');
            // } else {
            //     Arrow.classList.add('rotate');
            // }
        });
    });
});

if (window.innerWidth < 950) {
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.querySelector('.PhoneSider');
        let sider = document.querySelector('.Sider');
        let Arrow = button.getElementsByClassName('Arrow')[0];//注意用法区别
        button.addEventListener('click', function() {
            if (!button.classList.contains('PhoneSider_')) {
                button.classList.add('PhoneSider_');
                sider.classList.add('Sider_');
                Arrow.classList.add('Arrow_');
            }else {
                button.classList.remove('PhoneSider_');
                sider.classList.remove('Sider_');
                Arrow.classList.remove('Arrow_');
            }
        });
    });
}



// 定义:
// window 和 document 都是全局变量 
// window 是 Bom 的根节点 document 是 Dom 的根节点 
// Bom: Browser Object Model  (浏览器对象模型)
// Dom: Document Object Model  (文档对象模型)
// window 包含 document   即 window.document 
// 
// 使用：
// document.addEventListener('DOMContentLoaded', function() {})
// window.addEventListener('load', function() {})
// 
// 因此其实DOMcontentLoaded事件window也可以监听
// 
// 区别：
// DOMcontentLoaded: 在文档的初始 HTML 已被完全加载和解析后触发，但不等待外部资源的加载
// load: 在所有资源（包括图像、样式表、iframe 等）完全加载后触发


// document.querySelector(selectors)：返回第一个匹配指定选择器的元素，如果没有找到匹配的元素，则返回 null
// document.querySelectorAll(selectors)：返回所有匹配指定选择器的元素，如果没有找到匹配的元素，则返回一个空的 NodeList
// 注：selector 与 id class tagName 不同     例子见上
// document.getElementById(id)：返回带有指定 id 的元素，如果没有找到匹配的元素，则返回 null
// document.getElementsByClassName(className)：返回所有带有指定 class 的元素，如果没有找到匹配的元素，则返回一个空的 HTMLCollection
// document.getElementsByTagName(tagName)：返回所有带有指定标签的元素，如果没有找到匹配的元素，则返回一个空的 HTMLCollection

// 定义：
// forEach 方法是数组和类数组对象（如 NodeList）的一个迭代方法
// 
// 使用：
// array.forEach(callback(currentValue, index, array), thisArg);
// callback：为数组中每个元素执行的函数，接收三个参数：
// currentValue：当前正在处理的元素。
// index：当前正在处理的元素的索引。
// array：调用 forEach 的数组。
// thisArg（可选）：执行回调函数时使用的 this 值。
// 
// 上述：MenuBoxArray.forEach( MenuBox => {} )
// (MenuBox) => {} 是一个箭头函数,即callback
// 关于箭头函数：MenuBox => {} 相当于 function(MenuBox) {}  (匿名函数)
// MenuBox 是参数，当需要多参数时，括号不能省略，即 (MenuBox_1, MenuBox_2) => {}


// item.querySelector('.menu-link').addEventListener('click', function(e) {})
// 这里的e即为事件对象，item.querySelector('.menu-link')返回的是触发事件的元素
// 在事件处理程序中，e 是一个事件对象，它提供了关于事件的详细信息
// 事件对象通常由浏览器自动创建并传递给事件处理程序。事件对象包含了许多有用的属性和方法，
// 例如：
// e.target：触发事件的元素。
// e.type：事件的类型（例如 'click'）。
// e.preventDefault()：阻止事件的默认行为。
// e.stopPropagation()：阻止事件的进一步传播（例如，阻止事件冒泡）。
// 
//e 不是一个关键字，而是一个参数名称。你可以使用任何合法的标识符作为参数名称，例如：event, a, b...