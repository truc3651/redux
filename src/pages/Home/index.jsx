import HobbyList from '../../components/HobbyList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { randomNumber } from '../../utils/common'
import { addHobby, activeHobby } from '../../actions/hobby'

function Home() {
  const dispatch = useDispatch()

  // cái này là strict comparison ===
  //   const hobbyList = useSelector((state) => state.hobby.data)
  //   const activeId = useSelector(state => state.hobby.activeId)

  // cái này cũng strict comparison ===
  // nhưng vì mỗi lần store có update, nó sẽ chạy useSelector bên dưới
  // và khi chạy useSelector này, nó luôn luôn return về 1 object mới
  // vậy khi nó so sánh === với object cũ -> khác nhau hoàn toàn
  // và dù hobbyState không thay đổi, nó vẫn re-render lại component
  // const hobbyState = useSelector(state => ({
  //     data: state.hobby.data,
  //     activeId: state.hobby.activeId,
  // }))

  // nên nếu muốn xài thì dùng shallowEqual,
  // thằng này sẽ chịu khó đi so sánh từng key
  const hobbyState = useSelector(
    (state) => ({
      data: state.hobby.data,
      activeId: state.hobby.activeId,
    }),
    shallowEqual
  )

  const randomHobby = () => {
    const id = randomNumber()
    const action = addHobby({
      id,
      title: `Hobby ${id}`,
    })
    dispatch(action)
  }

  const handleActiveHobby = (hobbyId) => {
    const action = activeHobby(hobbyId)
    dispatch(action)
  }

  return (
    <>
      <button onClick={randomHobby}>Random</button>
      <HobbyList
        hobbyList={hobbyState.data}
        activeId={hobbyState.activeId}
        handleActiveHobby={handleActiveHobby}
      />
    </>
  )
}

export default Home
