import counterStore from './store/counter'
// 实现响应式
import {observer} from 'mobx-react'

function App() {
  return (
    <div className="App">
      {counterStore.count}

      <button
        onClick={counterStore.addCount}>++</button>
    </div>
  );
}

export default observer(App);
