[toc]
## 🗽 JavaScript数据结构与算法
**详细笔记点击标题跳转查看**
### 💻 数据结构
#### 📚 [栈](https://www.yuque.com/docs/share/1a9daa6e-d31e-4389-aba0-215e4b8720c6?#)

栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

创建一个Stack类最简单的方式是使用一个数组来存储其元素。在处理大量数据的时候，需要评估如何操作数据是最高效的。在使用数组时，大部分方法的时间复杂度是O(n)。如果数组有更多元素的话，所需的时间会更长。另外，数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间。
如果能直接获取元素，占用较少的内存空间，并且仍然保证所有元素按照需要排列，那不是更好吗？对于使用JavaScript语言实现栈数据结构的场景，我们也可以使用一个JavaScript对象来存储所有的栈元素，保证它们的顺序并且遵循LIFO原则。
- [基于数组的栈](data-structures/stack/stack-array.js)
- [基于对象的栈](data-structures/stack/stack-object.js)

#### 🧮 [队列]((https://www.yuque.com/docs/share/2400d4b5-9a12-49cb-a957-f4ec54526530?))

队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
- [队列](data-structures/queue/queue.js)

#### 🚟 [双端队列](https://www.yuque.com/docs/share/2400d4b5-9a12-49cb-a957-f4ec54526530?)

双端队列（deque，或称double-ended queue）是一种允许我们同时从前端和后端添加和移除元素的特殊队列。
- [双端队列](data-structures/queue/deque.js)

### ⌚️ 算法