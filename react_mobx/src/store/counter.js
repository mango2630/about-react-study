// 定义数据状态
// 数据响应式处理
// 定义 action 函数
// 实例化并导出实例

import { computed, makeAutoObservable } from "mobx";

class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addCount = () => {
        this.count ++;
    }
}

const counterStore = new CounterStore();
export default counterStore;