import Queue from './queue';

class QueueElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
  
  export class PriorityQueue extends Queue {
    constructor() {
      super();
    }
  // euqueue 入队
  //  重写enqueue，需要加入priority
    enqueue(element, priority) {
    //  根据传入元素，创建QueueElement对象
      const queueElement = new QueueElement(element,priority);
  
    //  判断队列是否为空
      if (this.isEmpty()) {
      //  如果是空队列，就不管优先级了，直接添加
        this.items.push(queueElement);
      } else {
      //  定义变量记录是否添加新元素
        let added = false;
  
        for(let i = 0; i < this.items.length; i++) {
        //  让新加入的元素进行优先级比较，priority越小，优先级越大
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i,0, queueElement);
            added = true;
            break;
          }
        }
      //  如果队列中元素都被遍历了，说明优先级最小，插到队列末尾
        if (!added) {
          this.items.push(queueElement);
        }
      }
    }
  
  //  dequeue 出队，从队列中删除前端元素，返回被删除的元素，因为已经插入时就排好序了，所以此时就无需排序
    dequeue() {
      return super.dequeue();
    }
  //  peek 查看队列前端元素
    peek() {
      return super.peek();
    }
  //  isEmpty 查看队列是否为空
    isEmpty() {
      return super.isEmpty();
    }
  //  size 查看队列中元素个数
    size() {
      return super.size();
    }
  // clear 清除队列中的元素
    clear() {
      return super.clear();
    }
  //  toString 将队列中元素以字符串形式输出
    toString() {
      let result = '';
      for (let item of this.items) {
        result += item.element + '-' + item.priority;
      }
      return result;
    }
  }