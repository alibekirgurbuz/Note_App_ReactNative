
import React,{useEffect} from 'react'
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';
import { getAllData } from './src/redux/dataSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Loading } from './src/components';




const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const App = () => {
  const dispatch = useDispatch()

  const{isLoading}=useSelector(state => state.data)

  useEffect(() => {
    dispatch(getAllData())

  }, [])
  



  if(isLoading) return <Loading/>

  return(
        <RootNavigation/>
    )  
}

export default AppWrapper
